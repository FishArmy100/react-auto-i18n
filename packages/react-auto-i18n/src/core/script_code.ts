import { LANG_SCRIPT_CODES, LangScriptCode, SCRIPT_CODES } from "./index";

/**
 * The type of all script codes (i.e. the suffix of the {@link LangScriptCode})
 */
export type ScriptCode = LangScriptCode extends `${string}_${infer S}` ? S : never;


/**
 * The direction that a given script is read, and should be rendered
 * - `ltr`: Left-to-Right
 * - `rtl`: Right-to-Left
 */
export type ScriptDirection = "ltr" | "rtl";

/**
 * Gets the Script from the LangScriptCode. \
 * **Example:**
 * ```ts
 * let langScript: LangScriptCode = "eng_Latn";
 * console.log(getScriptCode(langScript)); // prints out 'Latn'
 * ```
 * @param code The {@link LangScriptCode}
 * @returns the `Script` of the {@link LangScriptCode}
 */
export function getScriptCode(code: LangScriptCode): ScriptCode
{
    return code.split('_')[1] as ScriptCode;
}

/**
 * Converts a raw string into a {@link LangScriptCode}, with error checking
 * @param str The string to be passed
 * @returns A {@link LangScriptCode} if the string is a valid {@link LangScriptCode} or `null` if it is not
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
 * Converts a raw string into a {@link ScriptCode}, with error checking
 * @param str The string to be passed
 * @returns A {@link ScriptCode} if the string is a valid {@link ScriptCode} or `null` if it is not
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

const SCRIPT_DIRECTION: Record<ScriptCode, ScriptDirection> = {
  // RTL scripts
  Arab: "rtl",
  Hebr: "rtl",
  Nkoo: "rtl",
  Tfng: "rtl",

  // LTR scripts
  Latn: "ltr",
  Cyrl: "ltr",
  Deva: "ltr",
  Beng: "ltr",
  Hans: "ltr",
  Hant: "ltr",
  Ethi: "ltr",
  Grek: "ltr",
  Gujr: "ltr",
  Armn: "ltr",
  Jpan: "ltr",
  Knda: "ltr",
  Geor: "ltr",
  Khmr: "ltr",
  Hang: "ltr",
  Laoo: "ltr",
  Mlym: "ltr",
  Mtei: "ltr",
  Mymr: "ltr",
  Orya: "ltr",
  Guru: "ltr",
  Olck: "ltr",
  Sinh: "ltr",
  Taml: "ltr",
  Telu: "ltr",
  Thai: "ltr",
  Tibt: "ltr",
};

/**
 * Gets the {@link ScriptDirection} from a {@link ScriptCode}
 * @param script a {@link ScriptCode}
 * @returns the {@link ScriptDirection} from the {@link ScriptCode}
 */
export function getScriptDirection(script: ScriptCode): ScriptDirection 
{
	return SCRIPT_DIRECTION[script];
}

/**
 * Gets the {@link ScriptDirection} from the {@link ScriptCode} of a {@link LangScriptCode}
 * @param script a {@link LangScriptCode}
 * @returns the {@link ScriptDirection} from the {@link ScriptCode} of a {@link LangScriptCode}
 */
export function getLangScriptDirection(langScript: LangScriptCode): ScriptDirection
{
	const script = getScriptCode(langScript);
	return getScriptDirection(script);
}