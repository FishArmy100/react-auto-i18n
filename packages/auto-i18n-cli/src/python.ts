import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PythonShell } from 'python-shell';
import { NLLBLanguageCode } from './langs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const python_path = path.resolve(__dirname, "../../../translator/translate.py");

export type TranslateArgs = {
    segments: { [i: string]: string }
    langs: NLLBLanguageCode[],
    src_lang: NLLBLanguageCode,
}

export type TranslateResult = {
    values: { [lang: string]: { [key: string]: string } }
}

export async function run_python(args: TranslateArgs): Promise<TranslateResult> 
{
    let converted = JSON.stringify(args)
    const result = await PythonShell.run(python_path, { 
        args: [converted],
        encoding: "utf8"
    });
    
    try 
    {
        return JSON.parse(result[0] as string)
    }
    catch 
    {
        console.log(result[0] as string)
    }

    return {
        values: {}
    }
}