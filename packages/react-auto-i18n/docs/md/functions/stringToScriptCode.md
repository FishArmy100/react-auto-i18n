[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / stringToScriptCode

# Function: stringToScriptCode()

> **stringToScriptCode**(`str`): `"Arab"` \| `"Latn"` \| `"Ethi"` \| `"Beng"` \| `"Deva"` \| `"Cyrl"` \| `"Tibt"` \| `"Hans"` \| `"Hant"` \| `"Grek"` \| `"Gujr"` \| `"Hebr"` \| `"Armn"` \| `"Jpan"` \| `"Knda"` \| `"Geor"` \| `"Khmr"` \| `"Hang"` \| `"Laoo"` \| `"Mlym"` \| `"Mtei"` \| `"Mymr"` \| `"Nkoo"` \| `"Orya"` \| `"Guru"` \| `"Olck"` \| `"Sinh"` \| `"Taml"` \| `"Tfng"` \| `"Telu"` \| `"Thai"` \| `null`

Defined in: [core/script\_code.ts:53](https://github.com/FishArmy100/react-auto-i18n/blob/99ba2eb7ff6949727673e00fa957e3a0da05d514/packages/react-auto-i18n/src/core/script_code.ts#L53)

Converts a raw string into a `ScriptCode`, with error checking

## Parameters

### str

`string`

The string to be passed

## Returns

`"Arab"` \| `"Latn"` \| `"Ethi"` \| `"Beng"` \| `"Deva"` \| `"Cyrl"` \| `"Tibt"` \| `"Hans"` \| `"Hant"` \| `"Grek"` \| `"Gujr"` \| `"Hebr"` \| `"Armn"` \| `"Jpan"` \| `"Knda"` \| `"Geor"` \| `"Khmr"` \| `"Hang"` \| `"Laoo"` \| `"Mlym"` \| `"Mtei"` \| `"Mymr"` \| `"Nkoo"` \| `"Orya"` \| `"Guru"` \| `"Olck"` \| `"Sinh"` \| `"Taml"` \| `"Tfng"` \| `"Telu"` \| `"Thai"` \| `null`

A `ScriptCode` if the string is a valid `ScriptCode` or `null` if it is not
