#!/usr/bin/env node

import { ProgressUpdate, runPython, TranslateArgs } from "./python_ffi.js";
import { parse } from 'ts-command-line-args';
import * as fs from 'fs';
import * as path from 'path';
import pkg from "../package.json" with { type: 'json' }
import { LanguageCode, nllbToAzure, stringToLanguageCode } from "./langs.js";
import { parseTSFiles } from "./parser.js";
import chalk from "chalk";
import { logError, logMessage } from "./utils.js";
import { SingleBar } from "cli-progress"

const DEFAULT_MAX_TOKENS: number = 250;

type ProgramOptions = {
	languages?: string[],
	input: string,
	out?: string,
	sourceLang?: string,
	help?: boolean,
	maxTokens?: number,
	backend: string,
	azureKey?: string,
	azureRegion?: string,
	azureEndpoint?: string,
	nllbModel?: string,
	multiFile?: boolean,
}

async function main() 
{
	let options: ProgramOptions;
	try 
	{
		options = parse<ProgramOptions>(
			{
				input: { 
					type: String, 
					alias: 'i', 
					description: 'The input typescript file or typescript project directory' 
				},
				languages: { 
					type: String, 
					alias: 'l', 
					multiple: true, 
					optional: true, 
					description: 'The languages to generate translations for' 
				},
				out: { 
					type: String, 
					alias: 'o', 
					optional: true, 
					description: 'The output file path' 
				},
				sourceLang: { 
					type: String, 
					alias: 's', 
					optional: true, 
					description: 'The source language that all __t use. Defaults to English' 
				},
				maxTokens: {
					type: Number,
					alias: 't',
					optional: true,
					description: `The maximum number of tokens. Defaults to ${DEFAULT_MAX_TOKENS}`
				},
				backend: {
					type: String,
					alias: 'b',
					description: 'Translation backend to use: "nllb" or "azure"',
				},
				azureKey: {
					type: String,
					optional: true,
					description: 'Azure Translator API key (required when backend is "azure")',
				},
				azureRegion: {
					type: String,
					optional: true,
					description: 'Azure Translator region (default: eastus)',
				},
				azureEndpoint: {
					type: String,
					optional: true,
					description: 'Azure Translator endpoint URL',
				},
				nllbModel: {
					type: String,
					optional: true,
					description: 'NLLB model name (default: facebook/nllb-200-distilled-1.3B)',
				},
				multiFile: {
					type: Boolean,
					optional: true,
					alias: 'm',
					description: 'If used will separate each language into its own file with a manifest'
				},
				help: { 
					type: Boolean, 
					optional: true, 
					alias: 'h', 
					description: 'Show this help message' 
				},
			},
			{
				helpArg: 'help',
				headerContentSections: [
					{ 
						header: 'auto-i18n-cli', 
						content: `A translation database generator library for the react-auto-i18n library\n\nVersion: ${pkg.version}` 
					}
				],
			}
		);
	}
	catch (error)
	{
		logError("Console Error:\n")
		console.log(error);
		return;
	}

	runWithOptions(options)
}

async function runWithOptions(options: ProgramOptions)
{
	logMessage("Running command...")
	const validated = validateProgramOptions(options);
	if (!validated) return;

	const { input, output, translateArgs } = validated;

	logMessage("Parsing TS files...")
	const result = await parseTSFiles(input);
	if (result.type === "error")
	{
		logError("Error:\n" + result.value.join("\n\n"));
		return;
	}

	const segments = Object.values(result.value)
		.filter(v => v !== undefined)
		.reduce((acc: { [key: string]: (string | string[]); }, v) => { 
			acc[v.key] = v.message; 
			return acc; 
		}, {});

	translateArgs.segments = segments;

	logMessage("Translating...");
	let success = await generateTranslationFile(translateArgs, output, options.multiFile ?? false);
	if (!success)
	{
		logError("Translation Failed");
		return;
	}

	const fullOutPath = path.resolve(output);
	logMessage(`Extraction & Translation complete! Translations located at: ${fullOutPath}`);
}

type ValidatedOptions = {
	input: string,
	output: string,
	translateArgs: TranslateArgs,
}

function validateProgramOptions(options: ProgramOptions): ValidatedOptions | null
{
	const inputPath = path.resolve(options.input);
	if (!fs.existsSync(inputPath))
	{
		logError(`Error: file path '${chalk.bold(inputPath)}' does not exist`);
		return null;
	}

	if (options.backend !== "nllb" && options.backend !== "azure")
	{
		logError(`Error: backend must be ${chalk.bold("nllb")} or ${chalk.bold("azure")}`);
		return null;
	}

	const langs: LanguageCode[] = []
	const option_langs = options.languages ?? [];
	for (let lang of option_langs)
	{
		const code = stringToLanguageCode(lang);
		if (!code)
		{
			logError(`Error: language code ${chalk.bold(lang)} is not valid`);
			return null;
		}

		if (options.backend === "azure" && nllbToAzure(code) === null)
		{
			logError(`Error: language code ${chalk.bold(lang)} has no Azure equivalent`);
			return null;
		}

		langs.push(code);
	}

	let src_lang: LanguageCode = "eng_Latn";
	if (options.sourceLang)
	{
		const code = stringToLanguageCode(options.sourceLang);
		if (!code)
		{
			logError(`Error: language code ${chalk.bold(options.sourceLang)} is not valid`);
			return null;
		}

		src_lang = code;
	}

	let max_tokens = options.maxTokens;
	if (max_tokens === undefined)
	{
		max_tokens = DEFAULT_MAX_TOKENS;
	}

	if (max_tokens < 100)
	{
		logError(`Error: maxTokens cannot be less than 100`);
		return null;
	}

	let translateArgs: TranslateArgs;
	if (options.backend === "azure")
	{
		if (!options.azureKey)
		{
			logError(`Error: ${chalk.bold("--azureKey")} is required when using the Azure backend`);
			return null;
		}
		
		translateArgs = {
			langs,
			src_lang,
			segments: {},
			max_tokens,
			backend: "azure",
			azure_key: options.azureKey,
			...(options.azureRegion && { azure_region: options.azureRegion }),
			...(options.azureEndpoint && { azure_endpoint: options.azureEndpoint }),
		};
	}
	else
	{
		translateArgs = {
			langs,
			src_lang,
			segments: {},
			max_tokens,
			backend: "nllb",
			...(options.nllbModel && { nllb_model: options.nllbModel }),
		};
	}

	const output = options.out ?? ( options.multiFile ? "translations" : "translations.json");

	return { input: inputPath, output, translateArgs }
}

async function generateTranslationFile(args: TranslateArgs, out: string, multiFile: boolean): Promise<boolean>
{	
	const bar = new SingleBar({
		format: chalk.green(`Generation Progress |${chalk.bold("{bar}")}| {percentage}% || {value}/{total} Chunks || ETA: {eta_formatted}`),
		barCompleteChar: '\u2588',
		barCompleteString: '\u2591',
		hideCursor: true,
	});

	let bar_started = false;
	let is_error = false;

    await runPython(args, (p: ProgressUpdate) => 
		{
			if (!bar_started)
			{
				bar.start(args.langs.length * Object.values(args.segments).length, 0);
				bar_started = true;
			}
			bar.update(p.current)
		})
		.then(o => {
			if (multiFile)
			{
				fs.mkdirSync(out, { recursive: true });
				Object.entries(o.values).forEach(([k, v]) => {
					const filePath = path.join(out, `${k}.json`);
					fs.writeFileSync(filePath, JSON.stringify(v, null, 2));
				});

				const langs = Object.keys(o.values);
				const manifestData = { langs };
				const manifestPath = path.join(out, "manifest.json");
				fs.writeFileSync(manifestPath, JSON.stringify(manifestData, null, 2));
			}
			else 
			{
				fs.mkdirSync(path.dirname(out), { recursive: true });
				fs.writeFileSync(out, JSON.stringify(o.values, null, 2));
			}
		})
		.catch(e => {
			is_error = true;
			bar.stop();
			logError(e);
		})
		.finally(() => {
			bar.stop();
		});
	
	return !is_error;
}

main();