# auto-i18n-cli

A command-line tool for automatically generating translation databases for use with the [`react-auto-i18n`](https://github.com/your-org/react-auto-i18n) library. It scans your TypeScript source files for all `__t()` and `__tv()` calls and produces a JSON translation database.

---

## Installation

```bash
npm install -D auto-i18n-cli
```

Then run it directly with `npx`:

```bash
npx auto-i18n-cli [options]
```

---

## Usage

```
auto-i18n-cli -i <input> -b <backend> [options]
```

### Example — Azure backend

```bash
npx auto-i18n-cli \
  -i "./src" \
  -o "./assets/translations.json" \
  -s eng_Latn \
  -l spa_Latn fra_Latn deu_Latn \
  -b azure \
  --azureKey "YOUR_AZURE_KEY"
```

### Example — NLLB (local) backend

```bash
npx auto-i18n-cli \
  -i "./src" \
  -o "./assets/translations.json" \
  -l spa_Latn jpn_Jpan \
  -b nllb
```

---

## Options

| Flag | Alias | Required | Description |
|---|---|---|---|
| `--input` | `-i` | ✅ | Path to a TypeScript file or project directory to scan |
| `--backend` | `-b` | ✅ | Translation backend: `azure` or `nllb` |
| `--languages` | `-l` | | One or more target language codes to translate into (e.g. `spa_Latn fra_Latn`) |
| `--out` | `-o` | | Output file path for the translation JSON (default: `out.json`) |
| `--sourceLang` | `-s` | | The language your source strings are written in (default: `eng_Latn`) |
| `--maxTokens` | `-t` | | Maximum tokens per translation chunk — must be ≥ 100 (default: `250`) |
| `--azureKey` | | ✅ (Azure) | Azure Translator API key |
| `--azureRegion` | | | Azure Translator region (default: `eastus`) |
| `--azureEndpoint` | | | Custom Azure Translator endpoint URL |
| `--nllbModel` | | | NLLB model name (default: `facebook/nllb-200-distilled-1.3B`) |
| `--help` | `-h` | | Show help message |

---

## Backends

### Azure Translator

Uses Microsoft's Azure Cognitive Services Translator API. Requires an API key.

```bash
npx auto-i18n-cli -i "./src" -b azure --azureKey "YOUR_KEY" -l spa_Latn
```

Note: not all NLLB language codes have an Azure equivalent. The CLI will report an error if you specify an unsupported language for the Azure backend.

### NLLB (Local)

Uses Meta's [NLLB-200](https://ai.meta.com/research/no-language-left-behind/) model, running locally via Python. No API key required, but requires a compatible Python environment with the model available.

```bash
npx auto-i18n-cli -i "./src" -b nllb -l fra_Latn
```

You can specify a custom model with `--nllbModel`:

```bash
npx auto-i18n-cli -i "./src" -b nllb --nllbModel "facebook/nllb-200-1.3B" -l fra_Latn
```

---

## Output

The CLI produces a JSON file structured as an `I18nDatabase`, with one top-level key per language:

```json
{
  "eng_Latn": {
    "greeting": "Hello!",
    "farewell": "Goodbye!"
  },
  "spa_Latn": {
    "greeting": "¡Hola!",
    "farewell": "¡Adiós!"
  },
  "fra_Latn": {
    "greeting": "Bonjour!",
    "farewell": "Au revoir!"
  }
}
```

This file can be imported directly and passed to `I18nProvider` in your React app:

```tsx
import db from './assets/translations.json'
import { I18nProvider } from 'react-auto-i18n'

<I18nProvider defaultLang="eng_Latn" defaultDatabase={db}>
  <App />
</I18nProvider>
```

---

## How It Works

1. The CLI scans your TypeScript source files (or project directory) for all `__t()` and `__tv()` calls.
2. It extracts the key and message string from each call.
3. It sends those strings to the configured translation backend.
4. It writes the resulting translations to the output JSON file.

Because extraction is based on static analysis, both arguments to `__t` and `__tv` **must be raw string literals** — not variables or expressions.

```ts
// ✅ Valid — static string literals
__t("greeting", "Hello!")

// ❌ Invalid — cannot be statically extracted
const msg = "Hello!"
__t("greeting", msg)
```

---

## Language Codes

Language codes follow the `{lang}_{Script}` format used by the NLLB-200 model (e.g. `eng_Latn`, `spa_Latn`, `cmn_Hans`). See the `react-auto-i18n` documentation for the full list of supported codes.