[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../README.md) / I18nProvider

# Function: I18nProvider()

> **I18nProvider**(`props`): `ReactElement`

Defined in: [components/I18nProvider.tsx:91](https://github.com/FishArmy100/react-auto-i18n/blob/ea05449f0c4d38e6a5ffc7d4a8223622f335cb56/packages/react-auto-i18n/src/components/I18nProvider.tsx#L91)

The provider for the `I18nDatabase` and current local.

Allows for getting and setting the global state used by `__t` in a more React like way.
### **Example:**
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { I18nProvider } from "react-auto-i18n";
import db from "./assets/translations.json";

createRoot(document.getElementById('root')!).render(
	  <I18nProvider 
	  	default_lang="eng_Latn" 
	  	default_database={db}
	  >
	  	<App />
	  </I18nProvider>
)
```

## Parameters

### props

[`I18nProviderProps`](../type-aliases/I18nProviderProps.md)

The `I18nProviderProps` for this provider

## Returns

`ReactElement`
