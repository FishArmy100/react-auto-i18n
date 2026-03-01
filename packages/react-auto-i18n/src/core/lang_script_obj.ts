import CountryFlag from "../components/CountryFlag";
import { CountryCode, getCountryCode, getEnglishLangName, getLangCode, getLocaleLangName, getScriptCode, LangCode, LangScriptCode, ScriptCode } from "./index";

/**
 * A helper wrapper object for the `LangScriptCode`, providing basic functions in an OOP style.
 */
export class LangScriptObj
{
    /**
     * The inner wrapped `LangScriptCode`
     */
    public readonly code: LangScriptCode;

    public constructor(code: LangScriptCode)
    {
        this.code = code;
    }

    /**
     * A helper function for getting the `LangCode` for the wrapped `LangScriptCode`
     * @returns The `LangCode` for the wrapped `LangScriptCode`
     */
    public getLangCode(): LangCode
    {
        return getLangCode(this.code)
    }

    /**
     * A helper function for getting the `ScriptCode` for the wrapped `LangScriptCode`
     * @returns The `ScriptCode` for the wrapped `LangScriptCode`
     */
    public getScriptCode(): ScriptCode
    {
        return getScriptCode(this.code);
    }

    /**
     * A helper function for getting the english name for the wrapped `LangScriptCode`
     * @returns The `LangCode` for the wrapped `LangScriptCode`
     */
    public getName(): string | null
    {
        return getLocaleLangName(this.getLangCode());
    }

    /**
     * A helper function for getting the local name for the wrapped `LangScriptCode`
     * @returns The `LangCode` for the wrapped `LangScriptCode`
     */
    public getEnglishName(): string | null
    {
        return getEnglishLangName(this.getLangCode());
    }

    public getCountry(): CountryCode | null
    {
        return getCountryCode(this.getLangCode());
    }

    public getCountryFlag(): React.ReactElement | null
    {
        let country = this.getCountry();
        return country ? CountryFlag({ country }) : null
    }
}