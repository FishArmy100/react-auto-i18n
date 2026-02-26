import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PythonShell } from 'python-shell';
import { LanguageCode } from './langs.js';
import { logMessage, logWarning } from './utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const python_path = path.resolve(__dirname, "../../../translator/translate.py");

export type ProgressUpdate = {
    current: number,
    total: number,
    lang: string,
}

export type TranslateArgs = {
    segments: { [i: string]: string }
    langs: LanguageCode[],
    src_lang: LanguageCode,
}

export type TranslateResult = {
    values: { [lang: string]: { [key: string]: string } }
}

export async function runPython(
    args: TranslateArgs,
    onProgress?: (update: ProgressUpdate) => void,
): Promise<TranslateResult> 
{
    let converted = JSON.stringify(args);

    return new Promise((resolve, reject) => {

        logMessage("Loading Python shell...")
        const shell = new PythonShell(python_path, {
            args: [converted],
            encoding: "utf-8",
        });

        logMessage(`Running ${python_path}...`)

        shell.on("message", (raw: string) => {
            try 
            {
                const msg = JSON.parse(raw);
                if (msg.type === "progress")
                {
                    onProgress?.(msg);
                }
                else if (msg.type === "result")
                {
                    resolve({ values: msg.values })
                }
                else if (msg.type === "error")
                {
                    reject(new Error(msg.message))
                }
                else 
                {
                    logWarning(`Unknown message: ${msg}`)
                }
            }
            catch 
            {
                logWarning(`Unparsable message from python`);
            }

            shell.on("error", reject)
            shell.end(err => { if (err) reject(err) })
        })
    })
}