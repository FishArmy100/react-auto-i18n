import React, { useEffect, useState } from "react";
import { CachedMultiFileI18nDb, I18nDatabaseDefault, SimpleI18nDb, LanguageTranslations, FolderLanguageManifestType } from "../core/database";
import { I18nProvider } from "./I18nProvider";
import { LangScriptCode } from "../core";

/**
 * The properties for the {@link I18nMultiFileProvider}
 */
export type I18nMultiFileProviderProps = {
    /**
     * The folder path which contains all multiple files of type {@link LanguageTranslations}, and each must be named using {@link LangScriptCode} followed by a `.json`. 
     * It needs to point to a folder inside of the `public` folder, and the folder must contain a `manifest.json` file of the format {@link FolderLanguageManifestType}
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
 * A wrapper around the {@link I18nProvider} and {@link CachedMultiFileI18nDb}, which loads in a static translation json database folder from the `public` folder.
 * @param props The {@link I18nMultiFileProviderProps} for this provider.
 * 
 * ### **Example**
 * ```tsx
 * import { StrictMode } from 'react'
 * import { createRoot } from 'react-dom/client'
 * import App from './App.tsx'
 * import { I18nProvider, RawI18nDb } from "react-auto-i18n";
 * 
 * createRoot(document.getElementById('root')!).render(
 * 	  <I18nMultiFileProvider 
 * 	  	defaultLang="eng_Latn" 
 * 	  	path="./translations"
 * 	  >
 * 	  	<App />
 * 	  </I18nMultiFileProvider>
 * )
 * ```
 * 
 */
export function I18nMultiFileProvider({
    path,
    children,
    defaultLang = "eng_Latn",
}: I18nMultiFileProviderProps): React.ReactElement
{
    const [db, setDb] = useState(I18nDatabaseDefault);

    useEffect(() => {
        let canceled = false;

        CachedMultiFileI18nDb.load(path).then(loaded => {
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