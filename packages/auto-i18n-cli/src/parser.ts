import * as path from "path";
import * as fs from "fs/promises";
import ts from "typescript";

export type FoundTranslation = {
    key: string,
    message: string,
}

export type ParsedResult = |{
    type: "ok",
    value: Partial<Record<string, FoundTranslation>>,
}| {
    type: "error",
    value: string[]
}

export async function parseTSFiles(dir: string) : Promise<ParsedResult>
{
    const files = await getTSFiles(dir);
    const obj: Partial<Record<string, FoundTranslation>> = {};
    
    const errors: string[] = [];

    for (let file of files)
    {
        const content = await fs.readFile(file, "utf-8");
        const sourceFile = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true);

        const results = findTCalls(sourceFile, sourceFile);
        if (results.type === "ok")
        {
            for (let result of results.translations)
            {
                if (obj[result.translation.key] !== undefined)
                {
                    errors.push(formatError(file, content, 
                        `translation with id '${result.translation.key}' already exists`, 
                        result.idStart, result.idEnd))
                }
                else 
                {
                    obj[result.translation.key] = result.translation;
                }
            }
        }
        else 
        {
            errors.push(formatError(file, content, results.message, results.start, results.end))
        }
    }

    if (errors.length > 0)
    {
        return {
            type: "error",
            value: errors,
        }
    }
    else 
    {
        return {
            type: "ok",
            value: obj,
        }
    }
}

export function formatError(fileName: string, fileContent: string, message: string, start: ts.LineAndCharacter, end: ts.LineAndCharacter): string
{
    const lines = fileContent.split(/\r?\n/);

    const errorLine = lines[start.line];

    const markerLine = 
        " ".repeat(start.character) + 
        "^".repeat(Math.max(end.character - start.character, 1));

    return `${fileName}:${start.line + 1}:${start.character + 1} - Error: ${message}\n` +
           `${errorLine}\n` +
           `${markerLine}`;
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

export type FoundCallsResult = |{
    type: "ok",
    translations: {
        translation: FoundTranslation,
        idStart: ts.LineAndCharacter,
        idEnd: ts.LineAndCharacter,
    }[]
}| {
    type: "error",
    message: string,
    start: ts.LineAndCharacter,
    end: ts.LineAndCharacter,
}

export function findTCalls(node: ts.Node, file: ts.SourceFile): FoundCallsResult
{
    if (ts.isCallExpression(node))
    {
        const expression = node.expression;

        if (ts.isIdentifier(expression) && expression.text === "__t")
        {
            if (node.arguments.length != 2)
            {
                return {
                    type: "error",
                    message: `__t calls must have two arguments`,
                    start: file.getLineAndCharacterOfPosition(expression.getStart()),
                    end: file.getLineAndCharacterOfPosition(expression.getEnd())
                }
            }

            const arg1 = node.arguments[0];
            const arg2 = node.arguments[1];

            if (!ts.isStringLiteral(arg1))
            {
                return {
                    type: "error",
                    message: `arg1 is not a string literal`,
                    start: file.getLineAndCharacterOfPosition(arg1.getStart()),
                    end: file.getLineAndCharacterOfPosition(arg1.getEnd())
                }
            }

            if (!ts.isStringLiteral(arg2))
            {
                return {
                    type: "error",
                    message: `arg2 is not a string literal`,
                    start: file.getLineAndCharacterOfPosition(arg2.getStart()),
                    end: file.getLineAndCharacterOfPosition(arg2.getEnd())
                }
            }

            return {
                type: "ok",
                translations: [{
                    translation: {
                        key: arg1.text,
                        message: arg2.text,
                    },
                    idStart: file.getLineAndCharacterOfPosition(arg1.getStart()),
                    idEnd: file.getLineAndCharacterOfPosition(arg1.getEnd())
                }],
            }
        }
    }
    
    const translations: { 
        translation: FoundTranslation,
        idStart: ts.LineAndCharacter,
        idEnd: ts.LineAndCharacter,
    }[] = [];

    const results = node.getChildren().map(n => {
        return findTCalls(n, file);
    });

    for (let result of results)
    {
        if (result.type === "error")
        {
            return result;
        }
        else 
        {
            translations.push(...result.translations)
        }
    }

    return {
        type: "ok",
        translations,
    }
}