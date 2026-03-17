[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / I18nProvider

# Function: I18nProvider()

> **I18nProvider**(`props`): `ReactElement`

Defined in: [components/I18nProvider.tsx:94](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nProvider.tsx#L94)

The provider for the [I18nDatabase](../interfaces/I18nDatabase.md) and current local.

Allows for getting and setting the global state used by [\_\_t](t.md) in a more React like way.

### **Example:**
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { I18nProvider, RawI18nDb } from "react-auto-i18n";
import translations from "./assets/translations.json";

const db = new RawI18nDb(translations);

createRoot(document.getElementById('root')!).render(
	  <I18nProvider 
	  	defaultLang="eng_Latn" 
	  	db={db}
	  >
	  	<App />
	  </I18nProvider>
)
```

## Parameters

### props

[`I18nProviderProps`](../type-aliases/I18nProviderProps.md)

The [I18nProviderProps](../type-aliases/I18nProviderProps.md) for this provider

## Returns

`ReactElement`
