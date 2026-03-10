# react-auto-i18n

A React internationalization (i18n) library with automatic translation support. Wrap your app in a provider, mark strings with `__t()`, and let the CLI generate your translation database.

---

## Installation

```bash
npm install react-auto-i18n
```

---

## Quick Start

### 1. Wrap your app with `I18nProvider` 

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { I18nProvider } from 'react-auto-i18n'
import db from './assets/translations.json'

createRoot(document.getElementById('root')!).render(
  <I18nProvider defaultLang="eng_Latn" defaultDatabase={db}>
    <App />
  </I18nProvider>
)
```

### 2. Mark strings for translation

```tsx
import { __t } from 'react-auto-i18n'

function MyComponent() {
  return <p>{__t("greeting", "Hello, world!")}</p>
}
```

### 3. Generate translations with the CLI

```bash
npx auto-i18n-cli -i "./src/**/*.ts" -o "./assets/translations.json" \
  -l spa_Latn -s eng_Latn -b azure --azureKey "YOUR_KEY"
```

This scans your source files for all `__t()` and `__tv()` calls and outputs a JSON translation database.

---

## Translation Functions

### `__t(key, message, args?)` — Simple translation

```ts
const msg = __t("welcome", "Welcome to our app!")
// In Spanish: "¡Bienvenido a nuestra aplicación!"
```

**Escape code:** Wrap text in `{{...}}` to prevent it from being translated:

```ts
const msg = __t("info", "This is powered by {{'react-auto-i18n'}}")
// The library name is preserved as-is
```

### `__tv(key, messages, args)` — Plural / variant translation

Use this when the message varies based on a runtime value:

```ts
const msg = __tv("apple.count", [
  ["You have one apple",        ({ count }) => count === 1],
  ["You have {{$count}} apples", ({ count }) => count > 1],
  "You have no apples"
], { count: appleCount })
```

`{{$count}}` is a variable placeholder — it's replaced at runtime with the value from `args` and is never translated.

---

## Changing the Locale at Runtime

Use the `useI18n` hook inside any component wrapped by `I18nProvider`:

```tsx
import { useI18n, __t } from 'react-auto-i18n'

function LanguageSwitcher() {
  const i18n = useI18n()

  return (
    <button onClick={() => i18n.setLocale("fra_Latn")}>
      Switch to French
    </button>
  )
}
```

The `useI18n()` hook also exposes:

| Property | Description |
|---|---|
| `locale` | The currently active `LangScriptCode` |
| `setLocale(locale)` | Update the active locale |
| `database` | The currently loaded `I18nDatabase` |
| `setDatabase(db)` | Swap out the translation database |
| `getLocales()` | List all locales present in the database |
| `getLocaleObj()` | Get a `LangScriptObj` wrapper for the current locale |

---

## Language & Script Codes

Locales are identified by a `LangScriptCode` in the format `{lang}_{Script}`, e.g.:

| Code | Language |
|---|---|
| `eng_Latn` | English (Latin) |
| `spa_Latn` | Spanish (Latin) |
| `cmn_Hans` | Mandarin (Simplified) |
| `arb_Arab` | Arabic |
| `jpn_Jpan` | Japanese |

The library supports 200+ language-script combinations. Utility functions are provided to work with these codes:

```ts
import { getLangCode, getScriptCode, getEnglishLangName, getCountryCode } from 'react-auto-i18n'

getLangCode("eng_Latn")        // "eng"
getScriptCode("eng_Latn")      // "Latn"
getEnglishLangName("spa")      // "Spanish"
getCountryCode("eng")          // "US"
```

You can also use the `LangScriptObj` class for an OOP-style interface:

```ts
import { LangScriptObj } from 'react-auto-i18n'

const lang = new LangScriptObj("jpn_Jpan")
lang.getLangCode()     // "jpn"
lang.getScriptCode()   // "Jpan"
lang.getEnglishName()  // "Japanese"
lang.getCountry()      // "JP"
lang.getCountryFlag()  // <CountryFlag country="JP" />
```

---

## Translation Database Format

The database is a JSON object keyed by `LangScriptCode`:

```json
{
  "eng_Latn": {
    "greeting": "Hello!",
    "apple.count": ["You have one apple", "You have {{$count}} apples", "You have no apples"]
  },
  "spa_Latn": {
    "greeting": "¡Hola!",
    "apple.count": ["Tienes una manzana", "Tienes {{$count}} manzanas", "No tienes manzanas"]
  }
}
```

The type `I18nDatabase` is defined as `Partial<Record<LangScriptCode, LanguageTranslations>>`.

---

## Low-Level API

These functions operate on the global translation state directly. Prefer the React hooks when possible.

```ts
import { setI18nDatabaseRaw, setCurrentLocalRaw, getCurrentLocalRaw, getI18nDatabaseRaw } from 'react-auto-i18n'

setI18nDatabaseRaw(db)
setCurrentLocalRaw("deu_Latn")
```

---

## Validation Helpers

Safely parse untrusted strings into typed codes (returns `null` if invalid):

```ts
import { stringToLangCode, stringToScriptCode, stringToLangScriptCode } from 'react-auto-i18n'

stringToLangCode("eng")          // "eng"
stringToLangCode("not_a_lang")   // null
stringToLangScriptCode("fra_Latn") // "fra_Latn"
```