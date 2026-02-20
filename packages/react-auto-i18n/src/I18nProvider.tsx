import { I18nDatabase } from "./i18n";
import { LangCode } from "./langs";
import React, { createContext, useContext, useState } from "react"

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
    const [locale, setLocale] = useState<LangCode>(default_lang);
    const [database, setDatabase] = useState<I18nDatabase>(default_database);

    return (
        <I18nContext value={{ locale, database, setLocale, setDatabase }}>
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