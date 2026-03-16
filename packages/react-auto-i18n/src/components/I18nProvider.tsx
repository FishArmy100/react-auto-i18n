import { setCurrentLocalRaw, setI18nDatabaseRaw } from "../i18n";
import { LangScriptCode, LangScriptObj } from "../core";
import React, { createContext, useContext, useEffect, useState } from "react"
import { CachedI18nDb, I18nDatabase, I18nDatabaseDefault, I18nDatabaseType, RawI18nDb } from "../core/database";

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
     * Gets a wrapper `LangScriptObj` around this locale
     * @returns a wrapper `LangScriptObj` around this locale
     */
    readonly getLocaleObj: () => LangScriptObj;

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

export type I18nDatabaseSource = |{
    mode: "inline",
    data: I18nDatabaseType
} |{
    mode: "single-file",
    path: string,
} |{
    mode: "multi-file",
    path: string,
} |{
    mode: "raw",
    db: I18nDatabase
}

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
    defaultLang: LangScriptCode,
    
    /**
     * The default database. When passed to the `I18nProvider`, defaults to `{}`
     */
    dbSource: I18nDatabaseSource,
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
    defaultLang = "eng_Latn",
    dbSource,
}: I18nProviderProps): React.ReactElement
{
    const [localeState, setLocaleState] = useState<LangScriptCode>(() => {
        setCurrentLocalRaw(defaultLang);
        return defaultLang;
    });

    const [databaseState, setDatabaseState] = useState<I18nDatabase>(I18nDatabaseDefault);
    
    const setDatabase = (db: I18nDatabase) => {
        setI18nDatabaseRaw(db);
        setDatabaseState(db);
    }

    const setLocale = (locale: LangScriptCode) => {
        setCurrentLocalRaw(locale);
        setLocaleState(locale);
    }

    // Load from file or folder
    useEffect(() => {
        if (dbSource.mode === "inline") 
        {
            setDatabase(new RawI18nDb(dbSource.data));
            return;
        }
        else if (dbSource.mode === "raw")
        {
            setDatabase(dbSource.db);
        }

        let cancelled = false;

        if (dbSource.mode === "single-file") 
        {
            RawI18nDb.load(dbSource.path).then(db => {
                if (!cancelled) 
                {
                    setDatabase(db)
                };
            });
        } 
        else if (dbSource.mode === "multi-file") 
        {
            let cachedDb: CachedI18nDb | null = null;

            const listener = (db: CachedI18nDb) => {
                if (!cancelled) setDatabaseState(db);
            };

            CachedI18nDb.load(dbSource.path).then(db => {
                if (cancelled) 
                    return;

                cachedDb = db;
                db.addOnChangeListener(listener);
                setDatabaseState(db);
            });

            return () => {
                cancelled = true;
                cachedDb?.removeOnChangeListener(listener);
            };
        }

        return () => { cancelled = true; };

    }, [dbSource]);
    
    const getLocales = () => databaseState.langs();
    const getLocaleObj = () => new LangScriptObj(localeState);

    return (
        <I18nContext.Provider value={{ locale: localeState, getLocaleObj, database: databaseState, setLocale, setDatabase, getLocales, }}>
            {children}
        </I18nContext.Provider>
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