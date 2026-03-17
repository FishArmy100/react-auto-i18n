[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / \_\_t

# Function: \_\_t()

> **\_\_t**\<`T`\>(`key`, `message`, `arg?`): `string`

Defined in: [i18n.ts:103](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/i18n.ts#L103)

The primary translation function for this API. 
When using [auto-i18n-cli](https://github.com/FishArmy100/react-auto-i18n/tree/main/packages/auto-i18n-cli) to parse the program and generate the database automatically, both arguments must be raw string literals.
The [auto-i18n-cli](https://github.com/FishArmy100/react-auto-i18n/tree/main/packages/auto-i18n-cli) looks for all invocations of this function and generates a `I18nDatabase` compatible json file, with the proper translations.

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
If a `$` is placed before the text inside of the escape code, it is treated as a variable which values can be passed, 
and incorporated into the text. 

**NOTE:** the passed arguments are **NOT** translated
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

A object that is passed as the argument to the selection functions and used for variable substitution

## Returns

`string`

The translation of the message for the currently set locale.
