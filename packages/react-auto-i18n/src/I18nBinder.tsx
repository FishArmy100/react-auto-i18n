import React, { useEffect } from "react";
import { useI18n } from "./I18nProvider";
import { setCurrentLocal as setCurrentLocale, setI18nDatabase } from "./i18n";

export function I18nBinder(): React.ReactElement
{
    const { locale, database } = useI18n();

    useEffect(() => {
        setCurrentLocale(locale);
        setI18nDatabase(database ?? {})
    }, [locale, database]);

    return <></>;
}
