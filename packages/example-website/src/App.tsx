import { Box, Chip, Divider, Paper, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import type React from 'react';
import { useMemo, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {
	__t,
	__tv,
	LangScriptObj,
	formatLangScriptCode,
	getCountryCode,
	getEnglishLangName,
	getLangCode,
	getLocaleLangName,
	getScriptCode,
	stringToLangCode,
	stringToLangScriptCode,
	stringToScriptCode,
	useI18n,
} from 'react-auto-i18n';

function CodeBlock({ code, label }: { code: string; label?: string }) {
	return (
		<Box sx={{ borderRadius: 2, overflow: 'hidden', fontSize: '0.85rem' }}>
			{label && (
				<Box sx={{ px: 2, py: 0.5, background: '#1e1e1e', borderBottom: '1px solid #333' }}>
					<Typography variant="caption" sx={{ color: '#888', fontFamily: 'monospace' }}>{label}</Typography>
				</Box>
			)}
			<SyntaxHighlighter
				language="tsx"
				style={vscDarkPlus}
				customStyle={{ margin: 0, borderRadius: 0, fontSize: 'inherit' }}
			>
				{code}
			</SyntaxHighlighter>
		</Box>
	);
}

export default function App(): React.ReactElement {
	const [appleCount, setAppleCount] = useState(0);
	const [liked, setLiked] = useState(false);

	const i18n = useI18n();
	const direction = i18n.getLocaleObj().getScriptDirection();

	// --- Translated strings ---
	const heading         = useMemo(() => __t("heading",       "Welcome to the translation demo!"),                    [i18n]);
	const subheading      = useMemo(() => __t("subheading",    "This app showcases the {{'react-auto-i18n'}} library."),[i18n]);
	const localeInfoTitle = useMemo(() => __t("locale.title",  "Current Locale"),                                      [i18n]);
	const switchTitle     = useMemo(() => __t("switch.title",  "Switch Language"),                                     [i18n]);
	const counterTitle    = useMemo(() => __t("counter.title", "Apple Counter"),                                       [i18n]);
	const examplesTitle   = useMemo(() => __t("examples.title","Code Examples"),                                       [i18n]);
	const likeBtn         = useMemo(() => liked
		? __t("btn.liked", "You liked this! ❤️")
		: __t("btn.like",  "Like this demo ♡"),                                                                          [i18n, liked]);
	const footerNote      = useMemo(() => __t("footer.note",   "All text on this page is translated automatically."),  [i18n]);

	const apples = useMemo(() => __tv("apples.count", [
		["You have one apple 🍎",         ({ count }) => count === 1],
		["You have {{$count}} apples 🍎", ({ count }) => count > 1],
		"You have no apples 🍏"
	], { count: appleCount }), [appleCount, i18n]);

	const applePrompt = useMemo(() => __tv("apples.prompt", [
		["That's a lot of apples!",  ({ count }) => count >= 10],
		["Keep going!",              ({ count }) => count >= 5],
		"Add some apples below."
	], { count: appleCount }), [appleCount, i18n]);

	// --- Locale introspection ---
	const lang        = i18n.getLocaleObj();
	const rawCode     = i18n.locale;
	const langCode    = getLangCode(rawCode);
	const scriptCode  = getScriptCode(rawCode);
	const countryCode = getCountryCode(langCode);
	const englishName = getEnglishLangName(langCode);
	const localeName  = getLocaleLangName(langCode);

	const parsedLangScript = stringToLangScriptCode(rawCode);
	const parsedLang       = stringToLangCode(langCode);
	const parsedScript     = stringToScriptCode(scriptCode);
	const reconstructed    = parsedLang && parsedScript
		? formatLangScriptCode(parsedLang, parsedScript)
		: null;

	// --- Code examples (dynamic, reflecting current locale) ---
	const exampleBasic = `\
// Basic translation with escape codes
const text = __t(
  "subheading",
  "This app showcases the {{'react-auto-i18n'}} library."
);
// → "${subheading}"`;

	const exampleVariants = `\
// Variant translation with variable substitution
const apples = __tv("apples.count", [
  ["You have one apple 🍎",         ({ count }) => count === 1],
  ["You have {{$count}} apples 🍎", ({ count }) => count > 1],
  "You have no apples 🍏"
], { count: ${appleCount} });
// → "${apples}"`;

	const exampleLocale = `\
// Introspecting the current locale
const lang        = i18n.getLocaleObj();   // LangScriptObj wrapper
const rawCode     = i18n.locale;           // "${rawCode}"
const langCode    = getLangCode(rawCode);  // "${langCode}"
const scriptCode  = getScriptCode(rawCode);// "${scriptCode}"
const countryCode = getCountryCode(langCode); // ${countryCode ? `"${countryCode}"` : 'null'}
const englishName = getEnglishLangName(langCode); // ${englishName ? `"${englishName}"` : 'null'}
const localeName  = getLocaleLangName(langCode);  // ${localeName ? `"${localeName}"` : 'null'}`;

	const exampleValidation = `\
// Safely parsing & validating raw strings
stringToLangScriptCode("${rawCode}")  // → "${parsedLangScript ?? 'null'}"
stringToLangCode("${langCode}")        // → "${parsedLang ?? 'null'}"
stringToScriptCode("${scriptCode}")    // → "${parsedScript ?? 'null'}"
stringToLangScriptCode("not-valid")   // → null

// Reconstructing a LangScriptCode from its parts
formatLangScriptCode("${langCode}", "${scriptCode}") // → "${reconstructed ?? 'null'}"`;

	const exampleSwitcher = `\
// Building a language switcher from the loaded database
i18n.getLocales().map(l => {
  const obj   = new LangScriptObj(l);
  const label = obj.getName() ?? obj.getEnglishName() ?? l;
  const flag  = obj.getCountryFlag();
  return <Button onClick={() => i18n.setLocale(l)}>{flag} {label}</Button>;
});`;

	return (
		<div dir={direction}>
			<Box
			
				sx={{ p: 3, maxWidth: 860, mx: 'auto', display: 'flex', flexDirection: 'column', gap: 3 }}
			>
				{/* Header */}
				<Paper elevation={3} sx={{ p: 3, borderRadius: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
					<Typography variant="h4" fontWeight="bold">{heading}</Typography>
					<Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.9 }}>{subheading}</Typography>
					<Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
						{lang.getCountryFlag()}
						<Typography variant="body2" sx={{ opacity: 0.85 }}>
							{localeName ?? englishName ?? rawCode}
							{englishName && localeName && localeName !== englishName && ` · ${englishName}`}
						</Typography>
					</Box>
				</Paper>
			
				  {/* Language Switcher */}
				<Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
					<Typography variant="h6" fontWeight="bold" gutterBottom>{switchTitle}</Typography>
					<Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
						{i18n.getLocales().map(l => {
							const obj = new LangScriptObj(l);
							const label = obj.getName() ?? obj.getEnglishName() ?? l;
							return (
								<Button
									key={l}
									variant={i18n.locale === l ? 'contained' : 'outlined'}
									onClick={() => i18n.setLocale(l)}
									startIcon={obj.getCountryFlag()}
									size="small"
									sx={{ gap: direction === "rtl" ? 1 : 0 }}
								>
									{label}
								</Button>
							);
						})}
					</Box>
				</Paper>
			
				  <Divider />
				{/* Apple Counter */}
				<Paper elevation={2} sx={{ p: 3, borderRadius: 3 }}>
					<Typography variant="h6" fontWeight="bold" gutterBottom>{counterTitle}</Typography>
					<Typography variant="body2" color="text.secondary" gutterBottom>{applePrompt}</Typography>
					<Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
						{direction === 'rtl' ? (
							<>
								<Button variant="outlined" size="large" onClick={() => setAppleCount(c => c + 1)}>+</Button>
								<Typography variant="h6" sx={{ minWidth: 220, textAlign: 'center' }}>{apples}</Typography>
								<Button variant="outlined" size="large" onClick={() => setAppleCount(c => Math.max(0, c - 1))}>−</Button>
							</>
						) : (
							<>
								<Button variant="outlined" size="large" onClick={() => setAppleCount(c => Math.max(0, c - 1))}>−</Button>
								<Typography variant="h6" sx={{ minWidth: 220, textAlign: 'center' }}>{apples}</Typography>
								<Button variant="outlined" size="large" onClick={() => setAppleCount(c => c + 1)}>+</Button>
							</>
						)}
					</Box>
				</Paper>
				{/* Locale Info */}
				<Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
					<Typography variant="h6" fontWeight="bold" gutterBottom>{localeInfoTitle}</Typography>
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
						<Chip label={`code: ${rawCode}`} />
						<Chip label={`lang: ${langCode}`} />
						<Chip label={`script: ${scriptCode}`} />
						<Chip
							label={`country: ${countryCode}`}
							icon={<span>{lang.getCountryFlag()}</span>}
							sx={{ pl: direction === 'rtl' ? 0 : 1, pr: direction === 'rtl' ? 1 : 0 }}
						/>
						{englishName  && <Chip label={`english: ${englishName}`} />}
						{localeName   && <Chip label={`native: ${localeName}`} />}
					</Box>
				</Paper>
				{/* Like button */}
				<Box sx={{ display: 'flex', justifyContent: 'center' }}>
					<Button
						variant={liked ? 'contained' : 'outlined'}
						color="secondary"
						size="large"
						onClick={() => setLiked(l => !l)}
						sx={{ borderRadius: 5, px: 4 }}
					>
						{likeBtn}
					</Button>
				</Box>
				<Divider />
				{/* Code Examples */}
				<Paper elevation={1} sx={{ p: 3, borderRadius: 3 }}>
					<Typography variant="h6" fontWeight="bold" gutterBottom>{examplesTitle}</Typography>
					<Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
						<CodeBlock label="__t() — basic translation" code={exampleBasic} />
						<CodeBlock label="__tv() — variant translation with variables" code={exampleVariants} />
						<CodeBlock label="Locale introspection" code={exampleLocale} />
						<CodeBlock label="Validation & formatting helpers" code={exampleValidation} />
						<CodeBlock label="Language switcher" code={exampleSwitcher} />
					</Box>
				</Paper>
				{/* Footer */}
				<Typography variant="caption" color="text.secondary" textAlign="center">
					{footerNote}
				</Typography>
			</Box>
		</div>
	);
}