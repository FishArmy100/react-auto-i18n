import { setCurrentLocalRaw, setI18nDatabaseRaw } from "../i18n";
import { LangScriptCode, LangScriptObj } from "../core";
import React, { createContext, useContext, useEffect, useReducer, useState } from "react"
import { CachedMultiFileI18nDb, I18nDatabase, I18nDatabaseDefault, I18nDatabaseType, SimpleI18nDb, LanguageTranslations, FolderLanguageManifestType } from "../core/database";

/**
 * The context type for the {@link I18nProvider}
 */
export interface I18nContextType
{
    /**
     * The currently set {@link LangScriptCode}
     */
    readonly locale: LangScriptCode,
    
    /**
     * Gets a wrapper {@link LangScriptObj} around this locale
     * @returns a wrapper {@link LangScriptObj} around this locale
     */
    readonly getLocaleObj: () => LangScriptObj;

    /**
     * The currently set {@link I18nDatabase}
     */
    readonly database: I18nDatabase,

    /**
     * Sets the current {@link LangScriptCode}
     * @param locale The current local to set
     */
    readonly setLocale: (locale: LangScriptCode) => void,
    
    /**
     * Sets the current {@link I18nDatabase}
     * @param locale The current local to set
     */
    readonly setDatabase: (database: I18nDatabase) => void,

    /**
     * This is essentially a helper function for doing `.database.langs()`
     * @returns Returns all the loaded {@link LangScriptCode}'s in the current I18nDatabase.
     */
    readonly getLocales: () => LangScriptCode[],
}

const I18nContext = createContext<I18nContextType | null>(null);

/**
 * The properties for the {@link I18nProvider}
 */
export type I18nProviderProps = {
    /**
     * The providers children
     */
    children: React.ReactNode,
    /**
     * The default language code. When passed to the {@link I18nProvider}, defaults to `"eng_Latn"`
     */
    defaultLang: LangScriptCode,
    
    /**
     * The {@link I18nDatabase} for this provider
     */
    db: I18nDatabase,
}

/**
 * The provider for the {@link I18nDatabase} and current local.
 * 
 * Allows for getting and setting the global state used by {@link __t} in a more React like way.
 * 
 * ### **Example:**
 * ```tsx
 * import { StrictMode } from 'react'
 * import { createRoot } from 'react-dom/client'
 * import App from './App.tsx'
 * import { I18nProvider, RawI18nDb } from "react-auto-i18n";
 * import translations from "./assets/translations.json";
 * 
 * const db = new RawI18nDb(translations);
 * 
 * createRoot(document.getElementById('root')!).render(
 * 	  <I18nProvider 
 * 	  	defaultLang="eng_Latn" 
 * 	  	db={db}
 * 	  >
 * 	  	<App />
 * 	  </I18nProvider>
 * )
 * ```
 * 
 * @param props The {@link I18nProviderProps} for this provider
 */
export function I18nProvider({
    children,
    defaultLang = "eng_Latn",
    db: dbInit,
}: I18nProviderProps): React.ReactElement
{
    const [localeState, setLocaleState] = useState<LangScriptCode>(() => {
        setCurrentLocalRaw(defaultLang);
        return defaultLang;
    });

    const [databaseState, setDatabaseState] = useState<I18nDatabase>(() => {
        setI18nDatabaseRaw(dbInit);
        return dbInit;
    });
    
    const setDatabase = (db: I18nDatabase) => {
        setI18nDatabaseRaw(db);
        setDatabaseState(db);
    }

    const setLocale = (locale: LangScriptCode) => {
        setCurrentLocalRaw(locale);
        setLocaleState(locale);
    }

    // Load from file or folder
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        const listener = () => forceUpdate();
        databaseState.addOnChangeListener(listener);
        
        return () => { 
            databaseState.removeOnChangeListener(listener);
        };
    }, [databaseState]);

    useEffect(() => {
        setDatabase(dbInit);
    }, [dbInit])
    
    const getLocales = () => databaseState.langs();
    const getLocaleObj = () => new LangScriptObj(localeState);

    return (
        <I18nContext.Provider value={{ locale: localeState, getLocaleObj, database: databaseState, setLocale, setDatabase, getLocales, }}>
            {children}
        </I18nContext.Provider>
    )
}

/**
 * Allows for the modification and usage of the global database and locale states. Must be used on the context of a {@link I18nProvider}.
 * 
 * ### **Example:**
 * ```ts
 * const i18n = useI18n();
 * i18n.setLocale("spa_Latn");
 * 
 * let msg = __t("message", "Hello!");
 * console.log(msg); // Hola!
 * ```
 * @returns The instance of the current {@link I18nProvider}
 */
export function useI18n(): I18nContextType
{
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error("useLanguage must be used inside of the LanguageContext or LanguageProvider");
    return ctx;
}