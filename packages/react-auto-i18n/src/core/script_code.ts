import { LANG_SCRIPT_CODES, LangScriptCode, SCRIPT_CODES } from "./index";

/**
 * The type of all script codes (i.e. the suffix of the `LangScriptCode`)
 */
export type ScriptCode = LangScriptCode extends `${string}_${infer S}` ? S : never;

/**
 * Gets the Script from the LangScriptCode. \
 * **Example:**
 * ```ts
 * let langScript: LangScriptCode = "eng_Latn";
 * console.log(getScriptCode(langScript)); // prints out 'Latn'
 * ```
 * @param code The `LangScriptCode`
 * @returns the `Script` of the `LangScriptCode`
 */
export function getScriptCode(code: LangScriptCode): ScriptCode
{
    return code.split('_')[1] as ScriptCode;
}

/**
 * Converts a raw string into a `LangScriptCode`, with error checking
 * @param str The string to be passed
 * @returns A `LangScriptCode` if the string is a valid `LangScriptCode` or `null` if it is not
 */
export function stringToLangScriptCode(str: string): LangScriptCode | null
{
	if (LANG_SCRIPT_CODES.includes(str as LangScriptCode))
	{
		return str as LangScriptCode
	}
	else 
	{
		return null;
	}
}

/**
 * Converts a raw string into a `ScriptCode`, with error checking
 * @param str The string to be passed
 * @returns A `ScriptCode` if the string is a valid `ScriptCode` or `null` if it is not
 */
export function stringToScriptCode(str: string): ScriptCode | null
{
	if (SCRIPT_CODES.includes(str as ScriptCode))
	{
		return str as ScriptCode
	}
	else 
	{
		return null;
	}
}