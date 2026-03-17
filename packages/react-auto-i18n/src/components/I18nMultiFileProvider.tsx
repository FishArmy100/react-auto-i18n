import React, { useEffect, useState } from "react";
import { CachedMultiFileI18nDb, I18nDatabaseDefault, SimpleI18nDb } from "../core/database";
import { I18nProvider } from "./I18nProvider";
import { LangScriptCode } from "../core";

export type I18nMultiFileProviderProps = {
    path: string,
    children: React.ReactNode,
    defaultLang: LangScriptCode
}

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