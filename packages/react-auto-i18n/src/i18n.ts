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
export type LanguageTranslations = Partial<Readonly<Record<string, string>>>

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
 * @param key The key for the translation
 * @param message The message to be translated
 * @returns The translation of the message for the currently set locale.
 */
export function __t(key: string, message: string): string 
{
    return database[currentLocale]?.[key] ?? message
}