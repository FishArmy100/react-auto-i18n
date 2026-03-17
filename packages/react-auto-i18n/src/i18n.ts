import { LangScriptCode } from "./core";
import { I18nDatabase, I18nDatabaseDefault } from "./core/database";

let currentLocale: LangScriptCode = "eng_Latn";
let database: I18nDatabase = I18nDatabaseDefault;

/**
 * Sets the raw database used for translation. This is used by the {@link __t} and {@link __tv} functions. \
 * **NOTE:** Prefer to use `useI18n().setDatabase(...)`, as this updates the current state.
 * @param db 
 */
export function setI18nDatabaseRaw(db: I18nDatabase)
{
    database = db
}

/**
 * Gets the raw database used for translation, which used by the {@link __t} and {@link __tv} functions. \
 * **NOTE:** Prefer to use `useI18n().database` hook
 * @returns the raw `I18nDatabase` database
 */
export function getI18nDatabaseRaw(): I18nDatabase
{
    return database;
}

/**
 * Sets the raw locale used for translation. This is used by the {@link __t} and {@link __tv} functions. \
 * **NOTE:** Prefer to use `useI18n().setLocale(...)`, as this updates the current state.
 * @param locale 
 */
export function setCurrentLocalRaw(locale: LangScriptCode)
{
    currentLocale = locale
}

/**
 * Gets the raw current locale used for translation, which used by the {@link __t} and {@link __tv} functions. \
 * **NOTE:** Prefer to use `useI18n().locale` hook
 * @returns The current raw `LangScriptCode` locale
 */
export function getCurrentLocalRaw(): LangScriptCode
{
    return currentLocale;
}

/**
 * The primary translation function for this API. 
 * When using {@link https://github.com/FishArmy100/react-auto-i18n/tree/main/packages/auto-i18n-cli auto-i18n-cli} to parse the program and generate the database automatically, both arguments must be raw string literals.
 * The {@link https://github.com/FishArmy100/react-auto-i18n/tree/main/packages/auto-i18n-cli auto-i18n-cli} looks for all invocations of this function and generates a `I18nDatabase` compatible json file, with the proper translations.
 * 
 * ### **Translation (using auto-i18n-cli):** 
 * ```ts
 * // file.ts
 * let msg = __t("message", "Hello!");
 * ```
 * Translation command:
 * `npx auto-i18n-cli -i "./file.ts" -o "./translations.json" -l spa_Latn -s eng_Latn -b azure --azureKey "..."`
 * 
 * Outputs:
 * ```json
 * {
 *     "eng_Latn": {
 *         "message": "Hello!"
 *     },
 *     "spa_Latn": {
 *         "message": "Hola!"
 *     }
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
 * If a `$` is placed before the text inside of the escape code, it is treated as a variable which values can be passed, 
 * and incorporated into the text. 
 * 
 * **NOTE:** the passed arguments are **NOT** translated
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
 * @param arg A object that is passed as the argument to the selection functions and used for variable substitution
 * @returns The translation of the message for the currently set locale.
 */
export function __t<T extends { [k: string]: any | undefined }>(key: string, message: string, arg?: T): string 
{
    const translated = innerT(key, message);

    if (arg !== undefined)
    {
        const regex = /\{\{\$(\w+)\}\}/g;
    
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
    else 
    {
        return translated;
    }
}

function innerT(key: string, message: string): string 
{
    const translation = database.get(currentLocale, key);
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

/**
 * The secondary translation function for this API. 
 * When using {@link https://github.com/FishArmy100/react-auto-i18n/tree/main/packages/auto-i18n-cli auto-i18n-cli} to parse the program and generate the database automatically, `key` must be a string literal and `messages` 
 * must be an array literal, with the last argument being a string literal and all previous elements being an array literal with 
 * a string literal as the first element.
 * 
 * The {@link https://github.com/FishArmy100/react-auto-i18n/tree/main/packages/auto-i18n-cli auto-i18n-cli} looks for all invocations of this function and generates a `I18nDatabase` compatible json file, with the proper translations.
 * 
 * ### **Translation (using auto-i18n-cli):** 
 * ```ts
 * // file.ts
 * const msg = __tv("test.message.v", [
 *	  ["You have one apple", ({count}) => count == 1],
 *	  ["You have {{$count}} apples", ({count}) => count > 1],
 *	  "You have no apples"
 * ], { count: appleCount })
 * ```
 * Translation command:
 * `npx auto-i18n-cli -i "./file.ts" -o "./translations.json" -l spa_Latn -s eng_Latn -b azure --azureKey "..."`
 * 
 * Outputs:
 * ```json
 * {
 *     "eng_Latn": {
 *         "test.message.v": [
 *             "You have one apple",
 *             "You have {{$count}} apples",
 *             "You have no apples"
 *         ]
 *     },
 *     "spa_Latn": {
 *          "test.message.v": [
 *             "Tienes una manzana",
 *             "Tienes {{$count}} manzanas",
 *             "No tienes manzanas"
 *         ]
 *     }
 * }
 * ```
 * 
 * ### **Usage**
 * ```ts
 * import db from "./translations.json";
 * setI18nDatabaseRaw(db);
 * setCurrentLocalRaw("spa_Latn");
 * 
 * const appleCount = 5;
 * 
 * const msg = __tv("test.message.v", [
 *	  ["You have one apple", ({count}) => count == 1],
 *	  ["You have {{$count}} apples", ({count}) => count > 1],
 *	  "You have no apples"
 * ], { count: appleCount })
 * 
 * console.log(msg); // Tienes 5 manzanas!
 * ```
 * 
 * ### **Escape Code**
 * You can use double curly braces `{{...}}` to stop the translation engine from translating any text inside. 
 * The curly braces are removed after translation. 
 * If a `$` is placed before the text inside of the escape code, it is treated as a variable which values can be passed, 
 * and incorporated into the text. 
 * 
 * **NOTE:** the passed arguments are **NOT** translated
 * ```ts
 * import db from "./translations.json";
 * setI18nDatabaseRaw(db);
 * setCurrentLocalRaw("spa_Latn");
 * 
 * const appleCount = 5;
 * 
 * const msg = __tv("test.message.v", [
 *	  ["You have one apple", ({count}) => count == 1],
 *	  ["You have {{$count}} apples", ({count}) => count > 1],
 *	  "You have no apples"
 * ], { count: appleCount })
 * 
 * console.log(msg); // Tienes 5 manzanas!
 * ```
 * 
 * @param key The key for the translation
 * @param messages An array of message variants
 * @param arg A object that is passed as the argument to the selection functions and used for variable substitution
 * @returns The translation of the message for the currently set locale.
 */
export function __tv<T extends { [k: string]: any | undefined }>(key: string, messages: TVArgs<T>, arg: T): string 
{
    const translated = innerTv(key, messages, arg);
    const regex = /\{\{\$(\w+)\}\}/g;
    
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

function innerTv<T extends { [k: string]: any }>(key: string, messages: TVArgs<T>, arg: T): string
{
    const translation = database.get(currentLocale, key);
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