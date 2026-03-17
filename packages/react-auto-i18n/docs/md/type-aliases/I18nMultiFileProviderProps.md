[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / I18nMultiFileProviderProps

# Type Alias: I18nMultiFileProviderProps

> **I18nMultiFileProviderProps** = `object`

Defined in: [components/I18nMultiFileProvider.tsx:9](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nMultiFileProvider.tsx#L9)

The properties for the [I18nMultiFileProvider](../functions/I18nMultiFileProvider.md)

## Properties

### children

> **children**: `React.ReactNode`

Defined in: [components/I18nMultiFileProvider.tsx:19](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nMultiFileProvider.tsx#L19)

The children of this component

***

### defaultLang

> **defaultLang**: [`LangScriptCode`](LangScriptCode.md)

Defined in: [components/I18nMultiFileProvider.tsx:24](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nMultiFileProvider.tsx#L24)

The default language for the provider. Defaults to `"eng_Latn"`

***

### path

> **path**: `string`

Defined in: [components/I18nMultiFileProvider.tsx:14](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nMultiFileProvider.tsx#L14)

The folder path which contains all multiple files of type [LanguageTranslations](LanguageTranslations.md), and each must be named using [LangScriptCode](LangScriptCode.md) followed by a `.json`. 
It needs to point to a folder inside of the `public` folder, and the folder must contain a `manifest.json` file of the format [FolderLanguageManifestType](FolderLanguageManifestType.md)
