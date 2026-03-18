[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / I18nMultiFileProvider

# Function: I18nMultiFileProvider()

> **I18nMultiFileProvider**(`props`): `ReactElement`

Defined in: [components/I18nMultiFileProvider.tsx:50](https://github.com/FishArmy100/react-auto-i18n/blob/7d4d8d009401fff6a5f8c50003f857904ae4af2b/packages/react-auto-i18n/src/components/I18nMultiFileProvider.tsx#L50)

A wrapper around the [I18nProvider](I18nProvider.md) and [CachedMultiFileI18nDb](../classes/CachedMultiFileI18nDb.md), which loads in a static translation json database folder from the `public` folder.

## Parameters

### props

[`I18nMultiFileProviderProps`](../type-aliases/I18nMultiFileProviderProps.md)

The [I18nMultiFileProviderProps](../type-aliases/I18nMultiFileProviderProps.md) for this provider.

### **Example**
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { I18nProvider, RawI18nDb } from "react-auto-i18n";

createRoot(document.getElementById('root')!).render(
	  <I18nMultiFileProvider 
	  	defaultLang="eng_Latn" 
	  	path="./translations"
	  >
	  	<App />
	  </I18nMultiFileProvider>
)
```

## Returns

`ReactElement`
