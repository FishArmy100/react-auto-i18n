import sys
from pydantic import BaseModel
import json
import io
import re

NLLB_TO_AZURE: dict[str, str | None] = {
    "ace_Arab": None,
    "ace_Latn": None,
    "acm_Arab": None,
    "acq_Arab": None,
    "aeb_Arab": None,
    "afr_Latn": "af",
    "als_Latn": "sq",
    "amh_Ethi": "am",
    "apc_Arab": None,
    "arb_Arab": "ar",
    "arb_Latn": "ar",
    "arg_Latn": None,
    "ars_Arab": "ar",
    "ary_Arab": None,
    "arz_Arab": None,
    "asm_Beng": "as",
    "ast_Latn": None,
    "awa_Deva": None,
    "ayr_Latn": None,
    "azb_Arab": None,
    "azj_Latn": "az",
    "bak_Cyrl": "ba",
    "bam_Latn": None,
    "ban_Latn": None,
    "bel_Cyrl": None,
    "bem_Latn": None,
    "ben_Beng": "bn",
    "bho_Deva": "bho",
    "bjn_Arab": None,
    "bjn_Latn": None,
    "bod_Tibt": "bo",
    "bos_Latn": "bs",
    "brx_Deva": None,
    "bug_Latn": None,
    "bul_Cyrl": "bg",
    "cat_Latn": "ca",
    "ceb_Latn": "ceb",
    "ces_Latn": "cs",
    "chv_Cyrl": None,
    "cjk_Latn": None,
    "ckb_Arab": "ku",
    "cmn_Hans": "zh-Hans",
    "cmn_Hant": "zh-Hant",
    "crh_Latn": "crh",
    "cym_Latn": "cy",
    "dan_Latn": "da",
    "dar_Cyrl": None,
    "deu_Latn": "de",
    "dgo_Deva": None,
    "dik_Latn": None,
    "dyu_Latn": None,
    "dzo_Tibt": None,
    "ekk_Latn": "et",
    "ell_Grek": "el",
    "eng_Latn": "en",
    "epo_Latn": None,
    "eus_Latn": "eu",
    "ewe_Latn": None,
    "fao_Latn": "fo",
    "fij_Latn": "fj",
    "fil_Latn": "fil",
    "fin_Latn": "fi",
    "fon_Latn": None,
    "fra_Latn": "fr",
    "fur_Latn": None,
    "fuv_Latn": None,
    "gaz_Latn": "om",
    "gla_Latn": "ga",  # Scottish Gaelic; Azure 'gd' not consistently available
    "gle_Latn": "ga",
    "glg_Latn": "gl",
    "gom_Deva": None,
    "gug_Latn": None,
    "guj_Gujr": "gu",
    "hat_Latn": "ht",
    "hau_Latn": "ha",
    "heb_Hebr": "he",
    "hin_Deva": "hi",
    "hne_Deva": None,
    "hrv_Latn": "hr",
    "hun_Latn": "hu",
    "hye_Armn": "hy",
    "ibo_Latn": "ig",
    "ilo_Latn": None,
    "ind_Latn": "id",
    "isl_Latn": "is",
    "ita_Latn": "it",
    "jav_Latn": "jv",
    "jpn_Jpan": "ja",
    "kaa_Latn": None,
    "kab_Latn": None,
    "kac_Latn": None,
    "kam_Latn": None,
    "kan_Knda": "kn",
    "kas_Arab": None,
    "kas_Deva": None,
    "kat_Geor": "ka",
    "kaz_Cyrl": "kk",
    "kbp_Latn": None,
    "kea_Latn": None,
    "khk_Cyrl": "mn-Cyrl",
    "khm_Khmr": "km",
    "kik_Latn": None,
    "kin_Latn": "rw",
    "kir_Cyrl": "ky",
    "kmb_Latn": None,
    "kmr_Latn": "kmr",
    "knc_Arab": None,
    "knc_Latn": None,
    "kor_Hang": "ko",
    "ktu_Latn": None,
    "lao_Laoo": "lo",
    "lij_Latn": None,
    "lim_Latn": None,
    "lin_Latn": None,
    "lit_Latn": "lt",
    "lld_Latn": None,
    "lmo_Latn": None,
    "ltg_Latn": None,
    "ltz_Latn": "lb",
    "lua_Latn": None,
    "lug_Latn": None,
    "luo_Latn": None,
    "lus_Latn": None,
    "lvs_Latn": "lv",
    "mag_Deva": None,
    "mai_Deva": "mai",
    "mal_Mlym": "ml",
    "mar_Deva": "mr",
    "mfe_Latn": None,
    "mhr_Cyrl": None,
    "min_Arab": None,
    "min_Latn": None,
    "mkd_Cyrl": "mk",
    "mlt_Latn": "mt",
    "mni_Beng": "mni",
    "mni_Mtei": None,
    "mos_Latn": None,
    "mri_Latn": "mi",
    "mya_Mymr": "my",
    "myv_Cyrl": None,
    "nld_Latn": "nl",
    "nno_Latn": "nb",  # Azure merges Nynorsk/Bokmål under 'nb'
    "nob_Latn": "nb",
    "npi_Deva": "ne",
    "nqo_Nkoo": None,
    "nso_Latn": None,
    "nus_Latn": None,
    "nya_Latn": "ny",
    "oci_Latn": None,
    "ory_Orya": "or",
    "pag_Latn": None,
    "pan_Guru": "pa",
    "pap_Latn": None,
    "pbt_Arab": "ps",
    "pes_Arab": "fa",
    "plt_Latn": "mg",
    "pol_Latn": "pl",
    "por_Latn": "pt",
    "prs_Arab": "prs",
    "quy_Latn": None,
    "ron_Latn": "ro",
    "run_Latn": None,
    "rus_Cyrl": "ru",
    "sag_Latn": None,
    "san_Deva": None,
    "sat_Olck": None,
    "scn_Latn": None,
    "shn_Mymr": None,
    "sin_Sinh": "si",
    "slk_Latn": "sk",
    "slv_Latn": "sl",
    "smo_Latn": "sm",
    "sna_Latn": None,
    "snd_Arab": "sd",
    "snd_Deva": "sd",
    "som_Latn": "so",
    "sot_Latn": "st",
    "spa_Latn": "es",
    "srd_Latn": None,
    "srp_Cyrl": "sr-Cyrl",
    "ssw_Latn": None,
    "sun_Latn": "su",
    "swe_Latn": "sv",
    "swh_Latn": "sw",
    "szl_Latn": None,
    "tam_Taml": "ta",
    "taq_Latn": None,
    "taq_Tfng": None,
    "tat_Cyrl": "tt",
    "tel_Telu": "te",
    "tgk_Cyrl": "tg",
    "tha_Thai": "th",
    "tir_Ethi": "ti",
    "tpi_Latn": "to",
    "tsn_Latn": "tn",
    "tso_Latn": None,
    "tuk_Latn": "tk",
    "tum_Latn": None,
    "tur_Latn": "tr",
    "twi_Latn": None,
    "tyv_Cyrl": None,
    "uig_Arab": "ug",
    "ukr_Cyrl": "uk",
    "umb_Latn": None,
    "urd_Arab": "ur",
    "uzn_Latn": "uz",
    "uzs_Arab": None,
    "vec_Latn": None,
    "vie_Latn": "vi",
    "vmw_Latn": None,
    "war_Latn": None,
    "wol_Latn": None,
    "wuu_Hans": "wuu",
    "xho_Latn": "xh",
    "ydd_Hebr": None,  # Yiddish not reliably supported in Azure
    "yor_Latn": "yo",
    "yue_Hant": "yue",
    "zgh_Tfng": None,
    "zsm_Latn": "ms",
    "zul_Latn": "zu",
}


def nllb_to_azure(code: str) -> str | None:
    """
    Converts an NLLB language code to an Azure Translator BCP-47 language tag.
    Returns None if there is no Azure equivalent for the given code.
    """
    return NLLB_TO_AZURE.get(code, None)

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')


class Args(BaseModel):
    backend: str  # "nllb" or "azure"
    src_lang: str
    segments: dict[str, str | list[str]]
    langs: list[str]
    max_tokens: int = 512
    # NLLB-specific
    nllb_model: str = "facebook/nllb-200-distilled-1.3B"
    # Azure-specific
    azure_key: str = ""
    azure_region: str = "eastus"
    azure_endpoint: str = "https://api.cognitive.microsofttranslator.com"


class Ret(BaseModel):
    values: dict[str, dict[str, str | list[str]]]


def emit_progress(current: int, total: int, lang: str):
    progress = {"type": "progress", "current": current, "total": total, "lang": lang}
    print(json.dumps(progress, ensure_ascii=False), flush=True)


def translate_nllb(segment: str, lang: str, src_lang: str, model, tokenizer, max_tokens: int) -> str:
    protected: list[str] = re.findall(r'\{\{.*?\}\}', segment)
    placeholder_map: dict[str, tuple[str, bool]] = {}

    for i, match in enumerate(protected):
        token = f"XXPLACEHOLDER{i}XX"
        placeholder_map[token] = (match, match[2] == "$")
        segment = segment.replace(match, token, 1)

    tokenizer.src_lang = src_lang
    inputs = tokenizer(segment, return_tensors="pt")
    lang_id = tokenizer.convert_tokens_to_ids(lang)

    translated_tokens = model.generate(
        **inputs,
        forced_bos_token_id=lang_id,
        max_length=max_tokens
    )

    translation: str = tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]

    for token, original in placeholder_map.items():
        if original[1]:
            translation = translation.replace(token, original[0])
        else:
            end = len(original[0]) - 2
            r = original[0][2:end]
            translation = translation.replace(token, r)

    return translation


def translate_azure(segment: str, lang: str, args: Args) -> str:
    import requests

    azure_lang = NLLB_TO_AZURE[lang]
    if azure_lang is None:
        raise ValueError(f"Language {lang} does not have a Azure compatible version")

    protected = re.findall(r'\{\{.*?\}\}', segment)
    placeholder_map: dict[str, tuple[str, bool]] = {}

    for i, match in enumerate(protected):
        token = f"XXPLACEHOLDER{i}XX"
        placeholder_map[token] = (match, match[2] == "$")
        segment = segment.replace(match, token, 1)

    url = f"{args.azure_endpoint}/translate?api-version=3.0&to={azure_lang}"
    headers = {
        "Ocp-Apim-Subscription-Key": args.azure_key,
        "Ocp-Apim-Subscription-Region": args.azure_region,
        "Content-type": "application/json"
    }
    response = requests.post(url, headers=headers, json=[{"text": segment}])
    response.raise_for_status()
    translation: str = response.json()[0]["translations"][0]["text"]

    for token, original in placeholder_map.items():
        if original[1]:
            translation = translation.replace(token, original[0])
        else:
            end = len(original[0]) - 2
            r = original[0][2:end]
            translation = translation.replace(token, r)

    return translation


def translate(segment: str, lang: str, args: Args, model=None, tokenizer=None) -> str:
    if args.backend == "nllb":
        return translate_nllb(segment, lang, args.src_lang, model, tokenizer, args.max_tokens)
    elif args.backend == "azure":
        return translate_azure(segment, lang, args)
    else:
        raise ValueError(f"Unknown backend: {args.backend!r}. Use 'nllb' or 'azure'.")


def main():
    try:
        args = Args.model_validate_json(sys.argv[1])

        model, tokenizer = None, None
        if args.backend == "nllb":
            from transformers import AutoModelForSeq2SeqLM, NllbTokenizer
            tokenizer = NllbTokenizer.from_pretrained(args.nllb_model)
            model = AutoModelForSeq2SeqLM.from_pretrained(args.nllb_model)
        elif args.backend == "azure":
            if not args.azure_key:
                raise ValueError("azure_key is required when using the Azure backend.")

        total = len(args.langs) * len(args.segments)
        current = 0

        ret = Ret(values={})
        for lang in args.langs:
            ret.values[lang] = {}
            for k, s in args.segments.items():
                if isinstance(s, str):
                    ret.values[lang][k] = translate(s, lang, args, model, tokenizer)
                else:
                    ret.values[lang][k] = [
                        translate(se, lang, args, model, tokenizer) for se in s
                    ]
                current += 1
                emit_progress(current, total, lang)

        # Pass-through source lang with non-variable placeholders stripped
        ret.values[args.src_lang] = {}
        for k, s in args.segments.items():
            if isinstance(s, str):
                ret.values[args.src_lang][k] = re.sub(r"\{\{(?!\$)([^}]+)\}\}", r"\1", s)
            else:
                ret.values[args.src_lang][k] = [
                    re.sub(r"\{\{(?!\$)([^}]+)\}\}", r"\1", se) for se in s
                ]

        print(json.dumps({"type": "result", **ret.model_dump()}, ensure_ascii=False))

    except Exception as e:
        print(json.dumps({"type": "error", "message": str(e)}), flush=True)
        sys.exit(1)


if __name__ == "__main__":
    main()