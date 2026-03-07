[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../README.md) / I18nDatabase

# Type Alias: I18nDatabase

> **I18nDatabase** = `Partial`\<`Readonly`\<`Record`\<[`LangScriptCode`](LangScriptCode.md), [`LanguageTranslations`](LanguageTranslations.md)\>\>\>

Defined in: [i18n.ts:26](https://github.com/FishArmy100/react-auto-i18n/blob/853437e567b319054ebcb28f0a68584148d2ff61/packages/react-auto-i18n/src/i18n.ts#L26)

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
