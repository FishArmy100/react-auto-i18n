[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../README.md) / \_\_t

# Function: \_\_t()

> **\_\_t**\<`T`\>(`key`, `message`, `arg?`): `string`

Defined in: [i18n.ts:127](https://github.com/FishArmy100/react-auto-i18n/blob/ea05449f0c4d38e6a5ffc7d4a8223622f335cb56/packages/react-auto-i18n/src/i18n.ts#L127)

The primary translation function for this API. 
When using `auto-i18n-cli` to parse the program and generate the database automatically, both arguments must be raw string literals.
The `auto-i18n-cli` looks for all invocations of this function and generates a `I18nDatabase` compatible json file, with the proper translations.

### **Translation (using auto-i18n-cli):** 
```ts
// file.ts
let msg = __t("message", "Hello!");
```
Translation command:
`npx auto-i18n-cli -i "./file.ts" -o "./translations.json" -l spa_Latn -s eng_Latn -b azure --azureKey "..."`

Outputs:
```json
{
    "eng_Latn": {
        "message": "Hello!"
    },
    "spa_Latn": {
        "message": "Hola!"
    }
}
```

### **Usage**
```ts
import db from "./translations.json";
setI18nDatabaseRaw(db);
setCurrentLocalRaw("spa_Latn");
let msg = __t("message", "Hello!");

console.log(msg); // Hola!
```

### **Escape Code**
You can use double curly braces `{{...}}` to stop the translation engine from translating any text inside. The curly braces are removed after translation.
```ts
import db from "./translations.json";
setI18nDatabaseRaw(db);
setCurrentLocalRaw("spa_Latn");

let msg = __t("message", "Hello there! this is a test message for the {{'react-auto-i18n'}} program.");

assert(msg === "Hola, este es un mensaje de prueba para el programa 'react-auto-i18n'.")
```

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### key

`string`

The key for the translation

### message

`string`

The message to be translated

### arg?

`T`

## Returns

`string`

The translation of the message for the currently set locale.
