[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / CachedMultiFileI18nDb

# Class: CachedMultiFileI18nDb

Defined in: [core/database.ts:110](https://github.com/FishArmy100/react-auto-i18n/blob/7d4d8d009401fff6a5f8c50003f857904ae4af2b/packages/react-auto-i18n/src/core/database.ts#L110)

A cached database, which will only load languages if necessary.

## Implements

- [`I18nDatabase`](../interfaces/I18nDatabase.md)

## Constructors

### Constructor

> **new CachedMultiFileI18nDb**(`path`, `langs`): `CachedMultiFileI18nDb`

Defined in: [core/database.ts:121](https://github.com/FishArmy100/react-auto-i18n/blob/7d4d8d009401fff6a5f8c50003f857904ae4af2b/packages/react-auto-i18n/src/core/database.ts#L121)

#### Parameters

##### path

`string`

The folder path which contains all multiple files of type [LanguageTranslations](../type-aliases/LanguageTranslations.md) and each must be named using [LangScriptCode](../type-aliases/LangScriptCode.md) followed by a `.json`

##### langs

(`"ace_Arab"` \| `"ace_Latn"` \| `"acm_Arab"` \| `"acq_Arab"` \| `"aeb_Arab"` \| `"afr_Latn"` \| `"als_Latn"` \| `"amh_Ethi"` \| `"apc_Arab"` \| `"arb_Arab"` \| `"arb_Latn"` \| `"arg_Latn"` \| `"ars_Arab"` \| `"ary_Arab"` \| `"arz_Arab"` \| `"asm_Beng"` \| `"ast_Latn"` \| `"awa_Deva"` \| `"ayr_Latn"` \| `"azb_Arab"` \| `"azj_Latn"` \| `"bak_Cyrl"` \| `"bam_Latn"` \| `"ban_Latn"` \| `"bel_Cyrl"` \| `"bem_Latn"` \| `"ben_Beng"` \| `"bho_Deva"` \| `"bjn_Arab"` \| `"bjn_Latn"` \| `"bod_Tibt"` \| `"bos_Latn"` \| `"brx_Deva"` \| `"bug_Latn"` \| `"bul_Cyrl"` \| `"cat_Latn"` \| `"ceb_Latn"` \| `"ces_Latn"` \| `"chv_Cyrl"` \| `"cjk_Latn"` \| `"ckb_Arab"` \| `"cmn_Hans"` \| `"cmn_Hant"` \| `"crh_Latn"` \| `"cym_Latn"` \| `"dan_Latn"` \| `"dar_Cyrl"` \| `"deu_Latn"` \| `"dgo_Deva"` \| `"dik_Latn"` \| `"dyu_Latn"` \| `"dzo_Tibt"` \| `"ekk_Latn"` \| `"ell_Grek"` \| `"eng_Latn"` \| `"epo_Latn"` \| `"eus_Latn"` \| `"ewe_Latn"` \| `"fao_Latn"` \| `"fij_Latn"` \| `"fil_Latn"` \| `"fin_Latn"` \| `"fon_Latn"` \| `"fra_Latn"` \| `"fur_Latn"` \| `"fuv_Latn"` \| `"gaz_Latn"` \| `"gla_Latn"` \| `"gle_Latn"` \| `"glg_Latn"` \| `"gom_Deva"` \| `"gug_Latn"` \| `"guj_Gujr"` \| `"hat_Latn"` \| `"hau_Latn"` \| `"heb_Hebr"` \| `"hin_Deva"` \| `"hne_Deva"` \| `"hrv_Latn"` \| `"hun_Latn"` \| `"hye_Armn"` \| `"ibo_Latn"` \| `"ilo_Latn"` \| `"ind_Latn"` \| `"isl_Latn"` \| `"ita_Latn"` \| `"jav_Latn"` \| `"jpn_Jpan"` \| `"kaa_Latn"` \| `"kab_Latn"` \| `"kac_Latn"` \| `"kam_Latn"` \| `"kan_Knda"` \| `"kas_Arab"` \| `"kas_Deva"` \| `"kat_Geor"` \| `"kaz_Cyrl"` \| `"kbp_Latn"` \| `"kea_Latn"` \| `"khk_Cyrl"` \| `"khm_Khmr"` \| `"kik_Latn"` \| `"kin_Latn"` \| `"kir_Cyrl"` \| `"kmb_Latn"` \| `"kmr_Latn"` \| `"knc_Arab"` \| `"knc_Latn"` \| `"kor_Hang"` \| `"ktu_Latn"` \| `"lao_Laoo"` \| `"lij_Latn"` \| `"lim_Latn"` \| `"lin_Latn"` \| `"lit_Latn"` \| `"lld_Latn"` \| `"lmo_Latn"` \| `"ltg_Latn"` \| `"ltz_Latn"` \| `"lua_Latn"` \| `"lug_Latn"` \| `"luo_Latn"` \| `"lus_Latn"` \| `"lvs_Latn"` \| `"mag_Deva"` \| `"mai_Deva"` \| `"mal_Mlym"` \| `"mar_Deva"` \| `"mfe_Latn"` \| `"mhr_Cyrl"` \| `"min_Arab"` \| `"min_Latn"` \| `"mkd_Cyrl"` \| `"mlt_Latn"` \| `"mni_Beng"` \| `"mni_Mtei"` \| `"mos_Latn"` \| `"mri_Latn"` \| `"mya_Mymr"` \| `"myv_Cyrl"` \| `"nld_Latn"` \| `"nno_Latn"` \| `"nob_Latn"` \| `"npi_Deva"` \| `"nqo_Nkoo"` \| `"nso_Latn"` \| `"nus_Latn"` \| `"nya_Latn"` \| `"oci_Latn"` \| `"ory_Orya"` \| `"pag_Latn"` \| `"pan_Guru"` \| `"pap_Latn"` \| `"pbt_Arab"` \| `"pes_Arab"` \| `"plt_Latn"` \| `"pol_Latn"` \| `"por_Latn"` \| `"prs_Arab"` \| `"quy_Latn"` \| `"ron_Latn"` \| `"run_Latn"` \| `"rus_Cyrl"` \| `"sag_Latn"` \| `"san_Deva"` \| `"sat_Olck"` \| `"scn_Latn"` \| `"shn_Mymr"` \| `"sin_Sinh"` \| `"slk_Latn"` \| `"slv_Latn"` \| `"smo_Latn"` \| `"sna_Latn"` \| `"snd_Arab"` \| `"snd_Deva"` \| `"som_Latn"` \| `"sot_Latn"` \| `"spa_Latn"` \| `"srd_Latn"` \| `"srp_Cyrl"` \| `"ssw_Latn"` \| `"sun_Latn"` \| `"swe_Latn"` \| `"swh_Latn"` \| `"szl_Latn"` \| `"tam_Taml"` \| `"taq_Latn"` \| `"taq_Tfng"` \| `"tat_Cyrl"` \| `"tel_Telu"` \| `"tgk_Cyrl"` \| `"tha_Thai"` \| `"tir_Ethi"` \| `"tpi_Latn"` \| `"tsn_Latn"` \| `"tso_Latn"` \| `"tuk_Latn"` \| `"tum_Latn"` \| `"tur_Latn"` \| `"twi_Latn"` \| `"tyv_Cyrl"` \| `"uig_Arab"` \| `"ukr_Cyrl"` \| `"umb_Latn"` \| `"urd_Arab"` \| `"uzn_Latn"` \| `"uzs_Arab"` \| `"vec_Latn"` \| `"vie_Latn"` \| `"vmw_Latn"` \| `"war_Latn"` \| `"wol_Latn"` \| `"wuu_Hans"` \| `"xho_Latn"` \| `"ydd_Hebr"` \| `"yor_Latn"` \| `"yue_Hant"` \| `"zgh_Tfng"` \| `"zsm_Latn"` \| `"zul_Latn"`)[]

Represents all of the languages that the translation folder contains. Essentially, if the folder has a file for a given language, add that language here.

#### Returns

`CachedMultiFileI18nDb`

## Methods

### addOnChangeListener()

> **addOnChangeListener**(`listener`): `void`

Defined in: [core/database.ts:173](https://github.com/FishArmy100/react-auto-i18n/blob/7d4d8d009401fff6a5f8c50003f857904ae4af2b/packages/react-auto-i18n/src/core/database.ts#L173)

Allows the user to add a listener to see if the internal state of the database has changed. This can be used for things like caching

#### Parameters

##### listener

() => `void`

#### Returns

`void`

#### Implementation of

[`I18nDatabase`](../interfaces/I18nDatabase.md).[`addOnChangeListener`](../interfaces/I18nDatabase.md#addonchangelistener)

***

### get()

> **get**(`lang`, `key`): `string` \| `string`[] \| `undefined`

Defined in: [core/database.ts:144](https://github.com/FishArmy100/react-auto-i18n/blob/7d4d8d009401fff6a5f8c50003f857904ae4af2b/packages/react-auto-i18n/src/core/database.ts#L144)

Gets the translation for a given language and key

#### Parameters

##### lang

A [LangScriptCode](../type-aliases/LangScriptCode.md)

`"ace_Arab"` | `"ace_Latn"` | `"acm_Arab"` | `"acq_Arab"` | `"aeb_Arab"` | `"afr_Latn"` | `"als_Latn"` | `"amh_Ethi"` | `"apc_Arab"` | `"arb_Arab"` | `"arb_Latn"` | `"arg_Latn"` | `"ars_Arab"` | `"ary_Arab"` | `"arz_Arab"` | `"asm_Beng"` | `"ast_Latn"` | `"awa_Deva"` | `"ayr_Latn"` | `"azb_Arab"` | `"azj_Latn"` | `"bak_Cyrl"` | `"bam_Latn"` | `"ban_Latn"` | `"bel_Cyrl"` | `"bem_Latn"` | `"ben_Beng"` | `"bho_Deva"` | `"bjn_Arab"` | `"bjn_Latn"` | `"bod_Tibt"` | `"bos_Latn"` | `"brx_Deva"` | `"bug_Latn"` | `"bul_Cyrl"` | `"cat_Latn"` | `"ceb_Latn"` | `"ces_Latn"` | `"chv_Cyrl"` | `"cjk_Latn"` | `"ckb_Arab"` | `"cmn_Hans"` | `"cmn_Hant"` | `"crh_Latn"` | `"cym_Latn"` | `"dan_Latn"` | `"dar_Cyrl"` | `"deu_Latn"` | `"dgo_Deva"` | `"dik_Latn"` | `"dyu_Latn"` | `"dzo_Tibt"` | `"ekk_Latn"` | `"ell_Grek"` | `"eng_Latn"` | `"epo_Latn"` | `"eus_Latn"` | `"ewe_Latn"` | `"fao_Latn"` | `"fij_Latn"` | `"fil_Latn"` | `"fin_Latn"` | `"fon_Latn"` | `"fra_Latn"` | `"fur_Latn"` | `"fuv_Latn"` | `"gaz_Latn"` | `"gla_Latn"` | `"gle_Latn"` | `"glg_Latn"` | `"gom_Deva"` | `"gug_Latn"` | `"guj_Gujr"` | `"hat_Latn"` | `"hau_Latn"` | `"heb_Hebr"` | `"hin_Deva"` | `"hne_Deva"` | `"hrv_Latn"` | `"hun_Latn"` | `"hye_Armn"` | `"ibo_Latn"` | `"ilo_Latn"` | `"ind_Latn"` | `"isl_Latn"` | `"ita_Latn"` | `"jav_Latn"` | `"jpn_Jpan"` | `"kaa_Latn"` | `"kab_Latn"` | `"kac_Latn"` | `"kam_Latn"` | `"kan_Knda"` | `"kas_Arab"` | `"kas_Deva"` | `"kat_Geor"` | `"kaz_Cyrl"` | `"kbp_Latn"` | `"kea_Latn"` | `"khk_Cyrl"` | `"khm_Khmr"` | `"kik_Latn"` | `"kin_Latn"` | `"kir_Cyrl"` | `"kmb_Latn"` | `"kmr_Latn"` | `"knc_Arab"` | `"knc_Latn"` | `"kor_Hang"` | `"ktu_Latn"` | `"lao_Laoo"` | `"lij_Latn"` | `"lim_Latn"` | `"lin_Latn"` | `"lit_Latn"` | `"lld_Latn"` | `"lmo_Latn"` | `"ltg_Latn"` | `"ltz_Latn"` | `"lua_Latn"` | `"lug_Latn"` | `"luo_Latn"` | `"lus_Latn"` | `"lvs_Latn"` | `"mag_Deva"` | `"mai_Deva"` | `"mal_Mlym"` | `"mar_Deva"` | `"mfe_Latn"` | `"mhr_Cyrl"` | `"min_Arab"` | `"min_Latn"` | `"mkd_Cyrl"` | `"mlt_Latn"` | `"mni_Beng"` | `"mni_Mtei"` | `"mos_Latn"` | `"mri_Latn"` | `"mya_Mymr"` | `"myv_Cyrl"` | `"nld_Latn"` | `"nno_Latn"` | `"nob_Latn"` | `"npi_Deva"` | `"nqo_Nkoo"` | `"nso_Latn"` | `"nus_Latn"` | `"nya_Latn"` | `"oci_Latn"` | `"ory_Orya"` | `"pag_Latn"` | `"pan_Guru"` | `"pap_Latn"` | `"pbt_Arab"` | `"pes_Arab"` | `"plt_Latn"` | `"pol_Latn"` | `"por_Latn"` | `"prs_Arab"` | `"quy_Latn"` | `"ron_Latn"` | `"run_Latn"` | `"rus_Cyrl"` | `"sag_Latn"` | `"san_Deva"` | `"sat_Olck"` | `"scn_Latn"` | `"shn_Mymr"` | `"sin_Sinh"` | `"slk_Latn"` | `"slv_Latn"` | `"smo_Latn"` | `"sna_Latn"` | `"snd_Arab"` | `"snd_Deva"` | `"som_Latn"` | `"sot_Latn"` | `"spa_Latn"` | `"srd_Latn"` | `"srp_Cyrl"` | `"ssw_Latn"` | `"sun_Latn"` | `"swe_Latn"` | `"swh_Latn"` | `"szl_Latn"` | `"tam_Taml"` | `"taq_Latn"` | `"taq_Tfng"` | `"tat_Cyrl"` | `"tel_Telu"` | `"tgk_Cyrl"` | `"tha_Thai"` | `"tir_Ethi"` | `"tpi_Latn"` | `"tsn_Latn"` | `"tso_Latn"` | `"tuk_Latn"` | `"tum_Latn"` | `"tur_Latn"` | `"twi_Latn"` | `"tyv_Cyrl"` | `"uig_Arab"` | `"ukr_Cyrl"` | `"umb_Latn"` | `"urd_Arab"` | `"uzn_Latn"` | `"uzs_Arab"` | `"vec_Latn"` | `"vie_Latn"` | `"vmw_Latn"` | `"war_Latn"` | `"wol_Latn"` | `"wuu_Hans"` | `"xho_Latn"` | `"ydd_Hebr"` | `"yor_Latn"` | `"yue_Hant"` | `"zgh_Tfng"` | `"zsm_Latn"` | `"zul_Latn"`

##### key

`string`

A key for the given translation in the specified language

#### Returns

`string` \| `string`[] \| `undefined`

Either a single translation (for [\_\_t](../functions/t.md)), multiple translations (for [\_\_tv](../functions/tv.md)), or `undefined` if there is no translations

#### Implementation of

[`I18nDatabase`](../interfaces/I18nDatabase.md).[`get`](../interfaces/I18nDatabase.md#get)

***

### langs()

> **langs**(): (`"ace_Arab"` \| `"ace_Latn"` \| `"acm_Arab"` \| `"acq_Arab"` \| `"aeb_Arab"` \| `"afr_Latn"` \| `"als_Latn"` \| `"amh_Ethi"` \| `"apc_Arab"` \| `"arb_Arab"` \| `"arb_Latn"` \| `"arg_Latn"` \| `"ars_Arab"` \| `"ary_Arab"` \| `"arz_Arab"` \| `"asm_Beng"` \| `"ast_Latn"` \| `"awa_Deva"` \| `"ayr_Latn"` \| `"azb_Arab"` \| `"azj_Latn"` \| `"bak_Cyrl"` \| `"bam_Latn"` \| `"ban_Latn"` \| `"bel_Cyrl"` \| `"bem_Latn"` \| `"ben_Beng"` \| `"bho_Deva"` \| `"bjn_Arab"` \| `"bjn_Latn"` \| `"bod_Tibt"` \| `"bos_Latn"` \| `"brx_Deva"` \| `"bug_Latn"` \| `"bul_Cyrl"` \| `"cat_Latn"` \| `"ceb_Latn"` \| `"ces_Latn"` \| `"chv_Cyrl"` \| `"cjk_Latn"` \| `"ckb_Arab"` \| `"cmn_Hans"` \| `"cmn_Hant"` \| `"crh_Latn"` \| `"cym_Latn"` \| `"dan_Latn"` \| `"dar_Cyrl"` \| `"deu_Latn"` \| `"dgo_Deva"` \| `"dik_Latn"` \| `"dyu_Latn"` \| `"dzo_Tibt"` \| `"ekk_Latn"` \| `"ell_Grek"` \| `"eng_Latn"` \| `"epo_Latn"` \| `"eus_Latn"` \| `"ewe_Latn"` \| `"fao_Latn"` \| `"fij_Latn"` \| `"fil_Latn"` \| `"fin_Latn"` \| `"fon_Latn"` \| `"fra_Latn"` \| `"fur_Latn"` \| `"fuv_Latn"` \| `"gaz_Latn"` \| `"gla_Latn"` \| `"gle_Latn"` \| `"glg_Latn"` \| `"gom_Deva"` \| `"gug_Latn"` \| `"guj_Gujr"` \| `"hat_Latn"` \| `"hau_Latn"` \| `"heb_Hebr"` \| `"hin_Deva"` \| `"hne_Deva"` \| `"hrv_Latn"` \| `"hun_Latn"` \| `"hye_Armn"` \| `"ibo_Latn"` \| `"ilo_Latn"` \| `"ind_Latn"` \| `"isl_Latn"` \| `"ita_Latn"` \| `"jav_Latn"` \| `"jpn_Jpan"` \| `"kaa_Latn"` \| `"kab_Latn"` \| `"kac_Latn"` \| `"kam_Latn"` \| `"kan_Knda"` \| `"kas_Arab"` \| `"kas_Deva"` \| `"kat_Geor"` \| `"kaz_Cyrl"` \| `"kbp_Latn"` \| `"kea_Latn"` \| `"khk_Cyrl"` \| `"khm_Khmr"` \| `"kik_Latn"` \| `"kin_Latn"` \| `"kir_Cyrl"` \| `"kmb_Latn"` \| `"kmr_Latn"` \| `"knc_Arab"` \| `"knc_Latn"` \| `"kor_Hang"` \| `"ktu_Latn"` \| `"lao_Laoo"` \| `"lij_Latn"` \| `"lim_Latn"` \| `"lin_Latn"` \| `"lit_Latn"` \| `"lld_Latn"` \| `"lmo_Latn"` \| `"ltg_Latn"` \| `"ltz_Latn"` \| `"lua_Latn"` \| `"lug_Latn"` \| `"luo_Latn"` \| `"lus_Latn"` \| `"lvs_Latn"` \| `"mag_Deva"` \| `"mai_Deva"` \| `"mal_Mlym"` \| `"mar_Deva"` \| `"mfe_Latn"` \| `"mhr_Cyrl"` \| `"min_Arab"` \| `"min_Latn"` \| `"mkd_Cyrl"` \| `"mlt_Latn"` \| `"mni_Beng"` \| `"mni_Mtei"` \| `"mos_Latn"` \| `"mri_Latn"` \| `"mya_Mymr"` \| `"myv_Cyrl"` \| `"nld_Latn"` \| `"nno_Latn"` \| `"nob_Latn"` \| `"npi_Deva"` \| `"nqo_Nkoo"` \| `"nso_Latn"` \| `"nus_Latn"` \| `"nya_Latn"` \| `"oci_Latn"` \| `"ory_Orya"` \| `"pag_Latn"` \| `"pan_Guru"` \| `"pap_Latn"` \| `"pbt_Arab"` \| `"pes_Arab"` \| `"plt_Latn"` \| `"pol_Latn"` \| `"por_Latn"` \| `"prs_Arab"` \| `"quy_Latn"` \| `"ron_Latn"` \| `"run_Latn"` \| `"rus_Cyrl"` \| `"sag_Latn"` \| `"san_Deva"` \| `"sat_Olck"` \| `"scn_Latn"` \| `"shn_Mymr"` \| `"sin_Sinh"` \| `"slk_Latn"` \| `"slv_Latn"` \| `"smo_Latn"` \| `"sna_Latn"` \| `"snd_Arab"` \| `"snd_Deva"` \| `"som_Latn"` \| `"sot_Latn"` \| `"spa_Latn"` \| `"srd_Latn"` \| `"srp_Cyrl"` \| `"ssw_Latn"` \| `"sun_Latn"` \| `"swe_Latn"` \| `"swh_Latn"` \| `"szl_Latn"` \| `"tam_Taml"` \| `"taq_Latn"` \| `"taq_Tfng"` \| `"tat_Cyrl"` \| `"tel_Telu"` \| `"tgk_Cyrl"` \| `"tha_Thai"` \| `"tir_Ethi"` \| `"tpi_Latn"` \| `"tsn_Latn"` \| `"tso_Latn"` \| `"tuk_Latn"` \| `"tum_Latn"` \| `"tur_Latn"` \| `"twi_Latn"` \| `"tyv_Cyrl"` \| `"uig_Arab"` \| `"ukr_Cyrl"` \| `"umb_Latn"` \| `"urd_Arab"` \| `"uzn_Latn"` \| `"uzs_Arab"` \| `"vec_Latn"` \| `"vie_Latn"` \| `"vmw_Latn"` \| `"war_Latn"` \| `"wol_Latn"` \| `"wuu_Hans"` \| `"xho_Latn"` \| `"ydd_Hebr"` \| `"yor_Latn"` \| `"yue_Hant"` \| `"zgh_Tfng"` \| `"zsm_Latn"` \| `"zul_Latn"`)[]

Defined in: [core/database.ts:168](https://github.com/FishArmy100/react-auto-i18n/blob/7d4d8d009401fff6a5f8c50003f857904ae4af2b/packages/react-auto-i18n/src/core/database.ts#L168)

#### Returns

(`"ace_Arab"` \| `"ace_Latn"` \| `"acm_Arab"` \| `"acq_Arab"` \| `"aeb_Arab"` \| `"afr_Latn"` \| `"als_Latn"` \| `"amh_Ethi"` \| `"apc_Arab"` \| `"arb_Arab"` \| `"arb_Latn"` \| `"arg_Latn"` \| `"ars_Arab"` \| `"ary_Arab"` \| `"arz_Arab"` \| `"asm_Beng"` \| `"ast_Latn"` \| `"awa_Deva"` \| `"ayr_Latn"` \| `"azb_Arab"` \| `"azj_Latn"` \| `"bak_Cyrl"` \| `"bam_Latn"` \| `"ban_Latn"` \| `"bel_Cyrl"` \| `"bem_Latn"` \| `"ben_Beng"` \| `"bho_Deva"` \| `"bjn_Arab"` \| `"bjn_Latn"` \| `"bod_Tibt"` \| `"bos_Latn"` \| `"brx_Deva"` \| `"bug_Latn"` \| `"bul_Cyrl"` \| `"cat_Latn"` \| `"ceb_Latn"` \| `"ces_Latn"` \| `"chv_Cyrl"` \| `"cjk_Latn"` \| `"ckb_Arab"` \| `"cmn_Hans"` \| `"cmn_Hant"` \| `"crh_Latn"` \| `"cym_Latn"` \| `"dan_Latn"` \| `"dar_Cyrl"` \| `"deu_Latn"` \| `"dgo_Deva"` \| `"dik_Latn"` \| `"dyu_Latn"` \| `"dzo_Tibt"` \| `"ekk_Latn"` \| `"ell_Grek"` \| `"eng_Latn"` \| `"epo_Latn"` \| `"eus_Latn"` \| `"ewe_Latn"` \| `"fao_Latn"` \| `"fij_Latn"` \| `"fil_Latn"` \| `"fin_Latn"` \| `"fon_Latn"` \| `"fra_Latn"` \| `"fur_Latn"` \| `"fuv_Latn"` \| `"gaz_Latn"` \| `"gla_Latn"` \| `"gle_Latn"` \| `"glg_Latn"` \| `"gom_Deva"` \| `"gug_Latn"` \| `"guj_Gujr"` \| `"hat_Latn"` \| `"hau_Latn"` \| `"heb_Hebr"` \| `"hin_Deva"` \| `"hne_Deva"` \| `"hrv_Latn"` \| `"hun_Latn"` \| `"hye_Armn"` \| `"ibo_Latn"` \| `"ilo_Latn"` \| `"ind_Latn"` \| `"isl_Latn"` \| `"ita_Latn"` \| `"jav_Latn"` \| `"jpn_Jpan"` \| `"kaa_Latn"` \| `"kab_Latn"` \| `"kac_Latn"` \| `"kam_Latn"` \| `"kan_Knda"` \| `"kas_Arab"` \| `"kas_Deva"` \| `"kat_Geor"` \| `"kaz_Cyrl"` \| `"kbp_Latn"` \| `"kea_Latn"` \| `"khk_Cyrl"` \| `"khm_Khmr"` \| `"kik_Latn"` \| `"kin_Latn"` \| `"kir_Cyrl"` \| `"kmb_Latn"` \| `"kmr_Latn"` \| `"knc_Arab"` \| `"knc_Latn"` \| `"kor_Hang"` \| `"ktu_Latn"` \| `"lao_Laoo"` \| `"lij_Latn"` \| `"lim_Latn"` \| `"lin_Latn"` \| `"lit_Latn"` \| `"lld_Latn"` \| `"lmo_Latn"` \| `"ltg_Latn"` \| `"ltz_Latn"` \| `"lua_Latn"` \| `"lug_Latn"` \| `"luo_Latn"` \| `"lus_Latn"` \| `"lvs_Latn"` \| `"mag_Deva"` \| `"mai_Deva"` \| `"mal_Mlym"` \| `"mar_Deva"` \| `"mfe_Latn"` \| `"mhr_Cyrl"` \| `"min_Arab"` \| `"min_Latn"` \| `"mkd_Cyrl"` \| `"mlt_Latn"` \| `"mni_Beng"` \| `"mni_Mtei"` \| `"mos_Latn"` \| `"mri_Latn"` \| `"mya_Mymr"` \| `"myv_Cyrl"` \| `"nld_Latn"` \| `"nno_Latn"` \| `"nob_Latn"` \| `"npi_Deva"` \| `"nqo_Nkoo"` \| `"nso_Latn"` \| `"nus_Latn"` \| `"nya_Latn"` \| `"oci_Latn"` \| `"ory_Orya"` \| `"pag_Latn"` \| `"pan_Guru"` \| `"pap_Latn"` \| `"pbt_Arab"` \| `"pes_Arab"` \| `"plt_Latn"` \| `"pol_Latn"` \| `"por_Latn"` \| `"prs_Arab"` \| `"quy_Latn"` \| `"ron_Latn"` \| `"run_Latn"` \| `"rus_Cyrl"` \| `"sag_Latn"` \| `"san_Deva"` \| `"sat_Olck"` \| `"scn_Latn"` \| `"shn_Mymr"` \| `"sin_Sinh"` \| `"slk_Latn"` \| `"slv_Latn"` \| `"smo_Latn"` \| `"sna_Latn"` \| `"snd_Arab"` \| `"snd_Deva"` \| `"som_Latn"` \| `"sot_Latn"` \| `"spa_Latn"` \| `"srd_Latn"` \| `"srp_Cyrl"` \| `"ssw_Latn"` \| `"sun_Latn"` \| `"swe_Latn"` \| `"swh_Latn"` \| `"szl_Latn"` \| `"tam_Taml"` \| `"taq_Latn"` \| `"taq_Tfng"` \| `"tat_Cyrl"` \| `"tel_Telu"` \| `"tgk_Cyrl"` \| `"tha_Thai"` \| `"tir_Ethi"` \| `"tpi_Latn"` \| `"tsn_Latn"` \| `"tso_Latn"` \| `"tuk_Latn"` \| `"tum_Latn"` \| `"tur_Latn"` \| `"twi_Latn"` \| `"tyv_Cyrl"` \| `"uig_Arab"` \| `"ukr_Cyrl"` \| `"umb_Latn"` \| `"urd_Arab"` \| `"uzn_Latn"` \| `"uzs_Arab"` \| `"vec_Latn"` \| `"vie_Latn"` \| `"vmw_Latn"` \| `"war_Latn"` \| `"wol_Latn"` \| `"wuu_Hans"` \| `"xho_Latn"` \| `"ydd_Hebr"` \| `"yor_Latn"` \| `"yue_Hant"` \| `"zgh_Tfng"` \| `"zsm_Latn"` \| `"zul_Latn"`)[]

All the [LangScriptCode](../type-aliases/LangScriptCode.md)'s that the database contains

#### Implementation of

[`I18nDatabase`](../interfaces/I18nDatabase.md).[`langs`](../interfaces/I18nDatabase.md#langs)

***

### removeOnChangeListener()

> **removeOnChangeListener**(`listener`): `boolean`

Defined in: [core/database.ts:178](https://github.com/FishArmy100/react-auto-i18n/blob/7d4d8d009401fff6a5f8c50003f857904ae4af2b/packages/react-auto-i18n/src/core/database.ts#L178)

Allows the user to remove a listener that would fire if the internal state of the database has changed. This can be used for things like caching

#### Parameters

##### listener

() => `void`

#### Returns

`boolean`

#### Implementation of

[`I18nDatabase`](../interfaces/I18nDatabase.md).[`removeOnChangeListener`](../interfaces/I18nDatabase.md#removeonchangelistener)

***

### load()

> `static` **load**(`folder`): `Promise`\<`CachedMultiFileI18nDb`\>

Defined in: [core/database.ts:134](https://github.com/FishArmy100/react-auto-i18n/blob/7d4d8d009401fff6a5f8c50003f857904ae4af2b/packages/react-auto-i18n/src/core/database.ts#L134)

Creates a CachedMultiFileI18nDb from a folder path.
The folder path which contains all multiple files of type [LanguageTranslations](../type-aliases/LanguageTranslations.md), and each must be named using [LangScriptCode](../type-aliases/LangScriptCode.md) followed by a `.json`. 
It needs to point to a folder inside of the `public` folder, and the folder must contain a `manifest.json` file of the format [FolderLanguageManifestType](../type-aliases/FolderLanguageManifestType.md)

#### Parameters

##### folder

`string`

#### Returns

`Promise`\<`CachedMultiFileI18nDb`\>
