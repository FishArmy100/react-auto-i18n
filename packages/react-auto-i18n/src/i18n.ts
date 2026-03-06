import { LangScriptCode } from "./core";

/**
 * Essentially represents all translations loaded for this application. It can be represented in JSON as:
 * ```json
 * {
 *      "eng_Latn": {
 *          "main.first": "...",
 *          "main.second": "...",
 *          ...
 *      },
 *      "fra_Latn": {
 *          "main.first": "...",
 *          "main.second": "...",
 *          ...
 *      },
 *      "spa_Latn": {
 *          "main.first": "...",
 *          "main.second": "...",
 *          ...
 *      },
 *      ...
 * }
 * ```
 */
export type I18nDatabase = Partial<Readonly<Record<LangScriptCode, LanguageTranslations>>>

/**
 * A map that contains translations for all keys for a given language.
 */
export type LanguageTranslations = Partial<Readonly<Record<string, string | string[]>>>

let currentLocale: LangScriptCode = "eng_Latn";
let database: I18nDatabase = {}

/**
 * Sets the raw database used for translation. This is used by the `__t` function. \
 * **NOTE:** Prefer to use `useI18n().setDatabase(...)`, as this updates the current state.
 * @param db 
 */
export function setI18nDatabaseRaw(db: I18nDatabase)
{
    database = db
}

/**
 * Gets the raw database used for translation, which used by the `__t` function. \
 * **NOTE:** Prefer to use `useI18n().database` hook
 * @returns the raw `I18nDatabase` database
 */
export function getI18nDatabaseRaw(): I18nDatabase
{
    return database;
}

/**
 * Sets the raw locale used for translation. This is used by the `__t` function. \
 * **NOTE:** Prefer to use `useI18n().setLocale(...)`, as this updates the current state.
 * @param locale 
 */
export function setCurrentLocalRaw(locale: LangScriptCode)
{
    currentLocale = locale
}

/**
 * Gets the raw current locale used for translation, which used by the `__t` function. \
 * **NOTE:** Prefer to use `useI18n().locale` hook
 * @returns The current raw `LangScriptCode` locale
 */
export function getCurrentLocalRaw(): LangScriptCode
{
    return currentLocale;
}

/**
 * The primary translation function for this API. 
 * When using `auto-i18n-cli` to parse the program and generate the database automatically, both arguments must be raw string literals.
 * The `auto-i18n-cli` looks for all invocations of this function and generates a `I18nDatabase` compatible json file, with the proper translations.
 * 
 * ### **Translation (using auto-i18n-cli):** 
 * ```ts
 * // file.ts
 * let msg = __t("message", "Hello!");
 * ```
 * Translation command:
 * `npx auto-i18n-cli -i "./file.ts" -o "./translations.json" -l spa_Latn -s eng_Latn`
 * 
 * Outputs:
 * ```json
 * {
 *      "eng_Latn": {
 *          "message": "Hello!"
 *      },
 *      "spa_Latn": {
 *          "message": "Hola!"
 *      }
 * }
 * ```
 * 
 * ### **Usage**
 * ```ts
 * import db from "./translations.json";
 * setI18nDatabaseRaw(db);
 * setCurrentLocalRaw("spa_Latn");
 * let msg = __t("message", "Hello!");
 * 
 * console.log(msg); // Hola!
 * ```
 * 
 * ### **Escape Code**
 * You can use double curly braces `{{...}}` to stop the translation engine from translating any text inside. The curly braces are removed after translation.
 * ```ts
 * import db from "./translations.json";
 * setI18nDatabaseRaw(db);
 * setCurrentLocalRaw("spa_Latn");
 * 
 * let msg = __t("message", "Hello there! this is a test message for the {{'react-auto-i18n'}} program.");
 * 
 * assert(msg === "Hola, este es un mensaje de prueba para el programa 'react-auto-i18n'.")
 * ```
 * 
 * @param key The key for the translation
 * @param message The message to be translated
 * @returns The translation of the message for the currently set locale.
 */
export function __t(key: string, message: string): string 
{
    const translation = database[currentLocale]?.[key];
    if (translation === undefined)
    {
        return message;
    }
    else if (typeof(translation) === "string")
    {
        return translation;
    }
    else 
    {
        return translation[0];
    }
}

export type TVArgs<T> = [...[string, (t: T) => boolean][], string]
export function __tv<T extends { [k: string]: any | undefined }>(key: string, messages: TVArgs<T>, arg: T): string 
{
    const translated = inner_tv(key, messages, arg);
    const regex = /\{\{\$(\w+)\}\}/;
    
    return translated.replaceAll(regex, (_, p1: string) => {
        let a = arg[p1];
        if (a === undefined)
        {
            return `{{$${p1}}}`
        }
        else 
        {
            return `${a}`;
        }
    });
}

function inner_tv<T extends { [k: string]: any }>(key: string, messages: TVArgs<T>, arg: T): string
{
    const translation = database[currentLocale]?.[key];
    const index = selectIndex(messages, arg);

    if (translation === undefined)
    {
        const msg = messages[index];
        return typeof msg === "string" ? msg : msg[0]
    }

    if (typeof translation === "string") 
    {
        return translation;
    }

    return translation[index] ?? translation[translation.length - 1];
}

function selectIndex<T>(messages: TVArgs<T>, arg: T): number 
{
    for (let i = 0; i < messages.length - 1; i++) 
    {
        const m = messages[i];

        if (typeof m !== "string") 
        {
            const [, predicate] = m;
            if (predicate(arg)) return i;
        }
    }

    return messages.length - 1;
}

const msg = __tv("test.message.v", [
    ["You have one apple", ({count}) => count == 1],
    ["You have {{$count}} apples", ({count}) => count > 1],
    "You have no apples"
], { count: 1})