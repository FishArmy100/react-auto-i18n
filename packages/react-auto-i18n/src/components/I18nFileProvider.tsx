import React, { useEffect, useState } from "react";
import { I18nDatabaseDefault, SimpleI18nDb } from "../core/database";
import { I18nProvider } from "./I18nProvider";
import { LangScriptCode } from "../core";

export type I18nFileProviderProps = {
    path: string,
    children: React.ReactNode,
    defaultLang: LangScriptCode
}

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