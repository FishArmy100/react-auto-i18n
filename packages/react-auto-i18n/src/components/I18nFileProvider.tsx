import React, { useEffect, useState } from "react";
import { I18nDatabaseDefault, SimpleI18nDb, I18nDatabaseType } from "../core/database";
import { I18nProvider } from "./I18nProvider";
import { LangScriptCode } from "../core";

/**
 * The properties for the {@link I18nFileProvider}
 */
export type I18nFileProviderProps = {
    /**
     * The file path to the json database. It needs to point to a file inside of the `public` folder and the json must be in the format of {@link I18nDatabaseType}.
     */
    path: string,
    /**
     * The children of this component
     */
    children: React.ReactNode,
    /**
     * The default language for the provider. Defaults to `"eng_Latn"`
     */
    defaultLang: LangScriptCode
}

/**
 * A wrapper around the {@link I18nProvider} and {@link SimpleI18nDb}, which loads in a static translation json database file from the `public` folder.
 * @param props The {@link I18nFileProviderProps} for this provider.
 * 
 * ### **Example**
 * ```tsx
 * import { StrictMode } from 'react'
 * import { createRoot } from 'react-dom/client'
 * import App from './App.tsx'
 * import { I18nProvider, RawI18nDb } from "react-auto-i18n";
 * 
 * createRoot(document.getElementById('root')!).render(
 * 	  <I18nFileProvider 
 * 	  	defaultLang="eng_Latn" 
 * 	  	path="./translations.json"
 * 	  >
 * 	  	<App />
 * 	  </I18nFileProvider>
 * )
 * ```
 */
export function I18nFileProvider({
    path,
    children,
    defaultLang = "eng_Latn",
}: I18nFileProviderProps): React.ReactElement
{
    const [db, setDb] = useState(I18nDatabaseDefault);

    useEffect(() => {
        let canceled = false;

        SimpleI18nDb.load(path).then(loaded => {
            if (!canceled)
            {
                setDb(loaded);
            }
        })

        return () => {
            canceled = true;
        }
    }, [path])

    return (
        <I18nProvider 
            defaultLang={defaultLang}
            db={db}
        >
            {children}
        </I18nProvider>
    )
}