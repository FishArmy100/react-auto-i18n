import { LangCode } from "./langs";

export type I18nDatabase = Partial<Record<LangCode, LanguageTranslations>>
export type LanguageTranslations = Partial<Record<string, string>>

let currentLocale: LangCode = "eng_Latn";
let database: I18nDatabase = {}

export function setI18nDatabase(db: I18nDatabase)
{
    database = db
}

export function setCurrentLocal(locale: LangCode)
{
    currentLocale = locale
}

export function __t(key: string, message: string): string 
{
    return database[currentLocale]?.[key] ?? message
}