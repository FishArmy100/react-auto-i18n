#!/usr/bin/env node

import { run_python, TranslateArgs } from "./python.js";
import { parse } from 'ts-command-line-args';
import * as fs from 'fs';
import * as path from 'path';
import pkg from "../package.json"
import { LanguageCode, stringToLanguageCode } from "./langs.js";
import { parseTSFiles } from "./parser.js";
import chalk from "chalk";
import { logError, logMessage } from "./utils.js";

type ProgramOptions = {
	languages?: string[],
	input: string,
	out?: string,
	sourceLang?: string,
	help?: boolean,
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


	run_with_options(options)
}

async function run_with_options(options: ProgramOptions)
{
	logMessage("Running command...")
	const validated = validate_program_options(options);
	if (!validated) return;

	const { langs, input, output, source_lang } = validated;

	logMessage("Parsing TS files...")
	const result = await parseTSFiles(input);
	if (result.type === "error")
	{
		logError("Error:\n" + result.value.join("\n\n"));
		return;
	}

	const segments = Object.values(result.value)
		.filter(v => v !== undefined)
		.reduce((acc: { [key: string]: string; }, v) => { 
			acc[v.key] = v.message; 
			return acc; 
		}, {});

	logMessage("Translating...");
	await generate_files({
		src_lang: source_lang,
		segments,
		langs,
	}, output);

	const fullOutPath = path.resolve(output);
	logMessage(`Extraction & Translation complete! Translations located at: ${fullOutPath}`);
}

function validate_program_options(options: ProgramOptions): { langs: LanguageCode[], input: string, output: string, source_lang: LanguageCode } | null
{
	const inputPath = path.resolve(options.input);
	if (!fs.existsSync(inputPath))
	{
		logError(`Error: file path '${chalk.bold(inputPath)}' does not exist`);
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

		langs.push(code);
	}

	let source_lang: LanguageCode = "eng_Latn";
	if (options.sourceLang)
	{
		const code = stringToLanguageCode(options.sourceLang);
		if (!code)
		{
			logError(`Error: language code ${chalk.bold(options.sourceLang)} is not valid`);
			return null;
		}

		source_lang = code;
	}

	const output = options.out ?? "out.json";

	return { langs, input: inputPath, output, source_lang }
}

async function generate_files(args: TranslateArgs, out: string)
{	
    return await run_python(args)
		.then(o => {
			fs.mkdirSync(path.dirname(out), { recursive: true });
			fs.writeFileSync(out, JSON.stringify(o, null, 2));
		})
		.catch(logError);
}

main();