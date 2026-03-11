[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / stringToScriptCode

# Function: stringToScriptCode()

> **stringToScriptCode**(`str`): `"Arab"` \| `"Latn"` \| `"Ethi"` \| `"Beng"` \| `"Deva"` \| `"Cyrl"` \| `"Tibt"` \| `"Hans"` \| `"Hant"` \| `"Grek"` \| `"Gujr"` \| `"Hebr"` \| `"Armn"` \| `"Jpan"` \| `"Knda"` \| `"Geor"` \| `"Khmr"` \| `"Hang"` \| `"Laoo"` \| `"Mlym"` \| `"Mtei"` \| `"Mymr"` \| `"Nkoo"` \| `"Orya"` \| `"Guru"` \| `"Olck"` \| `"Sinh"` \| `"Taml"` \| `"Tfng"` \| `"Telu"` \| `"Thai"` \| `null`

Defined in: [core/script\_code.ts:48](https://github.com/FishArmy100/react-auto-i18n/blob/55efd561fa2cdfbb2941829b07bcaf934e8a6790/packages/react-auto-i18n/src/core/script_code.ts#L48)

Converts a raw string into a `ScriptCode`, with error checking

## Parameters

### str

`string`

The string to be passed

## Returns

`"Arab"` \| `"Latn"` \| `"Ethi"` \| `"Beng"` \| `"Deva"` \| `"Cyrl"` \| `"Tibt"` \| `"Hans"` \| `"Hant"` \| `"Grek"` \| `"Gujr"` \| `"Hebr"` \| `"Armn"` \| `"Jpan"` \| `"Knda"` \| `"Geor"` \| `"Khmr"` \| `"Hang"` \| `"Laoo"` \| `"Mlym"` \| `"Mtei"` \| `"Mymr"` \| `"Nkoo"` \| `"Orya"` \| `"Guru"` \| `"Olck"` \| `"Sinh"` \| `"Taml"` \| `"Tfng"` \| `"Telu"` \| `"Thai"` \| `null`

A `ScriptCode` if the string is a valid `ScriptCode` or `null` if it is not
