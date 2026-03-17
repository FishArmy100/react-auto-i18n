[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / I18nFileProvider

# Function: I18nFileProvider()

> **I18nFileProvider**(`props`): `ReactElement`

Defined in: [components/I18nFileProvider.tsx:45](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nFileProvider.tsx#L45)

A wrapper around the [I18nProvider](I18nProvider.md) and [SimpleI18nDb](../classes/SimpleI18nDb.md), which loads in a static translation json database file from the `public` folder.

## Parameters

### props

[`I18nFileProviderProps`](../type-aliases/I18nFileProviderProps.md)

The [I18nFileProviderProps](../type-aliases/I18nFileProviderProps.md) for this provider.

### **Example**
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { I18nProvider, RawI18nDb } from "react-auto-i18n";

createRoot(document.getElementById('root')!).render(
	  <I18nFileProvider 
	  	defaultLang="eng_Latn" 
	  	path="./translations.json"
	  >
	  	<App />
	  </I18nFileProvider>
)
```

## Returns

`ReactElement`
