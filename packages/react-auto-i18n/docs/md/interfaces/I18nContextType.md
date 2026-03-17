[**react-auto-i18n**](../README.md)

***

[react-auto-i18n](../globals.md) / I18nContextType

# Interface: I18nContextType

Defined in: [components/I18nProvider.tsx:9](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nProvider.tsx#L9)

The context type for the [I18nProvider](../functions/I18nProvider.md)

## Properties

### database

> `readonly` **database**: [`I18nDatabase`](I18nDatabase.md)

Defined in: [components/I18nProvider.tsx:25](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nProvider.tsx#L25)

The currently set [I18nDatabase](I18nDatabase.md)

***

### getLocaleObj()

> `readonly` **getLocaleObj**: () => [`LangScriptObj`](../classes/LangScriptObj.md)

Defined in: [components/I18nProvider.tsx:20](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nProvider.tsx#L20)

Gets a wrapper [LangScriptObj](../classes/LangScriptObj.md) around this locale

#### Returns

[`LangScriptObj`](../classes/LangScriptObj.md)

a wrapper [LangScriptObj](../classes/LangScriptObj.md) around this locale

***

### getLocales()

> `readonly` **getLocales**: () => (`"ace_Arab"` \| `"ace_Latn"` \| `"acm_Arab"` \| `"acq_Arab"` \| `"aeb_Arab"` \| `"afr_Latn"` \| `"als_Latn"` \| `"amh_Ethi"` \| `"apc_Arab"` \| `"arb_Arab"` \| `"arb_Latn"` \| `"arg_Latn"` \| `"ars_Arab"` \| `"ary_Arab"` \| `"arz_Arab"` \| `"asm_Beng"` \| `"ast_Latn"` \| `"awa_Deva"` \| `"ayr_Latn"` \| `"azb_Arab"` \| `"azj_Latn"` \| `"bak_Cyrl"` \| `"bam_Latn"` \| `"ban_Latn"` \| `"bel_Cyrl"` \| `"bem_Latn"` \| `"ben_Beng"` \| `"bho_Deva"` \| `"bjn_Arab"` \| `"bjn_Latn"` \| `"bod_Tibt"` \| `"bos_Latn"` \| `"brx_Deva"` \| `"bug_Latn"` \| `"bul_Cyrl"` \| `"cat_Latn"` \| `"ceb_Latn"` \| `"ces_Latn"` \| `"chv_Cyrl"` \| `"cjk_Latn"` \| `"ckb_Arab"` \| `"cmn_Hans"` \| `"cmn_Hant"` \| `"crh_Latn"` \| `"cym_Latn"` \| `"dan_Latn"` \| `"dar_Cyrl"` \| `"deu_Latn"` \| `"dgo_Deva"` \| `"dik_Latn"` \| `"dyu_Latn"` \| `"dzo_Tibt"` \| `"ekk_Latn"` \| `"ell_Grek"` \| `"eng_Latn"` \| `"epo_Latn"` \| `"eus_Latn"` \| `"ewe_Latn"` \| `"fao_Latn"` \| `"fij_Latn"` \| `"fil_Latn"` \| `"fin_Latn"` \| `"fon_Latn"` \| `"fra_Latn"` \| `"fur_Latn"` \| `"fuv_Latn"` \| `"gaz_Latn"` \| `"gla_Latn"` \| `"gle_Latn"` \| `"glg_Latn"` \| `"gom_Deva"` \| `"gug_Latn"` \| `"guj_Gujr"` \| `"hat_Latn"` \| `"hau_Latn"` \| `"heb_Hebr"` \| `"hin_Deva"` \| `"hne_Deva"` \| `"hrv_Latn"` \| `"hun_Latn"` \| `"hye_Armn"` \| `"ibo_Latn"` \| `"ilo_Latn"` \| `"ind_Latn"` \| `"isl_Latn"` \| `"ita_Latn"` \| `"jav_Latn"` \| `"jpn_Jpan"` \| `"kaa_Latn"` \| `"kab_Latn"` \| `"kac_Latn"` \| `"kam_Latn"` \| `"kan_Knda"` \| `"kas_Arab"` \| `"kas_Deva"` \| `"kat_Geor"` \| `"kaz_Cyrl"` \| `"kbp_Latn"` \| `"kea_Latn"` \| `"khk_Cyrl"` \| `"khm_Khmr"` \| `"kik_Latn"` \| `"kin_Latn"` \| `"kir_Cyrl"` \| `"kmb_Latn"` \| `"kmr_Latn"` \| `"knc_Arab"` \| `"knc_Latn"` \| `"kor_Hang"` \| `"ktu_Latn"` \| `"lao_Laoo"` \| `"lij_Latn"` \| `"lim_Latn"` \| `"lin_Latn"` \| `"lit_Latn"` \| `"lld_Latn"` \| `"lmo_Latn"` \| `"ltg_Latn"` \| `"ltz_Latn"` \| `"lua_Latn"` \| `"lug_Latn"` \| `"luo_Latn"` \| `"lus_Latn"` \| `"lvs_Latn"` \| `"mag_Deva"` \| `"mai_Deva"` \| `"mal_Mlym"` \| `"mar_Deva"` \| `"mfe_Latn"` \| `"mhr_Cyrl"` \| `"min_Arab"` \| `"min_Latn"` \| `"mkd_Cyrl"` \| `"mlt_Latn"` \| `"mni_Beng"` \| `"mni_Mtei"` \| `"mos_Latn"` \| `"mri_Latn"` \| `"mya_Mymr"` \| `"myv_Cyrl"` \| `"nld_Latn"` \| `"nno_Latn"` \| `"nob_Latn"` \| `"npi_Deva"` \| `"nqo_Nkoo"` \| `"nso_Latn"` \| `"nus_Latn"` \| `"nya_Latn"` \| `"oci_Latn"` \| `"ory_Orya"` \| `"pag_Latn"` \| `"pan_Guru"` \| `"pap_Latn"` \| `"pbt_Arab"` \| `"pes_Arab"` \| `"plt_Latn"` \| `"pol_Latn"` \| `"por_Latn"` \| `"prs_Arab"` \| `"quy_Latn"` \| `"ron_Latn"` \| `"run_Latn"` \| `"rus_Cyrl"` \| `"sag_Latn"` \| `"san_Deva"` \| `"sat_Olck"` \| `"scn_Latn"` \| `"shn_Mymr"` \| `"sin_Sinh"` \| `"slk_Latn"` \| `"slv_Latn"` \| `"smo_Latn"` \| `"sna_Latn"` \| `"snd_Arab"` \| `"snd_Deva"` \| `"som_Latn"` \| `"sot_Latn"` \| `"spa_Latn"` \| `"srd_Latn"` \| `"srp_Cyrl"` \| `"ssw_Latn"` \| `"sun_Latn"` \| `"swe_Latn"` \| `"swh_Latn"` \| `"szl_Latn"` \| `"tam_Taml"` \| `"taq_Latn"` \| `"taq_Tfng"` \| `"tat_Cyrl"` \| `"tel_Telu"` \| `"tgk_Cyrl"` \| `"tha_Thai"` \| `"tir_Ethi"` \| `"tpi_Latn"` \| `"tsn_Latn"` \| `"tso_Latn"` \| `"tuk_Latn"` \| `"tum_Latn"` \| `"tur_Latn"` \| `"twi_Latn"` \| `"tyv_Cyrl"` \| `"uig_Arab"` \| `"ukr_Cyrl"` \| `"umb_Latn"` \| `"urd_Arab"` \| `"uzn_Latn"` \| `"uzs_Arab"` \| `"vec_Latn"` \| `"vie_Latn"` \| `"vmw_Latn"` \| `"war_Latn"` \| `"wol_Latn"` \| `"wuu_Hans"` \| `"xho_Latn"` \| `"ydd_Hebr"` \| `"yor_Latn"` \| `"yue_Hant"` \| `"zgh_Tfng"` \| `"zsm_Latn"` \| `"zul_Latn"`)[]

Defined in: [components/I18nProvider.tsx:43](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nProvider.tsx#L43)

This is essentially a helper function for doing `.database.langs()`

#### Returns

(`"ace_Arab"` \| `"ace_Latn"` \| `"acm_Arab"` \| `"acq_Arab"` \| `"aeb_Arab"` \| `"afr_Latn"` \| `"als_Latn"` \| `"amh_Ethi"` \| `"apc_Arab"` \| `"arb_Arab"` \| `"arb_Latn"` \| `"arg_Latn"` \| `"ars_Arab"` \| `"ary_Arab"` \| `"arz_Arab"` \| `"asm_Beng"` \| `"ast_Latn"` \| `"awa_Deva"` \| `"ayr_Latn"` \| `"azb_Arab"` \| `"azj_Latn"` \| `"bak_Cyrl"` \| `"bam_Latn"` \| `"ban_Latn"` \| `"bel_Cyrl"` \| `"bem_Latn"` \| `"ben_Beng"` \| `"bho_Deva"` \| `"bjn_Arab"` \| `"bjn_Latn"` \| `"bod_Tibt"` \| `"bos_Latn"` \| `"brx_Deva"` \| `"bug_Latn"` \| `"bul_Cyrl"` \| `"cat_Latn"` \| `"ceb_Latn"` \| `"ces_Latn"` \| `"chv_Cyrl"` \| `"cjk_Latn"` \| `"ckb_Arab"` \| `"cmn_Hans"` \| `"cmn_Hant"` \| `"crh_Latn"` \| `"cym_Latn"` \| `"dan_Latn"` \| `"dar_Cyrl"` \| `"deu_Latn"` \| `"dgo_Deva"` \| `"dik_Latn"` \| `"dyu_Latn"` \| `"dzo_Tibt"` \| `"ekk_Latn"` \| `"ell_Grek"` \| `"eng_Latn"` \| `"epo_Latn"` \| `"eus_Latn"` \| `"ewe_Latn"` \| `"fao_Latn"` \| `"fij_Latn"` \| `"fil_Latn"` \| `"fin_Latn"` \| `"fon_Latn"` \| `"fra_Latn"` \| `"fur_Latn"` \| `"fuv_Latn"` \| `"gaz_Latn"` \| `"gla_Latn"` \| `"gle_Latn"` \| `"glg_Latn"` \| `"gom_Deva"` \| `"gug_Latn"` \| `"guj_Gujr"` \| `"hat_Latn"` \| `"hau_Latn"` \| `"heb_Hebr"` \| `"hin_Deva"` \| `"hne_Deva"` \| `"hrv_Latn"` \| `"hun_Latn"` \| `"hye_Armn"` \| `"ibo_Latn"` \| `"ilo_Latn"` \| `"ind_Latn"` \| `"isl_Latn"` \| `"ita_Latn"` \| `"jav_Latn"` \| `"jpn_Jpan"` \| `"kaa_Latn"` \| `"kab_Latn"` \| `"kac_Latn"` \| `"kam_Latn"` \| `"kan_Knda"` \| `"kas_Arab"` \| `"kas_Deva"` \| `"kat_Geor"` \| `"kaz_Cyrl"` \| `"kbp_Latn"` \| `"kea_Latn"` \| `"khk_Cyrl"` \| `"khm_Khmr"` \| `"kik_Latn"` \| `"kin_Latn"` \| `"kir_Cyrl"` \| `"kmb_Latn"` \| `"kmr_Latn"` \| `"knc_Arab"` \| `"knc_Latn"` \| `"kor_Hang"` \| `"ktu_Latn"` \| `"lao_Laoo"` \| `"lij_Latn"` \| `"lim_Latn"` \| `"lin_Latn"` \| `"lit_Latn"` \| `"lld_Latn"` \| `"lmo_Latn"` \| `"ltg_Latn"` \| `"ltz_Latn"` \| `"lua_Latn"` \| `"lug_Latn"` \| `"luo_Latn"` \| `"lus_Latn"` \| `"lvs_Latn"` \| `"mag_Deva"` \| `"mai_Deva"` \| `"mal_Mlym"` \| `"mar_Deva"` \| `"mfe_Latn"` \| `"mhr_Cyrl"` \| `"min_Arab"` \| `"min_Latn"` \| `"mkd_Cyrl"` \| `"mlt_Latn"` \| `"mni_Beng"` \| `"mni_Mtei"` \| `"mos_Latn"` \| `"mri_Latn"` \| `"mya_Mymr"` \| `"myv_Cyrl"` \| `"nld_Latn"` \| `"nno_Latn"` \| `"nob_Latn"` \| `"npi_Deva"` \| `"nqo_Nkoo"` \| `"nso_Latn"` \| `"nus_Latn"` \| `"nya_Latn"` \| `"oci_Latn"` \| `"ory_Orya"` \| `"pag_Latn"` \| `"pan_Guru"` \| `"pap_Latn"` \| `"pbt_Arab"` \| `"pes_Arab"` \| `"plt_Latn"` \| `"pol_Latn"` \| `"por_Latn"` \| `"prs_Arab"` \| `"quy_Latn"` \| `"ron_Latn"` \| `"run_Latn"` \| `"rus_Cyrl"` \| `"sag_Latn"` \| `"san_Deva"` \| `"sat_Olck"` \| `"scn_Latn"` \| `"shn_Mymr"` \| `"sin_Sinh"` \| `"slk_Latn"` \| `"slv_Latn"` \| `"smo_Latn"` \| `"sna_Latn"` \| `"snd_Arab"` \| `"snd_Deva"` \| `"som_Latn"` \| `"sot_Latn"` \| `"spa_Latn"` \| `"srd_Latn"` \| `"srp_Cyrl"` \| `"ssw_Latn"` \| `"sun_Latn"` \| `"swe_Latn"` \| `"swh_Latn"` \| `"szl_Latn"` \| `"tam_Taml"` \| `"taq_Latn"` \| `"taq_Tfng"` \| `"tat_Cyrl"` \| `"tel_Telu"` \| `"tgk_Cyrl"` \| `"tha_Thai"` \| `"tir_Ethi"` \| `"tpi_Latn"` \| `"tsn_Latn"` \| `"tso_Latn"` \| `"tuk_Latn"` \| `"tum_Latn"` \| `"tur_Latn"` \| `"twi_Latn"` \| `"tyv_Cyrl"` \| `"uig_Arab"` \| `"ukr_Cyrl"` \| `"umb_Latn"` \| `"urd_Arab"` \| `"uzn_Latn"` \| `"uzs_Arab"` \| `"vec_Latn"` \| `"vie_Latn"` \| `"vmw_Latn"` \| `"war_Latn"` \| `"wol_Latn"` \| `"wuu_Hans"` \| `"xho_Latn"` \| `"ydd_Hebr"` \| `"yor_Latn"` \| `"yue_Hant"` \| `"zgh_Tfng"` \| `"zsm_Latn"` \| `"zul_Latn"`)[]

Returns all the loaded [LangScriptCode](../type-aliases/LangScriptCode.md)'s in the current I18nDatabase.

***

### locale

> `readonly` **locale**: `"ace_Arab"` \| `"ace_Latn"` \| `"acm_Arab"` \| `"acq_Arab"` \| `"aeb_Arab"` \| `"afr_Latn"` \| `"als_Latn"` \| `"amh_Ethi"` \| `"apc_Arab"` \| `"arb_Arab"` \| `"arb_Latn"` \| `"arg_Latn"` \| `"ars_Arab"` \| `"ary_Arab"` \| `"arz_Arab"` \| `"asm_Beng"` \| `"ast_Latn"` \| `"awa_Deva"` \| `"ayr_Latn"` \| `"azb_Arab"` \| `"azj_Latn"` \| `"bak_Cyrl"` \| `"bam_Latn"` \| `"ban_Latn"` \| `"bel_Cyrl"` \| `"bem_Latn"` \| `"ben_Beng"` \| `"bho_Deva"` \| `"bjn_Arab"` \| `"bjn_Latn"` \| `"bod_Tibt"` \| `"bos_Latn"` \| `"brx_Deva"` \| `"bug_Latn"` \| `"bul_Cyrl"` \| `"cat_Latn"` \| `"ceb_Latn"` \| `"ces_Latn"` \| `"chv_Cyrl"` \| `"cjk_Latn"` \| `"ckb_Arab"` \| `"cmn_Hans"` \| `"cmn_Hant"` \| `"crh_Latn"` \| `"cym_Latn"` \| `"dan_Latn"` \| `"dar_Cyrl"` \| `"deu_Latn"` \| `"dgo_Deva"` \| `"dik_Latn"` \| `"dyu_Latn"` \| `"dzo_Tibt"` \| `"ekk_Latn"` \| `"ell_Grek"` \| `"eng_Latn"` \| `"epo_Latn"` \| `"eus_Latn"` \| `"ewe_Latn"` \| `"fao_Latn"` \| `"fij_Latn"` \| `"fil_Latn"` \| `"fin_Latn"` \| `"fon_Latn"` \| `"fra_Latn"` \| `"fur_Latn"` \| `"fuv_Latn"` \| `"gaz_Latn"` \| `"gla_Latn"` \| `"gle_Latn"` \| `"glg_Latn"` \| `"gom_Deva"` \| `"gug_Latn"` \| `"guj_Gujr"` \| `"hat_Latn"` \| `"hau_Latn"` \| `"heb_Hebr"` \| `"hin_Deva"` \| `"hne_Deva"` \| `"hrv_Latn"` \| `"hun_Latn"` \| `"hye_Armn"` \| `"ibo_Latn"` \| `"ilo_Latn"` \| `"ind_Latn"` \| `"isl_Latn"` \| `"ita_Latn"` \| `"jav_Latn"` \| `"jpn_Jpan"` \| `"kaa_Latn"` \| `"kab_Latn"` \| `"kac_Latn"` \| `"kam_Latn"` \| `"kan_Knda"` \| `"kas_Arab"` \| `"kas_Deva"` \| `"kat_Geor"` \| `"kaz_Cyrl"` \| `"kbp_Latn"` \| `"kea_Latn"` \| `"khk_Cyrl"` \| `"khm_Khmr"` \| `"kik_Latn"` \| `"kin_Latn"` \| `"kir_Cyrl"` \| `"kmb_Latn"` \| `"kmr_Latn"` \| `"knc_Arab"` \| `"knc_Latn"` \| `"kor_Hang"` \| `"ktu_Latn"` \| `"lao_Laoo"` \| `"lij_Latn"` \| `"lim_Latn"` \| `"lin_Latn"` \| `"lit_Latn"` \| `"lld_Latn"` \| `"lmo_Latn"` \| `"ltg_Latn"` \| `"ltz_Latn"` \| `"lua_Latn"` \| `"lug_Latn"` \| `"luo_Latn"` \| `"lus_Latn"` \| `"lvs_Latn"` \| `"mag_Deva"` \| `"mai_Deva"` \| `"mal_Mlym"` \| `"mar_Deva"` \| `"mfe_Latn"` \| `"mhr_Cyrl"` \| `"min_Arab"` \| `"min_Latn"` \| `"mkd_Cyrl"` \| `"mlt_Latn"` \| `"mni_Beng"` \| `"mni_Mtei"` \| `"mos_Latn"` \| `"mri_Latn"` \| `"mya_Mymr"` \| `"myv_Cyrl"` \| `"nld_Latn"` \| `"nno_Latn"` \| `"nob_Latn"` \| `"npi_Deva"` \| `"nqo_Nkoo"` \| `"nso_Latn"` \| `"nus_Latn"` \| `"nya_Latn"` \| `"oci_Latn"` \| `"ory_Orya"` \| `"pag_Latn"` \| `"pan_Guru"` \| `"pap_Latn"` \| `"pbt_Arab"` \| `"pes_Arab"` \| `"plt_Latn"` \| `"pol_Latn"` \| `"por_Latn"` \| `"prs_Arab"` \| `"quy_Latn"` \| `"ron_Latn"` \| `"run_Latn"` \| `"rus_Cyrl"` \| `"sag_Latn"` \| `"san_Deva"` \| `"sat_Olck"` \| `"scn_Latn"` \| `"shn_Mymr"` \| `"sin_Sinh"` \| `"slk_Latn"` \| `"slv_Latn"` \| `"smo_Latn"` \| `"sna_Latn"` \| `"snd_Arab"` \| `"snd_Deva"` \| `"som_Latn"` \| `"sot_Latn"` \| `"spa_Latn"` \| `"srd_Latn"` \| `"srp_Cyrl"` \| `"ssw_Latn"` \| `"sun_Latn"` \| `"swe_Latn"` \| `"swh_Latn"` \| `"szl_Latn"` \| `"tam_Taml"` \| `"taq_Latn"` \| `"taq_Tfng"` \| `"tat_Cyrl"` \| `"tel_Telu"` \| `"tgk_Cyrl"` \| `"tha_Thai"` \| `"tir_Ethi"` \| `"tpi_Latn"` \| `"tsn_Latn"` \| `"tso_Latn"` \| `"tuk_Latn"` \| `"tum_Latn"` \| `"tur_Latn"` \| `"twi_Latn"` \| `"tyv_Cyrl"` \| `"uig_Arab"` \| `"ukr_Cyrl"` \| `"umb_Latn"` \| `"urd_Arab"` \| `"uzn_Latn"` \| `"uzs_Arab"` \| `"vec_Latn"` \| `"vie_Latn"` \| `"vmw_Latn"` \| `"war_Latn"` \| `"wol_Latn"` \| `"wuu_Hans"` \| `"xho_Latn"` \| `"ydd_Hebr"` \| `"yor_Latn"` \| `"yue_Hant"` \| `"zgh_Tfng"` \| `"zsm_Latn"` \| `"zul_Latn"`

Defined in: [components/I18nProvider.tsx:14](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nProvider.tsx#L14)

The currently set [LangScriptCode](../type-aliases/LangScriptCode.md)

***

### setDatabase()

> `readonly` **setDatabase**: (`database`) => `void`

Defined in: [components/I18nProvider.tsx:37](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nProvider.tsx#L37)

Sets the current [I18nDatabase](I18nDatabase.md)

#### Parameters

##### database

[`I18nDatabase`](I18nDatabase.md)

#### Returns

`void`

***

### setLocale()

> `readonly` **setLocale**: (`locale`) => `void`

Defined in: [components/I18nProvider.tsx:31](https://github.com/FishArmy100/react-auto-i18n/blob/16486c7babf9eec30bf06a8177ae06e9210655e8/packages/react-auto-i18n/src/components/I18nProvider.tsx#L31)

Sets the current [LangScriptCode](../type-aliases/LangScriptCode.md)

#### Parameters

##### locale

The current local to set

`"ace_Arab"` | `"ace_Latn"` | `"acm_Arab"` | `"acq_Arab"` | `"aeb_Arab"` | `"afr_Latn"` | `"als_Latn"` | `"amh_Ethi"` | `"apc_Arab"` | `"arb_Arab"` | `"arb_Latn"` | `"arg_Latn"` | `"ars_Arab"` | `"ary_Arab"` | `"arz_Arab"` | `"asm_Beng"` | `"ast_Latn"` | `"awa_Deva"` | `"ayr_Latn"` | `"azb_Arab"` | `"azj_Latn"` | `"bak_Cyrl"` | `"bam_Latn"` | `"ban_Latn"` | `"bel_Cyrl"` | `"bem_Latn"` | `"ben_Beng"` | `"bho_Deva"` | `"bjn_Arab"` | `"bjn_Latn"` | `"bod_Tibt"` | `"bos_Latn"` | `"brx_Deva"` | `"bug_Latn"` | `"bul_Cyrl"` | `"cat_Latn"` | `"ceb_Latn"` | `"ces_Latn"` | `"chv_Cyrl"` | `"cjk_Latn"` | `"ckb_Arab"` | `"cmn_Hans"` | `"cmn_Hant"` | `"crh_Latn"` | `"cym_Latn"` | `"dan_Latn"` | `"dar_Cyrl"` | `"deu_Latn"` | `"dgo_Deva"` | `"dik_Latn"` | `"dyu_Latn"` | `"dzo_Tibt"` | `"ekk_Latn"` | `"ell_Grek"` | `"eng_Latn"` | `"epo_Latn"` | `"eus_Latn"` | `"ewe_Latn"` | `"fao_Latn"` | `"fij_Latn"` | `"fil_Latn"` | `"fin_Latn"` | `"fon_Latn"` | `"fra_Latn"` | `"fur_Latn"` | `"fuv_Latn"` | `"gaz_Latn"` | `"gla_Latn"` | `"gle_Latn"` | `"glg_Latn"` | `"gom_Deva"` | `"gug_Latn"` | `"guj_Gujr"` | `"hat_Latn"` | `"hau_Latn"` | `"heb_Hebr"` | `"hin_Deva"` | `"hne_Deva"` | `"hrv_Latn"` | `"hun_Latn"` | `"hye_Armn"` | `"ibo_Latn"` | `"ilo_Latn"` | `"ind_Latn"` | `"isl_Latn"` | `"ita_Latn"` | `"jav_Latn"` | `"jpn_Jpan"` | `"kaa_Latn"` | `"kab_Latn"` | `"kac_Latn"` | `"kam_Latn"` | `"kan_Knda"` | `"kas_Arab"` | `"kas_Deva"` | `"kat_Geor"` | `"kaz_Cyrl"` | `"kbp_Latn"` | `"kea_Latn"` | `"khk_Cyrl"` | `"khm_Khmr"` | `"kik_Latn"` | `"kin_Latn"` | `"kir_Cyrl"` | `"kmb_Latn"` | `"kmr_Latn"` | `"knc_Arab"` | `"knc_Latn"` | `"kor_Hang"` | `"ktu_Latn"` | `"lao_Laoo"` | `"lij_Latn"` | `"lim_Latn"` | `"lin_Latn"` | `"lit_Latn"` | `"lld_Latn"` | `"lmo_Latn"` | `"ltg_Latn"` | `"ltz_Latn"` | `"lua_Latn"` | `"lug_Latn"` | `"luo_Latn"` | `"lus_Latn"` | `"lvs_Latn"` | `"mag_Deva"` | `"mai_Deva"` | `"mal_Mlym"` | `"mar_Deva"` | `"mfe_Latn"` | `"mhr_Cyrl"` | `"min_Arab"` | `"min_Latn"` | `"mkd_Cyrl"` | `"mlt_Latn"` | `"mni_Beng"` | `"mni_Mtei"` | `"mos_Latn"` | `"mri_Latn"` | `"mya_Mymr"` | `"myv_Cyrl"` | `"nld_Latn"` | `"nno_Latn"` | `"nob_Latn"` | `"npi_Deva"` | `"nqo_Nkoo"` | `"nso_Latn"` | `"nus_Latn"` | `"nya_Latn"` | `"oci_Latn"` | `"ory_Orya"` | `"pag_Latn"` | `"pan_Guru"` | `"pap_Latn"` | `"pbt_Arab"` | `"pes_Arab"` | `"plt_Latn"` | `"pol_Latn"` | `"por_Latn"` | `"prs_Arab"` | `"quy_Latn"` | `"ron_Latn"` | `"run_Latn"` | `"rus_Cyrl"` | `"sag_Latn"` | `"san_Deva"` | `"sat_Olck"` | `"scn_Latn"` | `"shn_Mymr"` | `"sin_Sinh"` | `"slk_Latn"` | `"slv_Latn"` | `"smo_Latn"` | `"sna_Latn"` | `"snd_Arab"` | `"snd_Deva"` | `"som_Latn"` | `"sot_Latn"` | `"spa_Latn"` | `"srd_Latn"` | `"srp_Cyrl"` | `"ssw_Latn"` | `"sun_Latn"` | `"swe_Latn"` | `"swh_Latn"` | `"szl_Latn"` | `"tam_Taml"` | `"taq_Latn"` | `"taq_Tfng"` | `"tat_Cyrl"` | `"tel_Telu"` | `"tgk_Cyrl"` | `"tha_Thai"` | `"tir_Ethi"` | `"tpi_Latn"` | `"tsn_Latn"` | `"tso_Latn"` | `"tuk_Latn"` | `"tum_Latn"` | `"tur_Latn"` | `"twi_Latn"` | `"tyv_Cyrl"` | `"uig_Arab"` | `"ukr_Cyrl"` | `"umb_Latn"` | `"urd_Arab"` | `"uzn_Latn"` | `"uzs_Arab"` | `"vec_Latn"` | `"vie_Latn"` | `"vmw_Latn"` | `"war_Latn"` | `"wol_Latn"` | `"wuu_Hans"` | `"xho_Latn"` | `"ydd_Hebr"` | `"yor_Latn"` | `"yue_Hant"` | `"zgh_Tfng"` | `"zsm_Latn"` | `"zul_Latn"`

#### Returns

`void`
