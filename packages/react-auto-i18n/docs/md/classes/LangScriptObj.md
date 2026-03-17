[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / LangScriptObj

# Class: LangScriptObj

Defined in: [core/lang\_script\_obj.ts:7](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/core/lang_script_obj.ts#L7)

A helper wrapper object for the [LangScriptCode](../type-aliases/LangScriptCode.md), providing basic functions in an OOP style.

## Constructors

### Constructor

> **new LangScriptObj**(`code`): `LangScriptObj`

Defined in: [core/lang\_script\_obj.ts:14](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/core/lang_script_obj.ts#L14)

#### Parameters

##### code

`"ace_Arab"` | `"ace_Latn"` | `"acm_Arab"` | `"acq_Arab"` | `"aeb_Arab"` | `"afr_Latn"` | `"als_Latn"` | `"amh_Ethi"` | `"apc_Arab"` | `"arb_Arab"` | `"arb_Latn"` | `"arg_Latn"` | `"ars_Arab"` | `"ary_Arab"` | `"arz_Arab"` | `"asm_Beng"` | `"ast_Latn"` | `"awa_Deva"` | `"ayr_Latn"` | `"azb_Arab"` | `"azj_Latn"` | `"bak_Cyrl"` | `"bam_Latn"` | `"ban_Latn"` | `"bel_Cyrl"` | `"bem_Latn"` | `"ben_Beng"` | `"bho_Deva"` | `"bjn_Arab"` | `"bjn_Latn"` | `"bod_Tibt"` | `"bos_Latn"` | `"brx_Deva"` | `"bug_Latn"` | `"bul_Cyrl"` | `"cat_Latn"` | `"ceb_Latn"` | `"ces_Latn"` | `"chv_Cyrl"` | `"cjk_Latn"` | `"ckb_Arab"` | `"cmn_Hans"` | `"cmn_Hant"` | `"crh_Latn"` | `"cym_Latn"` | `"dan_Latn"` | `"dar_Cyrl"` | `"deu_Latn"` | `"dgo_Deva"` | `"dik_Latn"` | `"dyu_Latn"` | `"dzo_Tibt"` | `"ekk_Latn"` | `"ell_Grek"` | `"eng_Latn"` | `"epo_Latn"` | `"eus_Latn"` | `"ewe_Latn"` | `"fao_Latn"` | `"fij_Latn"` | `"fil_Latn"` | `"fin_Latn"` | `"fon_Latn"` | `"fra_Latn"` | `"fur_Latn"` | `"fuv_Latn"` | `"gaz_Latn"` | `"gla_Latn"` | `"gle_Latn"` | `"glg_Latn"` | `"gom_Deva"` | `"gug_Latn"` | `"guj_Gujr"` | `"hat_Latn"` | `"hau_Latn"` | `"heb_Hebr"` | `"hin_Deva"` | `"hne_Deva"` | `"hrv_Latn"` | `"hun_Latn"` | `"hye_Armn"` | `"ibo_Latn"` | `"ilo_Latn"` | `"ind_Latn"` | `"isl_Latn"` | `"ita_Latn"` | `"jav_Latn"` | `"jpn_Jpan"` | `"kaa_Latn"` | `"kab_Latn"` | `"kac_Latn"` | `"kam_Latn"` | `"kan_Knda"` | `"kas_Arab"` | `"kas_Deva"` | `"kat_Geor"` | `"kaz_Cyrl"` | `"kbp_Latn"` | `"kea_Latn"` | `"khk_Cyrl"` | `"khm_Khmr"` | `"kik_Latn"` | `"kin_Latn"` | `"kir_Cyrl"` | `"kmb_Latn"` | `"kmr_Latn"` | `"knc_Arab"` | `"knc_Latn"` | `"kor_Hang"` | `"ktu_Latn"` | `"lao_Laoo"` | `"lij_Latn"` | `"lim_Latn"` | `"lin_Latn"` | `"lit_Latn"` | `"lld_Latn"` | `"lmo_Latn"` | `"ltg_Latn"` | `"ltz_Latn"` | `"lua_Latn"` | `"lug_Latn"` | `"luo_Latn"` | `"lus_Latn"` | `"lvs_Latn"` | `"mag_Deva"` | `"mai_Deva"` | `"mal_Mlym"` | `"mar_Deva"` | `"mfe_Latn"` | `"mhr_Cyrl"` | `"min_Arab"` | `"min_Latn"` | `"mkd_Cyrl"` | `"mlt_Latn"` | `"mni_Beng"` | `"mni_Mtei"` | `"mos_Latn"` | `"mri_Latn"` | `"mya_Mymr"` | `"myv_Cyrl"` | `"nld_Latn"` | `"nno_Latn"` | `"nob_Latn"` | `"npi_Deva"` | `"nqo_Nkoo"` | `"nso_Latn"` | `"nus_Latn"` | `"nya_Latn"` | `"oci_Latn"` | `"ory_Orya"` | `"pag_Latn"` | `"pan_Guru"` | `"pap_Latn"` | `"pbt_Arab"` | `"pes_Arab"` | `"plt_Latn"` | `"pol_Latn"` | `"por_Latn"` | `"prs_Arab"` | `"quy_Latn"` | `"ron_Latn"` | `"run_Latn"` | `"rus_Cyrl"` | `"sag_Latn"` | `"san_Deva"` | `"sat_Olck"` | `"scn_Latn"` | `"shn_Mymr"` | `"sin_Sinh"` | `"slk_Latn"` | `"slv_Latn"` | `"smo_Latn"` | `"sna_Latn"` | `"snd_Arab"` | `"snd_Deva"` | `"som_Latn"` | `"sot_Latn"` | `"spa_Latn"` | `"srd_Latn"` | `"srp_Cyrl"` | `"ssw_Latn"` | `"sun_Latn"` | `"swe_Latn"` | `"swh_Latn"` | `"szl_Latn"` | `"tam_Taml"` | `"taq_Latn"` | `"taq_Tfng"` | `"tat_Cyrl"` | `"tel_Telu"` | `"tgk_Cyrl"` | `"tha_Thai"` | `"tir_Ethi"` | `"tpi_Latn"` | `"tsn_Latn"` | `"tso_Latn"` | `"tuk_Latn"` | `"tum_Latn"` | `"tur_Latn"` | `"twi_Latn"` | `"tyv_Cyrl"` | `"uig_Arab"` | `"ukr_Cyrl"` | `"umb_Latn"` | `"urd_Arab"` | `"uzn_Latn"` | `"uzs_Arab"` | `"vec_Latn"` | `"vie_Latn"` | `"vmw_Latn"` | `"war_Latn"` | `"wol_Latn"` | `"wuu_Hans"` | `"xho_Latn"` | `"ydd_Hebr"` | `"yor_Latn"` | `"yue_Hant"` | `"zgh_Tfng"` | `"zsm_Latn"` | `"zul_Latn"`

#### Returns

`LangScriptObj`

## Properties

### code

> `readonly` **code**: `"ace_Arab"` \| `"ace_Latn"` \| `"acm_Arab"` \| `"acq_Arab"` \| `"aeb_Arab"` \| `"afr_Latn"` \| `"als_Latn"` \| `"amh_Ethi"` \| `"apc_Arab"` \| `"arb_Arab"` \| `"arb_Latn"` \| `"arg_Latn"` \| `"ars_Arab"` \| `"ary_Arab"` \| `"arz_Arab"` \| `"asm_Beng"` \| `"ast_Latn"` \| `"awa_Deva"` \| `"ayr_Latn"` \| `"azb_Arab"` \| `"azj_Latn"` \| `"bak_Cyrl"` \| `"bam_Latn"` \| `"ban_Latn"` \| `"bel_Cyrl"` \| `"bem_Latn"` \| `"ben_Beng"` \| `"bho_Deva"` \| `"bjn_Arab"` \| `"bjn_Latn"` \| `"bod_Tibt"` \| `"bos_Latn"` \| `"brx_Deva"` \| `"bug_Latn"` \| `"bul_Cyrl"` \| `"cat_Latn"` \| `"ceb_Latn"` \| `"ces_Latn"` \| `"chv_Cyrl"` \| `"cjk_Latn"` \| `"ckb_Arab"` \| `"cmn_Hans"` \| `"cmn_Hant"` \| `"crh_Latn"` \| `"cym_Latn"` \| `"dan_Latn"` \| `"dar_Cyrl"` \| `"deu_Latn"` \| `"dgo_Deva"` \| `"dik_Latn"` \| `"dyu_Latn"` \| `"dzo_Tibt"` \| `"ekk_Latn"` \| `"ell_Grek"` \| `"eng_Latn"` \| `"epo_Latn"` \| `"eus_Latn"` \| `"ewe_Latn"` \| `"fao_Latn"` \| `"fij_Latn"` \| `"fil_Latn"` \| `"fin_Latn"` \| `"fon_Latn"` \| `"fra_Latn"` \| `"fur_Latn"` \| `"fuv_Latn"` \| `"gaz_Latn"` \| `"gla_Latn"` \| `"gle_Latn"` \| `"glg_Latn"` \| `"gom_Deva"` \| `"gug_Latn"` \| `"guj_Gujr"` \| `"hat_Latn"` \| `"hau_Latn"` \| `"heb_Hebr"` \| `"hin_Deva"` \| `"hne_Deva"` \| `"hrv_Latn"` \| `"hun_Latn"` \| `"hye_Armn"` \| `"ibo_Latn"` \| `"ilo_Latn"` \| `"ind_Latn"` \| `"isl_Latn"` \| `"ita_Latn"` \| `"jav_Latn"` \| `"jpn_Jpan"` \| `"kaa_Latn"` \| `"kab_Latn"` \| `"kac_Latn"` \| `"kam_Latn"` \| `"kan_Knda"` \| `"kas_Arab"` \| `"kas_Deva"` \| `"kat_Geor"` \| `"kaz_Cyrl"` \| `"kbp_Latn"` \| `"kea_Latn"` \| `"khk_Cyrl"` \| `"khm_Khmr"` \| `"kik_Latn"` \| `"kin_Latn"` \| `"kir_Cyrl"` \| `"kmb_Latn"` \| `"kmr_Latn"` \| `"knc_Arab"` \| `"knc_Latn"` \| `"kor_Hang"` \| `"ktu_Latn"` \| `"lao_Laoo"` \| `"lij_Latn"` \| `"lim_Latn"` \| `"lin_Latn"` \| `"lit_Latn"` \| `"lld_Latn"` \| `"lmo_Latn"` \| `"ltg_Latn"` \| `"ltz_Latn"` \| `"lua_Latn"` \| `"lug_Latn"` \| `"luo_Latn"` \| `"lus_Latn"` \| `"lvs_Latn"` \| `"mag_Deva"` \| `"mai_Deva"` \| `"mal_Mlym"` \| `"mar_Deva"` \| `"mfe_Latn"` \| `"mhr_Cyrl"` \| `"min_Arab"` \| `"min_Latn"` \| `"mkd_Cyrl"` \| `"mlt_Latn"` \| `"mni_Beng"` \| `"mni_Mtei"` \| `"mos_Latn"` \| `"mri_Latn"` \| `"mya_Mymr"` \| `"myv_Cyrl"` \| `"nld_Latn"` \| `"nno_Latn"` \| `"nob_Latn"` \| `"npi_Deva"` \| `"nqo_Nkoo"` \| `"nso_Latn"` \| `"nus_Latn"` \| `"nya_Latn"` \| `"oci_Latn"` \| `"ory_Orya"` \| `"pag_Latn"` \| `"pan_Guru"` \| `"pap_Latn"` \| `"pbt_Arab"` \| `"pes_Arab"` \| `"plt_Latn"` \| `"pol_Latn"` \| `"por_Latn"` \| `"prs_Arab"` \| `"quy_Latn"` \| `"ron_Latn"` \| `"run_Latn"` \| `"rus_Cyrl"` \| `"sag_Latn"` \| `"san_Deva"` \| `"sat_Olck"` \| `"scn_Latn"` \| `"shn_Mymr"` \| `"sin_Sinh"` \| `"slk_Latn"` \| `"slv_Latn"` \| `"smo_Latn"` \| `"sna_Latn"` \| `"snd_Arab"` \| `"snd_Deva"` \| `"som_Latn"` \| `"sot_Latn"` \| `"spa_Latn"` \| `"srd_Latn"` \| `"srp_Cyrl"` \| `"ssw_Latn"` \| `"sun_Latn"` \| `"swe_Latn"` \| `"swh_Latn"` \| `"szl_Latn"` \| `"tam_Taml"` \| `"taq_Latn"` \| `"taq_Tfng"` \| `"tat_Cyrl"` \| `"tel_Telu"` \| `"tgk_Cyrl"` \| `"tha_Thai"` \| `"tir_Ethi"` \| `"tpi_Latn"` \| `"tsn_Latn"` \| `"tso_Latn"` \| `"tuk_Latn"` \| `"tum_Latn"` \| `"tur_Latn"` \| `"twi_Latn"` \| `"tyv_Cyrl"` \| `"uig_Arab"` \| `"ukr_Cyrl"` \| `"umb_Latn"` \| `"urd_Arab"` \| `"uzn_Latn"` \| `"uzs_Arab"` \| `"vec_Latn"` \| `"vie_Latn"` \| `"vmw_Latn"` \| `"war_Latn"` \| `"wol_Latn"` \| `"wuu_Hans"` \| `"xho_Latn"` \| `"ydd_Hebr"` \| `"yor_Latn"` \| `"yue_Hant"` \| `"zgh_Tfng"` \| `"zsm_Latn"` \| `"zul_Latn"`

Defined in: [core/lang\_script\_obj.ts:12](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/core/lang_script_obj.ts#L12)

The inner wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)

## Methods

### getCountry()

> **getCountry**(): [`CountryCode`](../type-aliases/CountryCode.md) \| `null`

Defined in: [core/lang\_script\_obj.ts:59](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/core/lang_script_obj.ts#L59)

A helper function for getting the [CountryCode](../type-aliases/CountryCode.md) most associated with this [LangScriptCode](../type-aliases/LangScriptCode.md), or `null` if there is none

#### Returns

[`CountryCode`](../type-aliases/CountryCode.md) \| `null`

the [CountryCode](../type-aliases/CountryCode.md) most associated with this `LangScriptCode, or `null` if there is none

***

### getCountryFlag()

> **getCountryFlag**(): `ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\> \| `null`

Defined in: [core/lang\_script\_obj.ts:68](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/core/lang_script_obj.ts#L68)

A helper function that invokes the [CountryFlag](../functions/CountryFlag.md) component, with the country code most associated with this [LangScriptCode](../type-aliases/LangScriptCode.md), or null if there is none

#### Returns

`ReactElement`\<`unknown`, `string` \| `JSXElementConstructor`\<`any`\>\> \| `null`

the [CountryFlag](../functions/CountryFlag.md) component, with the country code most associated with this [LangScriptCode](../type-aliases/LangScriptCode.md), or null if there is none

***

### getEnglishName()

> **getEnglishName**(): `string` \| `null`

Defined in: [core/lang\_script\_obj.ts:50](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/core/lang_script_obj.ts#L50)

A helper function for getting the english name for the wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)

#### Returns

`string` \| `null`

The [LangCode](../type-aliases/LangCode.md) for the wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)

***

### getLangCode()

> **getLangCode**(): `"ace"` \| `"acm"` \| `"acq"` \| `"aeb"` \| `"afr"` \| `"als"` \| `"amh"` \| `"apc"` \| `"arb"` \| `"arg"` \| `"ars"` \| `"ary"` \| `"arz"` \| `"asm"` \| `"ast"` \| `"awa"` \| `"ayr"` \| `"azb"` \| `"azj"` \| `"bak"` \| `"bam"` \| `"ban"` \| `"bel"` \| `"bem"` \| `"ben"` \| `"bho"` \| `"bjn"` \| `"bod"` \| `"bos"` \| `"brx"` \| `"bug"` \| `"bul"` \| `"cat"` \| `"ceb"` \| `"ces"` \| `"chv"` \| `"cjk"` \| `"ckb"` \| `"cmn"` \| `"crh"` \| `"cym"` \| `"dan"` \| `"dar"` \| `"deu"` \| `"dgo"` \| `"dik"` \| `"dyu"` \| `"dzo"` \| `"ekk"` \| `"ell"` \| `"eng"` \| `"epo"` \| `"eus"` \| `"ewe"` \| `"fao"` \| `"fij"` \| `"fil"` \| `"fin"` \| `"fon"` \| `"fra"` \| `"fur"` \| `"fuv"` \| `"gaz"` \| `"gla"` \| `"gle"` \| `"glg"` \| `"gom"` \| `"gug"` \| `"guj"` \| `"hat"` \| `"hau"` \| `"heb"` \| `"hin"` \| `"hne"` \| `"hrv"` \| `"hun"` \| `"hye"` \| `"ibo"` \| `"ilo"` \| `"ind"` \| `"isl"` \| `"ita"` \| `"jav"` \| `"jpn"` \| `"kaa"` \| `"kab"` \| `"kac"` \| `"kam"` \| `"kan"` \| `"kas"` \| `"kat"` \| `"kaz"` \| `"kbp"` \| `"kea"` \| `"khk"` \| `"khm"` \| `"kik"` \| `"kin"` \| `"kir"` \| `"kmb"` \| `"kmr"` \| `"knc"` \| `"kor"` \| `"ktu"` \| `"lao"` \| `"lij"` \| `"lim"` \| `"lin"` \| `"lit"` \| `"lld"` \| `"lmo"` \| `"ltg"` \| `"ltz"` \| `"lua"` \| `"lug"` \| `"luo"` \| `"lus"` \| `"lvs"` \| `"mag"` \| `"mai"` \| `"mal"` \| `"mar"` \| `"mfe"` \| `"mhr"` \| `"min"` \| `"mkd"` \| `"mlt"` \| `"mni"` \| `"mos"` \| `"mri"` \| `"mya"` \| `"myv"` \| `"nld"` \| `"nno"` \| `"nob"` \| `"npi"` \| `"nqo"` \| `"nso"` \| `"nus"` \| `"nya"` \| `"oci"` \| `"ory"` \| `"pag"` \| `"pan"` \| `"pap"` \| `"pbt"` \| `"pes"` \| `"plt"` \| `"pol"` \| `"por"` \| `"prs"` \| `"quy"` \| `"ron"` \| `"run"` \| `"rus"` \| `"sag"` \| `"san"` \| `"sat"` \| `"scn"` \| `"shn"` \| `"sin"` \| `"slk"` \| `"slv"` \| `"smo"` \| `"sna"` \| `"snd"` \| `"som"` \| `"sot"` \| `"spa"` \| `"srd"` \| `"srp"` \| `"ssw"` \| `"sun"` \| `"swe"` \| `"swh"` \| `"szl"` \| `"tam"` \| `"taq"` \| `"tat"` \| `"tel"` \| `"tgk"` \| `"tha"` \| `"tir"` \| `"tpi"` \| `"tsn"` \| `"tso"` \| `"tuk"` \| `"tum"` \| `"tur"` \| `"twi"` \| `"tyv"` \| `"uig"` \| `"ukr"` \| `"umb"` \| `"urd"` \| `"uzn"` \| `"uzs"` \| `"vec"` \| `"vie"` \| `"vmw"` \| `"war"` \| `"wol"` \| `"wuu"` \| `"xho"` \| `"ydd"` \| `"yor"` \| `"yue"` \| `"zgh"` \| `"zsm"` \| `"zul"`

Defined in: [core/lang\_script\_obj.ts:23](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/core/lang_script_obj.ts#L23)

A helper function for getting the [LangCode](../type-aliases/LangCode.md) for the wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)

#### Returns

`"ace"` \| `"acm"` \| `"acq"` \| `"aeb"` \| `"afr"` \| `"als"` \| `"amh"` \| `"apc"` \| `"arb"` \| `"arg"` \| `"ars"` \| `"ary"` \| `"arz"` \| `"asm"` \| `"ast"` \| `"awa"` \| `"ayr"` \| `"azb"` \| `"azj"` \| `"bak"` \| `"bam"` \| `"ban"` \| `"bel"` \| `"bem"` \| `"ben"` \| `"bho"` \| `"bjn"` \| `"bod"` \| `"bos"` \| `"brx"` \| `"bug"` \| `"bul"` \| `"cat"` \| `"ceb"` \| `"ces"` \| `"chv"` \| `"cjk"` \| `"ckb"` \| `"cmn"` \| `"crh"` \| `"cym"` \| `"dan"` \| `"dar"` \| `"deu"` \| `"dgo"` \| `"dik"` \| `"dyu"` \| `"dzo"` \| `"ekk"` \| `"ell"` \| `"eng"` \| `"epo"` \| `"eus"` \| `"ewe"` \| `"fao"` \| `"fij"` \| `"fil"` \| `"fin"` \| `"fon"` \| `"fra"` \| `"fur"` \| `"fuv"` \| `"gaz"` \| `"gla"` \| `"gle"` \| `"glg"` \| `"gom"` \| `"gug"` \| `"guj"` \| `"hat"` \| `"hau"` \| `"heb"` \| `"hin"` \| `"hne"` \| `"hrv"` \| `"hun"` \| `"hye"` \| `"ibo"` \| `"ilo"` \| `"ind"` \| `"isl"` \| `"ita"` \| `"jav"` \| `"jpn"` \| `"kaa"` \| `"kab"` \| `"kac"` \| `"kam"` \| `"kan"` \| `"kas"` \| `"kat"` \| `"kaz"` \| `"kbp"` \| `"kea"` \| `"khk"` \| `"khm"` \| `"kik"` \| `"kin"` \| `"kir"` \| `"kmb"` \| `"kmr"` \| `"knc"` \| `"kor"` \| `"ktu"` \| `"lao"` \| `"lij"` \| `"lim"` \| `"lin"` \| `"lit"` \| `"lld"` \| `"lmo"` \| `"ltg"` \| `"ltz"` \| `"lua"` \| `"lug"` \| `"luo"` \| `"lus"` \| `"lvs"` \| `"mag"` \| `"mai"` \| `"mal"` \| `"mar"` \| `"mfe"` \| `"mhr"` \| `"min"` \| `"mkd"` \| `"mlt"` \| `"mni"` \| `"mos"` \| `"mri"` \| `"mya"` \| `"myv"` \| `"nld"` \| `"nno"` \| `"nob"` \| `"npi"` \| `"nqo"` \| `"nso"` \| `"nus"` \| `"nya"` \| `"oci"` \| `"ory"` \| `"pag"` \| `"pan"` \| `"pap"` \| `"pbt"` \| `"pes"` \| `"plt"` \| `"pol"` \| `"por"` \| `"prs"` \| `"quy"` \| `"ron"` \| `"run"` \| `"rus"` \| `"sag"` \| `"san"` \| `"sat"` \| `"scn"` \| `"shn"` \| `"sin"` \| `"slk"` \| `"slv"` \| `"smo"` \| `"sna"` \| `"snd"` \| `"som"` \| `"sot"` \| `"spa"` \| `"srd"` \| `"srp"` \| `"ssw"` \| `"sun"` \| `"swe"` \| `"swh"` \| `"szl"` \| `"tam"` \| `"taq"` \| `"tat"` \| `"tel"` \| `"tgk"` \| `"tha"` \| `"tir"` \| `"tpi"` \| `"tsn"` \| `"tso"` \| `"tuk"` \| `"tum"` \| `"tur"` \| `"twi"` \| `"tyv"` \| `"uig"` \| `"ukr"` \| `"umb"` \| `"urd"` \| `"uzn"` \| `"uzs"` \| `"vec"` \| `"vie"` \| `"vmw"` \| `"war"` \| `"wol"` \| `"wuu"` \| `"xho"` \| `"ydd"` \| `"yor"` \| `"yue"` \| `"zgh"` \| `"zsm"` \| `"zul"`

The [LangCode](../type-aliases/LangCode.md) for the wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)

***

### getName()

> **getName**(): `string` \| `null`

Defined in: [core/lang\_script\_obj.ts:41](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/core/lang_script_obj.ts#L41)

A helper function for getting the locale name for the wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)

#### Returns

`string` \| `null`

The [LangCode](../type-aliases/LangCode.md) for the wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)

***

### getScriptCode()

> **getScriptCode**(): `"Arab"` \| `"Latn"` \| `"Ethi"` \| `"Beng"` \| `"Deva"` \| `"Cyrl"` \| `"Tibt"` \| `"Hans"` \| `"Hant"` \| `"Grek"` \| `"Gujr"` \| `"Hebr"` \| `"Armn"` \| `"Jpan"` \| `"Knda"` \| `"Geor"` \| `"Khmr"` \| `"Hang"` \| `"Laoo"` \| `"Mlym"` \| `"Mtei"` \| `"Mymr"` \| `"Nkoo"` \| `"Orya"` \| `"Guru"` \| `"Olck"` \| `"Sinh"` \| `"Taml"` \| `"Tfng"` \| `"Telu"` \| `"Thai"`

Defined in: [core/lang\_script\_obj.ts:32](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/core/lang_script_obj.ts#L32)

A helper function for getting the [ScriptCode](../type-aliases/ScriptCode.md) for the wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)

#### Returns

`"Arab"` \| `"Latn"` \| `"Ethi"` \| `"Beng"` \| `"Deva"` \| `"Cyrl"` \| `"Tibt"` \| `"Hans"` \| `"Hant"` \| `"Grek"` \| `"Gujr"` \| `"Hebr"` \| `"Armn"` \| `"Jpan"` \| `"Knda"` \| `"Geor"` \| `"Khmr"` \| `"Hang"` \| `"Laoo"` \| `"Mlym"` \| `"Mtei"` \| `"Mymr"` \| `"Nkoo"` \| `"Orya"` \| `"Guru"` \| `"Olck"` \| `"Sinh"` \| `"Taml"` \| `"Tfng"` \| `"Telu"` \| `"Thai"`

The [ScriptCode](../type-aliases/ScriptCode.md) for the wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)

***

### getScriptDirection()

> **getScriptDirection**(): [`ScriptDirection`](../type-aliases/ScriptDirection.md)

Defined in: [core/lang\_script\_obj.ts:78](https://github.com/FishArmy100/react-auto-i18n/blob/901ade87a59ada023a2450a75490e0051189f559/packages/react-auto-i18n/src/core/lang_script_obj.ts#L78)

A helper function for getting the [ScriptDirection](../type-aliases/ScriptDirection.md) for wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)

#### Returns

[`ScriptDirection`](../type-aliases/ScriptDirection.md)

the [ScriptDirection](../type-aliases/ScriptDirection.md) for wrapped [LangScriptCode](../type-aliases/LangScriptCode.md)
