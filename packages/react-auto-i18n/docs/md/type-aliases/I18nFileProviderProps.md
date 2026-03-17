[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / I18nFileProviderProps

# Type Alias: I18nFileProviderProps

> **I18nFileProviderProps** = `object`

Defined in: [components/I18nFileProvider.tsx:9](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nFileProvider.tsx#L9)

The properties for the [I18nFileProvider](../functions/I18nFileProvider.md)

## Properties

### children

> **children**: `React.ReactNode`

Defined in: [components/I18nFileProvider.tsx:17](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nFileProvider.tsx#L17)

The children of this component

***

### defaultLang

> **defaultLang**: [`LangScriptCode`](LangScriptCode.md)

Defined in: [components/I18nFileProvider.tsx:21](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nFileProvider.tsx#L21)

The default language for the provider. Defaults to `"eng_Latn"`

***

### path

> **path**: `string`

Defined in: [components/I18nFileProvider.tsx:13](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nFileProvider.tsx#L13)

The file path to the json database. It needs to point to a file inside of the `public` folder and the json must be in the format of [I18nDatabaseType](I18nDatabaseType.md).
