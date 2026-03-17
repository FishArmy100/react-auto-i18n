[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / \_\_tv

# Function: \_\_tv()

> **\_\_tv**\<`T`\>(`key`, `messages`, `arg`): `string`

Defined in: [i18n.ts:233](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/i18n.ts#L233)

The secondary translation function for this API. 
When using [auto-i18n-cli](https://github.com/FishArmy100/react-auto-i18n/tree/main/packages/auto-i18n-cli) to parse the program and generate the database automatically, `key` must be a string literal and `messages` 
must be an array literal, with the last argument being a string literal and all previous elements being an array literal with 
a string literal as the first element.

The [auto-i18n-cli](https://github.com/FishArmy100/react-auto-i18n/tree/main/packages/auto-i18n-cli) looks for all invocations of this function and generates a `I18nDatabase` compatible json file, with the proper translations.

### **Translation (using auto-i18n-cli):** 
```ts
// file.ts
const msg = __tv("test.message.v", [
	  ["You have one apple", ({count}) => count == 1],
	  ["You have {{$count}} apples", ({count}) => count > 1],
	  "You have no apples"
], { count: appleCount })
```
Translation command:
`npx auto-i18n-cli -i "./file.ts" -o "./translations.json" -l spa_Latn -s eng_Latn -b azure --azureKey "..."`

Outputs:
```json
{
    "eng_Latn": {
        "test.message.v": [
            "You have one apple",
            "You have {{$count}} apples",
            "You have no apples"
        ]
    },
    "spa_Latn": {
         "test.message.v": [
            "Tienes una manzana",
            "Tienes {{$count}} manzanas",
            "No tienes manzanas"
        ]
    }
}
```

### **Usage**
```ts
import db from "./translations.json";
setI18nDatabaseRaw(db);
setCurrentLocalRaw("spa_Latn");

const appleCount = 5;

const msg = __tv("test.message.v", [
	  ["You have one apple", ({count}) => count == 1],
	  ["You have {{$count}} apples", ({count}) => count > 1],
	  "You have no apples"
], { count: appleCount })

console.log(msg); // Tienes 5 manzanas!
```

### **Escape Code**
You can use double curly braces `{{...}}` to stop the translation engine from translating any text inside. 
The curly braces are removed after translation. 
If a `$` is placed before the text inside of the escape code, it is treated as a variable which values can be passed, 
and incorporated into the text. 

**NOTE:** the passed arguments are **NOT** translated
```ts
import db from "./translations.json";
setI18nDatabaseRaw(db);
setCurrentLocalRaw("spa_Latn");

const appleCount = 5;

const msg = __tv("test.message.v", [
	  ["You have one apple", ({count}) => count == 1],
	  ["You have {{$count}} apples", ({count}) => count > 1],
	  "You have no apples"
], { count: appleCount })

console.log(msg); // Tienes 5 manzanas!
```

## Type Parameters

### T

`T` *extends* `object`

## Parameters

### key

`string`

The key for the translation

### messages

[`TVArgs`](../type-aliases/TVArgs.md)\<`T`\>

An array of message variants

### arg

`T`

A object that is passed as the argument to the selection functions and used for variable substitution

## Returns

`string`

The translation of the message for the currently set locale.
