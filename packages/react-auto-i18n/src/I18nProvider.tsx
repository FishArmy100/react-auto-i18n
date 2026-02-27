import { I18nDatabase, setCurrentLocalRaw, setI18nDatabaseRaw } from "./i18n";
import { LangScriptCode } from "./langs";
import React, { createContext, useContext, useEffect, useState } from "react"

/**
 * The context type for the `I18nProvider`
 */
export interface I18nContextType
{
    /**
     * The currently set `LangScriptCode`
     */
    readonly locale: LangScriptCode,
    /**
     * The currently set `I18nDatabase`
     */
    readonly database: I18nDatabase,

    /**
     * Sets the current `LangScriptCode`
     * @param locale The current local to set
     */
    readonly setLocale: (locale: LangScriptCode) => void,
    
    /**
     * Sets the current `I18nDatabase`
     * @param locale The current local to set
     */
    readonly setDatabase: (database: I18nDatabase) => void,

    /**
     * This is essentially a helper function for doing Object.keys on the database
     * @returns Returns all the loaded `LangScriptCode`s in the current I18nDatabase.
     */
    readonly getLocales: () => LangScriptCode[],
}

const I18nContext = createContext<I18nContextType | null>(null);

/**
 * The properties for the `I18nProvider`
 */
export type I18nProviderProps = {
    /**
     * The providers children
     */
    children: React.ReactNode,
    /**
     * The default language code. When passed to the `I18nProvider`, defaults to `"eng_Latn"`
     */
    default_lang: LangScriptCode,

    
    /**
     * The default database. When passed to the `I18nProvider`, defaults to `{}`
     */
    default_database: I18nDatabase,
}

/**
 * The provider for the `I18nDatabase` and current local.
 * 
 * Allows for getting and setting the global state used by `__t` in a more React like way.
 * ### **Example:**
 * ```tsx
 * import { StrictMode } from 'react'
 * import { createRoot } from 'react-dom/client'
 * import App from './App.tsx'
 * import { I18nProvider } from "react-auto-i18n";
 * import db from "./assets/translations.json";
 * 
 * createRoot(document.getElementById('root')!).render(
 * 	  <I18nProvider 
 * 	  	default_lang="eng_Latn" 
 * 	  	default_database={db}
 * 	  >
 * 	  	<App />
 * 	  </I18nProvider>
 * )
 * ```
 * 
 * @param props The `I18nProviderProps` for this provider
 */
export function I18nProvider({
    children,
    default_lang = "eng_Latn",
    default_database = {},
}: I18nProviderProps): React.ReactElement
{
    const [localeState, setLocaleState] = useState<LangScriptCode>(default_lang);
    const [databaseState, setDatabaseState] = useState<I18nDatabase>(default_database);

    useEffect(() => {
        setCurrentLocalRaw(default_lang)
        setI18nDatabaseRaw(default_database);
    }, [])

    const setLocale = (locale: LangScriptCode) => {
        setCurrentLocalRaw(locale);
        setLocaleState(locale);
    }

    const setDatabase = (database: I18nDatabase) => {
        setI18nDatabaseRaw(database);
        setDatabaseState(database);
    }

    const getLocales = () => {
        return Object.keys(databaseState) as LangScriptCode[];
    }

    return (
        <I18nContext value={{ locale: localeState, database: databaseState, setLocale, setDatabase, getLocales, }}>
            {children}
        </I18nContext>
    )
}

/**
 * Allows for the modification and usage of the global database and locale states. Must be used on the context of a `I18nProvider`.
 * 
 * ### **Example:**
 * ```ts
 * const i18n = useI18n();
 * i18n.setLocale("spa_Latn");
 * 
 * let msg = __t("message", "Hello!");
 * console.log(msg); // Hola!
 * ```
 * @returns The instance of the current `I18nContext`
 */
export function useI18n(): I18nContextType
{
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useLanguage must be used inside of the LanguageContext or LanguageProvider");
    return ctx;
}