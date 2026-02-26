import sys
from transformers import AutoModelForSeq2SeqLM, NllbTokenizer
from pydantic import BaseModel
import json
import io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

class Args(BaseModel):
    src_lang: str
    segments: dict[str, str]
    langs: list[str]

class Ret(BaseModel):
    values: dict[str, dict[str, str]]

def emit_progress(current: int, total: int, lang: str):
    progress = { "type": "progress", "current": current, "total": total, "lang": lang }
    print(json.dumps(progress, ensure_ascii=False), flush=True)


def translate(segment: str, lang: str, src_lang, model, tokenizer) -> str:
    tokenizer.src_lang = src_lang
    inputs = tokenizer(segment, return_tensors="pt")
    
    # Get the token ID for the target language
    lang_id = tokenizer.convert_tokens_to_ids(lang)

    translated_tokens = model.generate(
        **inputs,
        forced_bos_token_id=lang_id,
        max_length=100
    )

    translation = tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]
    return translation

def main():
    try:
        args = Args.model_validate_json(sys.argv[1])

        model_name = "facebook/nllb-200-distilled-600M"
        tokenizer = NllbTokenizer.from_pretrained(model_name)
        model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

        total = len(args.langs) * len(args.segments)
        current = 0

        ret = Ret(values={})
        for l in args.langs:
            ret.values[l] = {}
            for k, s in args.segments.items():
                translated = translate(s, l, args.src_lang, model, tokenizer)
                ret.values[l][k] = translated
                current += 1
                emit_progress(current, total, l)

        ret.values[args.src_lang] = {}
        for k, s in args.segments.items():
            ret.values[args.src_lang][k] = s
        
        print(json.dumps({"type": "result", **ret.model_dump()}, ensure_ascii=False))
    except Exception as e:
        print(json.dumps({"type": "error", "message": str(e)}), flush=True)
        sys.exit(1)

if __name__ == "__main__":
    main()