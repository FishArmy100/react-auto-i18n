import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PythonShell } from 'python-shell';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const python_path = path.resolve(__dirname, "../../../translator/main.py");

export async function run_python(args: string[] = []): Promise<string> 
{
    const results = await PythonShell.run(python_path, { 
        args 
    });

    return results?.join('\n') || '';
}