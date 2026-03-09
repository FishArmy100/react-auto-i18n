[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../README.md) / getCountryCode

# Function: getCountryCode()

> **getCountryCode**(`code`): [`CountryCode`](../type-aliases/CountryCode.md) \| `null`

Defined in: [core/country.ts:40](https://github.com/FishArmy100/react-auto-i18n/blob/ea05449f0c4d38e6a5ffc7d4a8223622f335cb56/packages/react-auto-i18n/src/core/country.ts#L40)

Gets the `CountryCode` for the given `LangCode`. Essentially, what country most primarily speaks this language. 
For example, this will return `US` even though Britain, Australia, etc. also speak the language.

## Parameters

### code

The `LangCode`

`"ace"` | `"acm"` | `"acq"` | `"aeb"` | `"afr"` | `"als"` | `"amh"` | `"apc"` | `"arb"` | `"arg"` | `"ars"` | `"ary"` | `"arz"` | `"asm"` | `"ast"` | `"awa"` | `"ayr"` | `"azb"` | `"azj"` | `"bak"` | `"bam"` | `"ban"` | `"bel"` | `"bem"` | `"ben"` | `"bho"` | `"bjn"` | `"bod"` | `"bos"` | `"brx"` | `"bug"` | `"bul"` | `"cat"` | `"ceb"` | `"ces"` | `"chv"` | `"cjk"` | `"ckb"` | `"cmn"` | `"crh"` | `"cym"` | `"dan"` | `"dar"` | `"deu"` | `"dgo"` | `"dik"` | `"dyu"` | `"dzo"` | `"ekk"` | `"ell"` | `"eng"` | `"epo"` | `"eus"` | `"ewe"` | `"fao"` | `"fij"` | `"fil"` | `"fin"` | `"fon"` | `"fra"` | `"fur"` | `"fuv"` | `"gaz"` | `"gla"` | `"gle"` | `"glg"` | `"gom"` | `"gug"` | `"guj"` | `"hat"` | `"hau"` | `"heb"` | `"hin"` | `"hne"` | `"hrv"` | `"hun"` | `"hye"` | `"ibo"` | `"ilo"` | `"ind"` | `"isl"` | `"ita"` | `"jav"` | `"jpn"` | `"kaa"` | `"kab"` | `"kac"` | `"kam"` | `"kan"` | `"kas"` | `"kat"` | `"kaz"` | `"kbp"` | `"kea"` | `"khk"` | `"khm"` | `"kik"` | `"kin"` | `"kir"` | `"kmb"` | `"kmr"` | `"knc"` | `"kor"` | `"ktu"` | `"lao"` | `"lij"` | `"lim"` | `"lin"` | `"lit"` | `"lld"` | `"lmo"` | `"ltg"` | `"ltz"` | `"lua"` | `"lug"` | `"luo"` | `"lus"` | `"lvs"` | `"mag"` | `"mai"` | `"mal"` | `"mar"` | `"mfe"` | `"mhr"` | `"min"` | `"mkd"` | `"mlt"` | `"mni"` | `"mos"` | `"mri"` | `"mya"` | `"myv"` | `"nld"` | `"nno"` | `"nob"` | `"npi"` | `"nqo"` | `"nso"` | `"nus"` | `"nya"` | `"oci"` | `"ory"` | `"pag"` | `"pan"` | `"pap"` | `"pbt"` | `"pes"` | `"plt"` | `"pol"` | `"por"` | `"prs"` | `"quy"` | `"ron"` | `"run"` | `"rus"` | `"sag"` | `"san"` | `"sat"` | `"scn"` | `"shn"` | `"sin"` | `"slk"` | `"slv"` | `"smo"` | `"sna"` | `"snd"` | `"som"` | `"sot"` | `"spa"` | `"srd"` | `"srp"` | `"ssw"` | `"sun"` | `"swe"` | `"swh"` | `"szl"` | `"tam"` | `"taq"` | `"tat"` | `"tel"` | `"tgk"` | `"tha"` | `"tir"` | `"tpi"` | `"tsn"` | `"tso"` | `"tuk"` | `"tum"` | `"tur"` | `"twi"` | `"tyv"` | `"uig"` | `"ukr"` | `"umb"` | `"urd"` | `"uzn"` | `"uzs"` | `"vec"` | `"vie"` | `"vmw"` | `"war"` | `"wol"` | `"wuu"` | `"xho"` | `"ydd"` | `"yor"` | `"yue"` | `"zgh"` | `"zsm"` | `"zul"`

## Returns

[`CountryCode`](../type-aliases/CountryCode.md) \| `null`

A `CountryCode` which represents the country 'most commonly' associated with that language. It will return null if there is no country typically associated with this language.
