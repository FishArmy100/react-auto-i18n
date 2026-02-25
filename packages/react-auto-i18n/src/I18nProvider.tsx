import { I18nDatabase, setCurrentLocalRaw, setI18nDatabaseRaw } from "./i18n";
import { LangCode } from "./langs";
import React, { createContext, useContext, useEffect, useState } from "react"

export interface I18nContextType
{
    readonly locale: LangCode,
    readonly database: I18nDatabase,
    readonly setLocale: (locale: LangCode) => void,
    readonly setDatabase: (database: I18nDatabase) => void,
}

const I18nContext = createContext<I18nContextType | null>(null);

export type I18nProviderProps = {
    children: React.ReactNode,
    default_lang: LangCode,
    default_database: I18nDatabase,
}

export function I18nProvider({
    children,
    default_lang = "eng_Latn",
    default_database = {},
}: I18nProviderProps): React.ReactElement
{
    const [localeState, setLocaleState] = useState<LangCode>(default_lang);
    const [databaseState, setDatabaseState] = useState<I18nDatabase>(default_database);

    useEffect(() => {
        setCurrentLocalRaw(default_lang)
        setI18nDatabaseRaw(default_database);
    }, [])

    const setLocale = (locale: LangCode) => {
        setCurrentLocalRaw(locale);
        setLocaleState(locale);
    }

    const setDatabase = (database: I18nDatabase) => {
        setI18nDatabaseRaw(database);
        setDatabaseState(database);
    }

    return (
        <I18nContext value={{ locale: localeState, database: databaseState, setLocale, setDatabase }}>
            {children}
        </I18nContext>
    )
}

export function useI18n(): I18nContextType
{
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useLanguage must be used inside of the LanguageContext or LanguageProvider");
    return ctx;
}