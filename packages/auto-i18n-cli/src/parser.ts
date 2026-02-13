import * as path from "path";
import * as fs from "fs/promises";
import * as ts from "typescript";

export type FoundTranslation = {
    key: string,
    message: string,
}

export async function parse_ts_files(dir: string)
{
    const files = await getTSFiles(dir);
    const obj: Partial<Record<string, FoundTranslation>> = {};

    for (let file of files)
    {
        const content = await fs.readFile(file, "utf-8");
        const sourceFile = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);
    }
}

export async function getTSFiles(dir: string): Promise<string[]>
{
    const stat = await fs.stat(dir)
    if (stat.isFile())
    {
        const ext = path.extname(dir);
        if (ext === ".ts" || ext === ".tsx")
        {
            return [path.resolve(dir)];
        }
        else 
        {
            return []
        }
    }

    const entries = await fs.readdir(dir, { withFileTypes: true });

    const files = await Promise.all(
        entries.map(entry => {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory())
            {
                return getTSFiles(fullPath)
            }
            else if (entry.isFile() && (fullPath.endsWith(".ts") || fullPath.endsWith(".tsx")))
            {
                return [path.resolve(fullPath)]
            }
            else 
            {
                return []
            }
        })
    );

    return files.flat();
}


function findTCalls(node: ts.Node, file: string): FoundTranslation[] | string
{
    if (ts.isCallExpression(node))
    {
        const expression = node.expression;

        if (ts.isIdentifier(expression) && expression.text === "__t")
        {
            const args = node.arguments.map(arg => true)
        }
    }

    return ""
}