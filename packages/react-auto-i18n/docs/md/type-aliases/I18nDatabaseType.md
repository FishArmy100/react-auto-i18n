[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / I18nDatabaseType

# Type Alias: I18nDatabaseType

> **I18nDatabaseType** = `Partial`\<`Readonly`\<`Record`\<[`LangScriptCode`](LangScriptCode.md), [`LanguageTranslations`](LanguageTranslations.md)\>\>\>

Defined in: [core/database.ts:27](https://github.com/FishArmy100/react-auto-i18n/blob/7d4d8d009401fff6a5f8c50003f857904ae4af2b/packages/react-auto-i18n/src/core/database.ts#L27)

Essentially represents all translations loaded for this application. It can be represented in JSON as:
```json
{
     "eng_Latn": {
         "main.first": "...",
         "main.second": "...",
         ...
     },
     "fra_Latn": {
         "main.first": "...",
         "main.second": "...",
         ...
     },
     "spa_Latn": {
         "main.first": "...",
         "main.second": "...",
         ...
     },
     ...
}
```
