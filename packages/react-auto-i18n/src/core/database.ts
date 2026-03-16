import { LangScriptCode } from "."

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
 * The interface for a database 
 */
export interface I18nDatabase
{
    get(lang: LangScriptCode, key: string): string[] | string | undefined;
    langs(): LangScriptCode[]
    addOnChangeListener(listener: (db: CachedI18nDb) => void): void,
    removeOnChangeListener(listener: (db: CachedI18nDb) => void): boolean
}

export class RawI18nDb implements I18nDatabase
{
    private readonly db: I18nDatabaseType

    public constructor(db: I18nDatabaseType)
    {
        this.db = db;
    }
    addOnChangeListener(listener: (db: CachedI18nDb) => void): void {}
    removeOnChangeListener(listener: (db: CachedI18nDb) => void): boolean { return false }

    public static async load(path: string): Promise<RawI18nDb>
    {
        const res = await fetch(path)
        const json = await res.text()
        const db = JSON.parse(json) as I18nDatabaseType
        return new RawI18nDb(db)
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

export class CachedI18nDb implements I18nDatabase
{
    private readonly supportedLangs: LangScriptCode[];
    private readonly db: Partial<Record<LangScriptCode, LanguageTranslations>>
    private readonly path: string;
    private onChangedListeners: ((db: CachedI18nDb) => void)[]

    public constructor(path: string, langs: LangScriptCode[])
    {
        this.path = path;
        this.supportedLangs = langs;
        this.db = {}
        this.onChangedListeners = [];
    }

    public static async load(folder: string): Promise<CachedI18nDb>
    {
        const manifestPath = folder + "/" + FOLDER_LANGUAGE_MANIFEST_NAME
        const registered = await fetch(manifestPath)
            .then(f => f.text())
            .then(t => JSON.parse(t) as FolderLanguageManifestType);

        return new CachedI18nDb(folder, registered.langs);
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

    public addOnChangeListener(listener: (db: CachedI18nDb) => void)
    {
        this.onChangedListeners.push(listener);
    }

    public removeOnChangeListener(listener: (db: CachedI18nDb) => void): boolean
    {
        const len = this.onChangedListeners.length;
        this.onChangedListeners = this.onChangedListeners.filter(l => l !== listener);
        return len !== this.onChangedListeners.length;
    }

    private invokeOnChangeListeners()
    {
        this.onChangedListeners.forEach(l => {
            l(this);
        })
    }
}

export const I18nDatabaseDefault: I18nDatabase = { 
    get: () => undefined, 
    langs: () => [], 
    addOnChangeListener: () => {}, 
    removeOnChangeListener: () => false, 
}