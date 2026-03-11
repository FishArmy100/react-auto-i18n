[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / I18nDatabase

# Type Alias: I18nDatabase

> **I18nDatabase** = `Partial`\<`Readonly`\<`Record`\<[`LangScriptCode`](LangScriptCode.md), [`LanguageTranslations`](LanguageTranslations.md)\>\>\>

Defined in: [i18n.ts:26](https://github.com/FishArmy100/react-auto-i18n/blob/dd313c48ee3b4e14b8c6d5a0eb2ab821b6785829/packages/react-auto-i18n/src/i18n.ts#L26)

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
