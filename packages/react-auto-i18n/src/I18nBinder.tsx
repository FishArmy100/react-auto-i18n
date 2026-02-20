import React, { useEffect } from "react";
import { useI18n } from "./I18nProvider";
import { setCurrentLocalRaw as setCurrentLocale, setI18nDatabaseRaw } from "./i18n";

export function I18nBinder(): React.ReactElement
{
    const { locale, database } = useI18n();

    useEffect(() => {
        setCurrentLocale(locale);
        setI18nDatabaseRaw(database ?? {})
    }, [locale, database]);

    return <></>;
}
