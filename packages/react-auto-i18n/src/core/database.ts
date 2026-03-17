import { LangScriptCode } from "."
import { __t } from "../i18n";

/**
 * Essentially represents all translations loaded for this application. It can be represented in JSON as:
 * ```json
 * {
 *      "eng_Latn": {
 *          "main.first": "...",
 *          "main.second": "...",
 *          ...
 *      },
 *      "fra_Latn": {
 *          "main.first": "...",
 *          "main.second": "...",
 *          ...
 *      },
 *      "spa_Latn": {
 *          "main.first": "...",
 *          "main.second": "...",
 *          ...
 *      },
 *      ...
 * }
 * ```
 */
export type I18nDatabaseType = Partial<Readonly<Record<LangScriptCode, LanguageTranslations>>>

/**
 * A map that contains translations for all keys for a given language.
 */
export type LanguageTranslations = Partial<Readonly<Record<string, string | string[]>>>

/**
 * The interface for a translation database
 */
export interface I18nDatabase
{
    /**
     * Gets the translation for a given language and key
     * @param lang A {@link LangScriptCode}
     * @param key A key for the given translation in the specified language
     * @returns Either a single translation (for {@link __t}), multiple translations (for {@link __tv}), or `undefined` if there is no translations
     */
    get(lang: LangScriptCode, key: string): string[] | string | undefined;

    /**
     * @returns All the {@link LangScriptCode}'s that the database contains
     */
    langs(): LangScriptCode[]

    /**
     * Allows the user to add a listener to see if the internal state of the database has changed. This can be used for things like caching
     * @param listener 
     */
    addOnChangeListener(listener: () => void): void,

    /**
     * Allows the user to remove a listener that would fire if the internal state of the database has changed. This can be used for things like caching
     * @param listener 
     */
    removeOnChangeListener(listener: () => void): boolean,
}

/**
 * A basic wrapper around the {@link I18nDatabaseType} which implements {@link I18nDatabase}. It also gives some helper functions for loading it from a file.
 */
export class SimpleI18nDb implements I18nDatabase
{
    private readonly db: I18nDatabaseType

    public constructor(db: I18nDatabaseType)
    {
        this.db = db;
    }

    addOnChangeListener(): void {}
    removeOnChangeListener(): boolean { return false }

    /**
     * Creates a {@link SimpleI18nDb} from a file. The file the path points to must be in the format of {@link I18nDatabaseType}
     * @param path The path of the database file.
     * @returns 
     */
    public static async load(path: string): Promise<SimpleI18nDb>
    {
        const res = await fetch(path)
        const json = await res.text()
        const db = JSON.parse(json) as I18nDatabaseType
        return new SimpleI18nDb(db)
    }

    public get(lang: LangScriptCode, key: string): string[] | string | undefined 
    {
        return this.db[lang]?.[key]
    }

    public langs(): LangScriptCode[] 
    {
        return Object.keys(this.db).map(k => k as LangScriptCode);
    }
}

export const FOLDER_LANGUAGE_MANIFEST_NAME: string = "manifest.json"
export type FolderLanguageManifestType = { langs: LangScriptCode[] }

/**
 * A cached database, which will only load languages if necessary. 
 */
export class CachedMultiFileI18nDb implements I18nDatabase
{
    private readonly supportedLangs: LangScriptCode[];
    private readonly db: Partial<Record<LangScriptCode, LanguageTranslations>>
    private readonly path: string;
    private onChangedListeners: (() => void)[]

    /**
     * @param path The folder path which contains all multiple files of type {@link LanguageTranslations} and each must be named using {@link LangScriptCode} followed by a `.json`
     * @param langs Represents all of the languages that the translation folder contains. Essentially, if the folder has a file for a given language, add that language here.
     */
    public constructor(path: string, langs: LangScriptCode[])
    {
        this.path = path;
        this.supportedLangs = langs;
        this.db = {}
        this.onChangedListeners = [];
    }
    
    /**
     * Creates a {@link CachedMultiFileI18nDb} from a folder path.
     * The folder path which contains all multiple files of type {@link LanguageTranslations}, and each must be named using {@link LangScriptCode} followed by a `.json`. 
     * It needs to point to a folder inside of the `public` folder, and the folder must contain a `manifest.json` file of the format {@link FolderLanguageManifestType}
     */
    public static async load(folder: string): Promise<CachedMultiFileI18nDb>
    {
        const manifestPath = folder + "/" + FOLDER_LANGUAGE_MANIFEST_NAME
        const registered = await fetch(manifestPath)
            .then(f => f.text())
            .then(t => JSON.parse(t) as FolderLanguageManifestType);

        return new CachedMultiFileI18nDb(folder, registered.langs);
    }

    public get(lang: LangScriptCode, key: string): string[] | string | undefined 
    {
        if (!this.supportedLangs.includes(lang))
        {
            return undefined;
        }

        if (this.db[lang] === undefined)
        {
            const filePath = this.path + "/" + `${lang}.json`;
            fetch(filePath)
                .then(f => f.text())
                .then(t => JSON.parse(t) as LanguageTranslations)
                .then(translations => {
                    this.db[lang] = translations;
                    this.invokeOnChangeListeners();
                })

            return undefined;
        }
        
        return this.db[lang]?.[key]
    }

    public langs(): LangScriptCode[] 
    {
        return this.supportedLangs;
    }

    public addOnChangeListener(listener: () => void)
    {
        this.onChangedListeners.push(listener);
    }

    public removeOnChangeListener(listener: () => void): boolean
    {
        const len = this.onChangedListeners.length;
        this.onChangedListeners = this.onChangedListeners.filter(l => l !== listener);
        return len !== this.onChangedListeners.length;
    }

    private invokeOnChangeListeners()
    {
        this.onChangedListeners.forEach(l => {
            l();
        })
    }
}

/**
 * The default (empty) {@link I18nDatabase}. 
 */
export const I18nDatabaseDefault: I18nDatabase = { 
    get: () => undefined, 
    langs: () => [], 
    addOnChangeListener: () => {}, 
    removeOnChangeListener: () => false, 
}