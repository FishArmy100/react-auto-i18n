import sys
from transformers import AutoModelForSeq2SeqLM, NllbTokenizer
from pydantic import BaseModel
import json
import io
import re

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

class Args(BaseModel):
    src_lang: str
    segments: dict[str, str | list[str]]
    langs: list[str]
    max_tokens: int

class Ret(BaseModel):
    values: dict[str, dict[str, str | list[str]]]

def emit_progress(current: int, total: int, lang: str):
    progress = { "type": "progress", "current": current, "total": total, "lang": lang }
    print(json.dumps(progress, ensure_ascii=False), flush=True)


def translate(segment: str, lang: str, src_lang: str, model, tokenizer, max_tokens: int) -> str:
    
    protected: list[str] = re.findall(r'\{\{.*?\}\}', segment)
    placeholder_map: dict[str, tuple[str, bool]] = {}

    for i, match in enumerate(protected):
        token = f"XXPLACEHOLDER{i}XX"
        placeholder_map[token] = (match, match[2] == "$") 
        segment = segment.replace(match, token, 1)

    tokenizer.src_lang = src_lang
    inputs = tokenizer(segment, return_tensors="pt")
    
    # Get the token ID for the target language
    lang_id = tokenizer.convert_tokens_to_ids(lang)

    translated_tokens = model.generate(
        **inputs,
        forced_bos_token_id=lang_id,
        max_length=max_tokens
    )

    translation: str = tokenizer.batch_decode(translated_tokens, skip_special_tokens=True)[0]
    
    for token, original in placeholder_map.items():
        if original[1]: # if we are a variable, don't strip the {{$...}}
            translation = translation.replace(token, original[0])
        else:
            end = len(original[0]) - 2
            r = original[0][2:end]
            translation = translation.replace(token, r)


    return translation

def main():
    try:
        args = Args.model_validate_json(sys.argv[1])

        model_name = "facebook/nllb-200-distilled-1.3B"
        tokenizer = NllbTokenizer.from_pretrained(model_name)
        model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

        total = len(args.langs) * len(args.segments)
        current = 0

        ret = Ret(values={})
        for l in args.langs:
            ret.values[l] = {}
            for k, s in args.segments.items():
                if type(s) is str:
                    translated = translate(s, l, args.src_lang, model, tokenizer, args.max_tokens)
                    ret.values[l][k] = translated
                else:
                    variants: list[str] = []
                    for se in s:
                        translated = translate(se, l, args.src_lang, model, tokenizer, args.max_tokens)
                        variants.append(translated)
                    ret.values[l][k] = variants
                current += 1
                emit_progress(current, total, l)

        ret.values[args.src_lang] = {}
        for k, s in args.segments.items():
            if type(s) is str:
                s = re.sub(r"\{\{(?!\$)([^}]+)\}\}", r"\1", s)
                ret.values[args.src_lang][k] = s
            else:
                variants: list[str] = []
                for se in s:
                    se = re.sub(r"\{\{(?!\$)([^}]+)\}\}", r"\1", se)
                    variants.append(se)
                ret.values[args.src_lang][k] = variants

        
        print(json.dumps({"type": "result", **ret.model_dump()}, ensure_ascii=False))
    except Exception as e:
        print(json.dumps({"type": "error", "message": str(e)}), flush=True)
        sys.exit(1)

if __name__ == "__main__":
    main()