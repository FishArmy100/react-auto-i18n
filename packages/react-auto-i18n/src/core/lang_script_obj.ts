import { CountryFlag } from "../components";
import { CountryCode, getCountryCode, getEnglishLangName, getLangCode, getLocaleLangName, getScriptCode, getScriptDirection, LangCode, LangScriptCode, ScriptCode, ScriptDirection } from "./index";

/**
 * A helper wrapper object for the {@link LangScriptCode}, providing basic functions in an OOP style.
 */
export class LangScriptObj
{
    /**
     * The inner wrapped {@link LangScriptCode}
     */
    public readonly code: LangScriptCode;

    public constructor(code: LangScriptCode)
    {
        this.code = code;
    }

    /**
     * A helper function for getting the {@link LangCode} for the wrapped {@link LangScriptCode}
     * @returns The {@link LangCode} for the wrapped {@link LangScriptCode}
     */
    public getLangCode(): LangCode
    {
        return getLangCode(this.code)
    }

    /**
     * A helper function for getting the {@link ScriptCode} for the wrapped {@link LangScriptCode}
     * @returns The {@link ScriptCode} for the wrapped {@link LangScriptCode}
     */
    public getScriptCode(): ScriptCode
    {
        return getScriptCode(this.code);
    }

    /**
     * A helper function for getting the locale name for the wrapped {@link LangScriptCode}
     * @returns The {@link LangCode} for the wrapped {@link LangScriptCode}
     */
    public getName(): string | null
    {
        return getLocaleLangName(this.getLangCode());
    }

    /**
     * A helper function for getting the english name for the wrapped {@link LangScriptCode}
     * @returns The {@link LangCode} for the wrapped {@link LangScriptCode}
     */
    public getEnglishName(): string | null
    {
        return getEnglishLangName(this.getLangCode());
    }

    /**
     * A helper function for getting the {@link CountryCode} most associated with this {@link LangScriptCode}, or `null` if there is none
     * @returns the {@link CountryCode} most associated with this `LangScriptCode, or `null` if there is none
     */
    public getCountry(): CountryCode | null
    {
        return getCountryCode(this.getLangCode());
    }

    /**
     * A helper function that invokes the {@link CountryFlag} component, with the country code most associated with this {@link LangScriptCode}, or null if there is none
     * @returns the {@link CountryFlag} component, with the country code most associated with this {@link LangScriptCode}, or null if there is none
     */
    public getCountryFlag(): React.ReactElement | null
    {
        let country = this.getCountry();
        return country ? CountryFlag({ country }) : null
    }

    /**
     * A helper function for getting the {@link ScriptDirection} for wrapped {@link LangScriptCode}
     * @returns the {@link ScriptDirection} for wrapped {@link LangScriptCode}
     */
    public getScriptDirection(): ScriptDirection
    {
        const script = this.getScriptCode();
        return getScriptDirection(script);
    }
}