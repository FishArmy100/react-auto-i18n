import type React from 'react';
import { useMemo, useState, useEffect, useRef } from 'react';
import {
  __t, __tv, useI18n, LangScriptObj,
  getLangCode, getScriptCode, getEnglishLangName, getLocaleLangName,
  getCountryCode, stringToLangCode, stringToLangScriptCode, stringToScriptCode,
  formatLangScriptCode, LANG_SCRIPT_CODES, LANG_CODES, SCRIPT_CODES,
  type LangScriptCode,
} from 'react-auto-i18n';

// ─── Fonts ───────────────────────────────────────────────────────────────────
const FontLoader = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Newsreader:ital,wght@0,400;1,300;1,500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, []);
  return null;
};

// ─── Syntax highlighting ─────────────────────────────────────────────────────
type TokenType = 'keyword' | 'string' | 'comment' | 'function' | 'variable' | 'operator' | 'plain';

interface Token {
  type: TokenType;
  value: string;
}

const TOKEN_COLORS: Record<TokenType, string> = {
  keyword:  '#ff7b72',
  string:   '#a5d6ff',
  comment:  '#8b949e',
  function: '#d2a8ff',
  variable: '#ffa657',
  operator: '#79c0ff',
  plain:    '#c9d1d9',
};

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  let remaining = code;

  while (remaining.length > 0) {
    // Comment
    const commentMatch = remaining.match(/^(\/\/.*)(\n|$)/);
    if (commentMatch) {
      tokens.push({ type: 'comment', value: commentMatch[1] });
      remaining = remaining.slice(commentMatch[1].length);
      continue;
    }

    // Multi-line comment or line starting with //
    const blockCommentMatch = remaining.match(/^(\/\*[\s\S]*?\*\/)/);
    if (blockCommentMatch) {
      tokens.push({ type: 'comment', value: blockCommentMatch[1] });
      remaining = remaining.slice(blockCommentMatch[1].length);
      continue;
    }

    // String (double-quoted, single-quoted, or template literal)
    const stringMatch = remaining.match(/^("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/);
    if (stringMatch) {
      tokens.push({ type: 'string', value: stringMatch[1] });
      remaining = remaining.slice(stringMatch[1].length);
      continue;
    }

    // Keywords
    const keywordMatch = remaining.match(/^(import|export|from|const|let|var|function|return|default|new|type|interface|=>|async|await|if|else|true|false|null|undefined)\b/);
    if (keywordMatch) {
      tokens.push({ type: 'keyword', value: keywordMatch[1] });
      remaining = remaining.slice(keywordMatch[1].length);
      continue;
    }

    // Function call or definition (word followed by '(')
    const funcMatch = remaining.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)(?=\s*\()/);
    if (funcMatch) {
      tokens.push({ type: 'function', value: funcMatch[1] });
      remaining = remaining.slice(funcMatch[1].length);
      continue;
    }

    // Variable / identifier
    const identMatch = remaining.match(/^([a-zA-Z_$][a-zA-Z0-9_$]*)/);
    if (identMatch) {
      tokens.push({ type: 'variable', value: identMatch[1] });
      remaining = remaining.slice(identMatch[1].length);
      continue;
    }

    // Operators and punctuation
    const opMatch = remaining.match(/^([=<>!&|+\-*/%:;,.\[\]{}()])/);
    if (opMatch) {
      tokens.push({ type: 'operator', value: opMatch[1] });
      remaining = remaining.slice(opMatch[1].length);
      continue;
    }

    // Anything else (whitespace, newlines, numbers, etc.)
    tokens.push({ type: 'plain', value: remaining[0] });
    remaining = remaining.slice(1);
  }

  return tokens;
}

function HighlightedCode({ code }: { code: string }) {
  const tokens = useMemo(() => tokenize(code.trim()), [code]);
  return (
    <pre style={{ margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
      {tokens.map((token, i) => (
        <span key={i} style={{ color: TOKEN_COLORS[token.type] }}>
          {token.value}
        </span>
      ))}
    </pre>
  );
}

// ─── Animated counter ────────────────────────────────────────────────────────
function AnimatedNumber({ value }: { value: number }) {
  const [display, setDisplay] = useState(value);
  const prev = useRef(value);
  useEffect(() => {
    if (prev.current === value) return;
    const dir = value > prev.current ? 1 : -1;
    let cur = prev.current;
    const step = () => {
      cur += dir;
      setDisplay(cur);
      if (cur !== value) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
    prev.current = value;
  }, [value]);
  return <span>{display}</span>;
}

// ─── Code block ──────────────────────────────────────────────────────────────
function CodeBlock({ children }: { children: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard?.writeText(children.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div style={{
      position: 'relative',
      background: '#0d1117',
      borderRadius: 10,
      padding: '14px 16px',
      fontFamily: '"DM Mono", monospace',
      fontSize: 12.5,
      lineHeight: 1.75,
      color: '#c9d1d9',
      overflowX: 'auto',
      marginTop: 12,
    }}>
      <button onClick={copy} style={{
        position: 'absolute', top: 10, right: 10,
        background: copied ? '#238636' : '#21262d',
        color: copied ? '#fff' : '#8b949e',
        border: '1px solid #30363d',
        borderRadius: 6, padding: '2px 10px', fontSize: 11,
        cursor: 'pointer', fontFamily: '"DM Mono", monospace',
        transition: 'all 0.2s',
      }}>
        {copied ? '✓ copied' : 'copy'}
      </button>
      <HighlightedCode code={children} />
    </div>
  );
}

// ─── Card ─────────────────────────────────────────────────────────────────────
function Card({ children, accent }: { children: React.ReactNode; accent?: string }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: 18,
      padding: '28px 30px',
      border: '1.5px solid #e8e4f0',
      boxShadow: '0 2px 20px rgba(108,43,217,0.05)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {accent && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 3,
          background: accent,
        }} />
      )}
      {children}
    </div>
  );
}

// ─── Label ────────────────────────────────────────────────────────────────────
function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      fontFamily: '"DM Mono", monospace',
      fontSize: 10.5, letterSpacing: 2.5,
      textTransform: 'uppercase', color: '#9e8fb5',
      margin: '0 0 12px 0',
    }}>{children}</p>
  );
}

// ─── Tag ─────────────────────────────────────────────────────────────────────
function Tag({ children, color = 'purple' }: { children: React.ReactNode; color?: 'purple' | 'green' | 'red' | 'blue' }) {
  const palette = {
    purple: { bg: '#f3f0ff', fg: '#6c2bd9' },
    green:  { bg: '#f0fdf4', fg: '#166534' },
    red:    { bg: '#fff1f2', fg: '#9f1239' },
    blue:   { bg: '#eff6ff', fg: '#1d4ed8' },
  }[color];
  return (
    <span style={{
      display: 'inline-block', background: palette.bg, color: palette.fg,
      borderRadius: 6, padding: '2px 9px',
      fontSize: 11.5, fontFamily: '"DM Mono", monospace',
    }}>{children}</span>
  );
}

// ─── Script badge ─────────────────────────────────────────────────────────────
const SCRIPT_COLORS: Record<string, [string, string]> = {
  Latn: ['#e8f5e9','#2e7d32'], Arab: ['#fff3e0','#e65100'],
  Cyrl: ['#e3f2fd','#1565c0'], Hans: ['#fce4ec','#880e4f'],
  Hant: ['#fce4ec','#c2185b'], Deva: ['#f3e5f5','#6a1b9a'],
  Jpan: ['#fff8e1','#f57f17'], Hang: ['#e0f7fa','#006064'],
  Tibt: ['#ede7f6','#4527a0'], Hebr: ['#fafafa','#37474f'],
  Grek: ['#e8eaf6','#283593'],
};
function ScriptBadge({ script }: { script: string }) {
  const [bg, fg] = SCRIPT_COLORS[script] ?? ['#f5f5f5','#616161'];
  return (
    <span style={{
      background: bg, color: fg,
      fontFamily: '"DM Mono", monospace', fontSize: 11, fontWeight: 600,
      padding: '2px 8px', borderRadius: 5,
    }}>{script}</span>
  );
}

// ─── Lang pill ────────────────────────────────────────────────────────────────
function LangPill({ code, active, onClick }: { code: LangScriptCode; active: boolean; onClick: () => void }) {
  const obj = new LangScriptObj(code);
  const flag = obj.getCountryFlag();
  const name = obj.getEnglishName() ?? obj.getLangCode();
  return (
    <button
      onClick={onClick}
      title={code}
      style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '6px 14px', borderRadius: 999,
        border: active ? '2px solid #6c2bd9' : '1.5px solid #e4dff0',
        background: active ? '#f3f0ff' : '#fafafa',
        color: active ? '#6c2bd9' : '#555',
        fontFamily: '"Syne", sans-serif',
        fontWeight: active ? 700 : 500, fontSize: 13,
        cursor: 'pointer', transition: 'all 0.15s',
        whiteSpace: 'nowrap',
      }}
    >
      {flag && <span style={{ fontSize: 16 }}>{flag}</span>}
      {name}
      <span style={{
        fontFamily: '"DM Mono", monospace', fontSize: 10,
        color: active ? '#9d66e8' : '#bbb',
      }}>{code}</span>
    </button>
  );
}

// ─── API table row ────────────────────────────────────────────────────────────
function ApiRow({ fn, desc }: { fn: string; desc: string }) {
  return (
    <div style={{
      display: 'grid', gridTemplateColumns: '260px 1fr',
      gap: 16, padding: '13px 0', borderBottom: '1px solid #f0edf8',
      alignItems: 'start',
    }}>
      <code style={{
        fontFamily: '"DM Mono", monospace', fontSize: 12,
        color: '#6c2bd9', background: '#f3f0ff',
        padding: '4px 8px', borderRadius: 6, display: 'inline-block',
        lineHeight: 1.6,
        wordBreak: 'break-all',
      }}>{fn}</code>
      <span style={{ fontSize: 13.5, color: '#5a5068', lineHeight: 1.7 }}>{desc}</span>
    </div>
  );
}

// ─── Main ────────────────────────────────────────────────────────────────────
export default function App(): React.ReactElement {
  const [appleCount, setAppleCount] = useState(3);
  const [rawInput, setRawInput] = useState('eng_Latn');
  const [escapeOn, setEscapeOn] = useState(true);
  const i18n = useI18n();
  const localeObj = i18n.getLocaleObj();
  const available = i18n.getLocales();

  const greeting = useMemo(
    () => __t('app.greeting', "Hello! Welcome to the {{'react-auto-i18n'}} showcase."),
    [i18n.locale],
  );
  const escapedMsg = useMemo(
    () => escapeOn
      ? __t('app.escape_on',  "This library is called {{'react-auto-i18n'}} — notice the name stays unchanged.")
      : __t('app.escape_off', "This library is called react-auto-i18n — this name will be translated too."),
    [i18n.locale, escapeOn],
  );
  const appleMsg = useMemo(
    () => __tv('app.apples', [
      ['You have one apple.',         ({ count }) => count === 1],
      ['You have {{$count}} apples.', ({ count }) => count > 1],
      'You have no apples.',
    ], { count: appleCount }),
    [appleCount, i18n.locale],
  );

  const langCode   = localeObj.getLangCode();
  const scriptCode = localeObj.getScriptCode();
  const englishName = localeObj.getEnglishName();
  const localName   = getLocaleLangName(langCode);
  const countryCode = localeObj.getCountry();

  // string validation
  const parsedLS  = stringToLangScriptCode(rawInput);
  const parsedL   = stringToLangCode(rawInput.split('_')[0] ?? '');
  const parsedS   = stringToScriptCode(rawInput.split('_')[1] ?? '');

  // script distribution
  const scriptCounts: Record<string, number> = {};
  for (const code of available) {
    const s = getScriptCode(code);
    scriptCounts[s] = (scriptCounts[s] ?? 0) + 1;
  }
  const scriptSorted = Object.entries(scriptCounts).sort((a, b) => b[1] - a[1]);

  return (
    <>
      <FontLoader />
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(155deg, #faf9ff 0%, #ede8ff 40%, #faf7ff 75%, #fff 100%)',
        fontFamily: '"Syne", sans-serif',
        padding: '40px 20px 100px',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 22 }}>

          {/* ── Hero ── */}
          <div style={{ textAlign: 'center', padding: '16px 0 12px' }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#f3f0ff', borderRadius: 999,
              padding: '5px 16px', marginBottom: 18,
            }}>
              <span style={{ fontSize: 16 }}>🌐</span>
              <code style={{ fontFamily: '"DM Mono", monospace', fontSize: 12, color: '#6c2bd9', letterSpacing: 1 }}>
                react-auto-i18n
              </code>
            </div>
            <h1 style={{
              fontFamily: '"Syne", sans-serif', fontWeight: 800,
              fontSize: 'clamp(34px, 7vw, 58px)', margin: '0 0 14px', lineHeight: 1.12,
              background: 'linear-gradient(135deg, #1a0533 20%, #7c3aed 80%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              paddingBottom: 4,
            }}>
              Automatic i18n<br />for React
            </h1>
            <p style={{
              fontFamily: '"Newsreader", serif', fontStyle: 'italic',
              fontSize: 18, color: '#7c6d8a', margin: 0,
              maxWidth: 500, marginInline: 'auto', lineHeight: 1.6,
            }}>
              Write your strings once in English. The CLI generates a translation database
              for 200+ languages. The library handles the rest at runtime.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginTop: 20, flexWrap: 'wrap' }}>
              {[
                ['200+ locales', '#f3f0ff', '#6c2bd9'],
                ['Zero deps', '#f0fdf4', '#166534'],
                ['TypeScript-first', '#eff6ff', '#1d4ed8'],
                ['Tree-shakeable', '#fff7ed', '#c2410c'],
              ].map(([label, bg, fg]) => (
                <span key={label} style={{
                  background: bg, color: fg, fontWeight: 700, fontSize: 12.5,
                  padding: '4px 14px', borderRadius: 999,
                  fontFamily: '"DM Mono", monospace',
                }}>{label}</span>
              ))}
            </div>
          </div>

          {/* ── Active locale ── */}
          <Card accent="linear-gradient(90deg, #6c2bd9 0%, #a855f7 100%)">
            <Label>Active Locale — useI18n().locale</Label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
              <span style={{
                fontSize: 64,
                lineHeight: 1.2,
                display: 'block',
                filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))',
                minWidth: 72,
                textAlign: 'center',
              }}>
                {localeObj.getCountryFlag() ?? '🌐'}
              </span>
              <div style={{ flex: 1, minWidth: 160 }}>
                <div style={{ fontWeight: 800, fontSize: 26, color: '#1a0533', lineHeight: 1.2, marginBottom: 4 }}>
                  {englishName ?? langCode}
                </div>
                {localName && localName !== englishName && (
                  <div style={{
                    fontFamily: '"Newsreader", serif', fontStyle: 'italic',
                    fontSize: 16, color: '#9575cd', marginBottom: 2,
                  }}>{localName}</div>
                )}
                <div style={{ display: 'flex', gap: 8, marginTop: 10, flexWrap: 'wrap', alignItems: 'center' }}>
                  <Tag>{i18n.locale}</Tag>
                  <ScriptBadge script={scriptCode} />
                  {countryCode && <Tag color="blue">{countryCode}</Tag>}
                </div>
              </div>
              <div style={{
                textAlign: 'center', background: '#f3f0ff',
                borderRadius: 14, padding: '18px 28px',
                minWidth: 100,
              }}>
                <div style={{
                  fontSize: 11, color: '#9e8fb5',
                  fontFamily: '"DM Mono", monospace',
                  letterSpacing: 1, marginBottom: 8,
                  whiteSpace: 'nowrap',
                }}>
                  LOCALES LOADED
                </div>
                <div style={{
                  fontSize: 44, fontWeight: 800, color: '#6c2bd9',
                  lineHeight: 1, letterSpacing: -1,
                }}>
                  {available.length}
                </div>
              </div>
            </div>
          </Card>

          {/* ── Language switcher ── */}
          <Card>
            <Label>Language Switcher — setLocale()</Label>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {available.map(code => (
                <LangPill key={code} code={code} active={i18n.locale === code} onClick={() => i18n.setLocale(code)} />
              ))}
            </div>
            <CodeBlock>{`const i18n = useI18n();
// switch locale — all __t() / __tv() calls reactively update
i18n.setLocale("fra_Latn");`}</CodeBlock>
          </Card>

          {/* ── __t ── */}
          <Card accent="#6c2bd9">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
              <Label>__t() — Simple Translation</Label>
              <Tag>primary API</Tag>
            </div>
            <p style={{ fontSize: 17, color: '#1a0533', margin: '0 0 20px', lineHeight: 1.65, fontWeight: 500 }}>
              {greeting}
            </p>

            {/* Escape code toggle */}
            <div style={{
              background: '#fafafa', border: '1.5px solid #ebe8f5',
              borderRadius: 12, padding: '14px 16px', marginBottom: 4,
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10, flexWrap: 'wrap', gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#3b1d72' }}>
                  Escape code demo — <code style={{ fontFamily: '"DM Mono", monospace', fontSize: 12 }}>{`{{...}}`}</code>
                </span>
                <label style={{ display: 'flex', gap: 8, alignItems: 'center', cursor: 'pointer', fontSize: 13, color: '#555' }}>
                  <input type="checkbox" checked={escapeOn} onChange={e => setEscapeOn(e.target.checked)}
                    style={{ accentColor: '#6c2bd9', width: 15, height: 15 }} />
                  Protect with <code style={{ fontFamily: '"DM Mono", monospace', fontSize: 11 }}>{`{{...}}`}</code>
                </label>
              </div>
              <div style={{
                background: escapeOn ? '#f3f0ff' : '#fff8f0',
                border: `1.5px solid ${escapeOn ? '#d4baff' : '#ffd0a0'}`,
                borderRadius: 8, padding: '10px 14px',
                fontSize: 14.5, color: '#333', lineHeight: 1.6,
              }}>
                {escapedMsg}
              </div>
              <p style={{ fontSize: 12, color: '#aaa', margin: '8px 0 0', fontFamily: '"DM Mono", monospace' }}>
                {escapeOn ? '→ "react-auto-i18n" stays untouched by the translation engine' : '→ the library name may be translated'}
              </p>
            </div>
            <CodeBlock>{`// Basic usage
const msg = __t("key", "Hello there!");

// Escape code — content inside {{...}} is never translated
const msg = __t("key", "Welcome to {{'react-auto-i18n'}}!");

// With variable substitution via {{$var}}
const msg = __t("key", "Hello, {{$name}}!", { name: "Alice" });`}</CodeBlock>
          </Card>

          {/* ── __tv ── */}
          <Card accent="#a855f7">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, marginBottom: 4 }}>
              <Label>__tv() — Variant / Plural Translation</Label>
              <Tag>pluralisation</Tag>
            </div>
            <p style={{ fontSize: 13.5, color: '#888', margin: '0 0 16px', lineHeight: 1.7 }}>
              Provide an array of <em>[string, predicate]</em> pairs — the first matching one wins. The final string is the fallback.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 0,
                background: '#f3f0ff', borderRadius: 12, padding: 4,
              }}>
                <button
                  onClick={() => setAppleCount(c => Math.max(0, c - 1))}
                  disabled={appleCount === 0}
                  style={{
                    width: 44, height: 44, borderRadius: 9,
                    border: 'none', background: appleCount === 0 ? 'transparent' : '#fff',
                    boxShadow: appleCount === 0 ? 'none' : '0 1px 6px rgba(108,43,217,0.14)',
                    fontSize: 22, cursor: appleCount === 0 ? 'default' : 'pointer',
                    color: appleCount === 0 ? '#ccc' : '#6c2bd9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    lineHeight: 1,
                    transition: 'all 0.15s',
                  }}
                >−</button>
                <div style={{
                  width: 68, textAlign: 'center',
                  fontWeight: 800, fontSize: 28, color: '#6c2bd9',
                  lineHeight: 1, padding: '4px 0',
                }}>
                  <AnimatedNumber value={appleCount} />
                </div>
                <button
                  onClick={() => setAppleCount(c => c + 1)}
                  style={{
                    width: 44, height: 44, borderRadius: 9,
                    border: 'none', background: '#fff',
                    boxShadow: '0 1px 6px rgba(108,43,217,0.14)',
                    fontSize: 22, cursor: 'pointer', color: '#6c2bd9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    lineHeight: 1,
                    transition: 'all 0.15s',
                  }}
                >+</button>
              </div>
              <div style={{
                background: '#f3f0ff', border: '1.5px solid #d4baff',
                borderRadius: 10, padding: '12px 18px',
                fontSize: 17, color: '#3b1d72', fontWeight: 600,
                lineHeight: 1.5,
              }}>
                {appleMsg}
              </div>
            </div>
            <CodeBlock>{`const msg = __tv("app.apples", [
  ["You have one apple.",         ({ count }) => count === 1],
  ["You have {{$count}} apples.", ({ count }) => count > 1],
  "You have no apples.",   // fallback (no predicate)
], { count: appleCount });
// In Spanish (count=3): "Tienes 3 manzanas."`}</CodeBlock>
          </Card>

          {/* ── LangScriptObj inspector ── */}
          <Card>
            <Label>LangScriptObj — OOP Language Inspector</Label>
            <p style={{ fontSize: 13.5, color: '#888', margin: '0 0 16px', lineHeight: 1.7 }}>
              Instantiate from any <Tag>LangScriptCode</Tag> to access all language metadata.
              Values below reflect the current locale.
            </p>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(195px, 1fr))',
              gap: 10,
            }}>
              {[
                { method: '.getLangCode()',   value: langCode },
                { method: '.getScriptCode()', value: scriptCode },
                { method: '.getEnglishName()', value: englishName ?? '—' },
                { method: '.getName()',       value: localeObj.getName() ?? '—' },
                { method: '.getCountry()',    value: countryCode ?? '—' },
                { method: '.getCountryFlag()', value: localeObj.getCountryFlag() ?? '—' },
                { method: '.code',            value: i18n.locale },
              ].map(({ method, value }) => (
                <div key={method} style={{
                  background: '#faf9ff', border: '1.5px solid #ebe6f5',
                  borderRadius: 11, padding: '12px 14px',
                }}>
                  <code style={{
                    fontFamily: '"DM Mono", monospace', fontSize: 11,
                    color: '#6c2bd9', display: 'block', marginBottom: 6,
                  }}>{method}</code>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#1a0533', wordBreak: 'break-all', lineHeight: 1.5 }}>
                    {String(value)}
                  </div>
                </div>
              ))}
            </div>
            <CodeBlock>{`import { LangScriptObj } from 'react-auto-i18n';

const obj = new LangScriptObj("fra_Latn");
obj.code             // "fra_Latn"
obj.getLangCode()    // "fra"
obj.getScriptCode()  // "Latn"
obj.getEnglishName() // "French"
obj.getName()        // "Français"  — local name
obj.getCountry()     // "FR"
obj.getCountryFlag() // 🇫🇷`}</CodeBlock>
          </Card>

          {/* ── Utility functions ── */}
          <Card>
            <Label>Utility Functions — getLangCode, getScriptCode, getEnglishLangName…</Label>
            <p style={{ fontSize: 13.5, color: '#888', margin: '0 0 14px', lineHeight: 1.7 }}>
              Functional alternatives to <Tag>LangScriptObj</Tag>. Current locale values shown live.
            </p>
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10, marginBottom: 4,
            }}>
              {[
                { call: `getLangCode("${i18n.locale}")`,     result: getLangCode(i18n.locale) },
                { call: `getScriptCode("${i18n.locale}")`,   result: getScriptCode(i18n.locale) },
                { call: `getEnglishLangName("${langCode}")`, result: getEnglishLangName(langCode) ?? 'null' },
                { call: `getLocaleLangName("${langCode}")`,  result: getLocaleLangName(langCode) ?? 'null' },
                { call: `getCountryCode("${langCode}")`,     result: getCountryCode(langCode) ?? 'null' },
                { call: `formatLangScriptCode("${langCode}", "${scriptCode}")`, result: formatLangScriptCode(langCode, scriptCode) },
              ].map(({ call, result }) => (
                <div key={call} style={{
                  background: '#fafafa', border: '1.5px solid #ebebef',
                  borderRadius: 10, padding: '10px 12px',
                }}>
                  <code style={{
                    fontFamily: '"DM Mono", monospace', fontSize: 11,
                    color: '#888', display: 'block', marginBottom: 5,
                    wordBreak: 'break-all', lineHeight: 1.6,
                  }}>{call}</code>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#1a0533', lineHeight: 1.5 }}>
                    → {String(result)}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ── String validation ── */}
          <Card>
            <Label>String Validation — stringToLangCode / stringToLangScriptCode / stringToScriptCode</Label>
            <p style={{ fontSize: 13.5, color: '#888', margin: '0 0 14px', lineHeight: 1.7 }}>
              Safely parse arbitrary strings to typed codes. Returns <Tag color="red">null</Tag> for invalid input.
            </p>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14, flexWrap: 'wrap' }}>
              <input
                value={rawInput}
                onChange={e => setRawInput(e.target.value)}
                placeholder="e.g. eng_Latn"
                style={{
                  fontFamily: '"DM Mono", monospace', fontSize: 13,
                  padding: '9px 13px', borderRadius: 9,
                  border: '1.5px solid #d4baff', outline: 'none',
                  background: '#faf9ff', width: 190, color: '#1a0533',
                }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 10 }}>
              {[
                { fn: 'stringToLangScriptCode', result: parsedLS },
                { fn: 'stringToLangCode',       result: parsedL },
                { fn: 'stringToScriptCode',     result: parsedS },
              ].map(({ fn, result }) => (
                <div key={fn} style={{
                  background: result ? '#f0fdf4' : '#fff1f2',
                  border: `1.5px solid ${result ? '#86efac' : '#fca5a5'}`,
                  borderRadius: 10, padding: '10px 14px',
                }}>
                  <code style={{
                    fontFamily: '"DM Mono", monospace', fontSize: 11,
                    color: '#555', display: 'block', marginBottom: 5, lineHeight: 1.6,
                  }}>{fn}()</code>
                  <div style={{
                    fontFamily: '"DM Mono", monospace', fontSize: 14, fontWeight: 700,
                    color: result ? '#166534' : '#9f1239', lineHeight: 1.5,
                  }}>
                    {result ?? 'null'}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* ── LANG_SCRIPT_CODES stats + script bar chart ── */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            <Card>
              <Label>Constants</Label>
              {[
                { name: 'LANG_SCRIPT_CODES', count: LANG_SCRIPT_CODES.length, desc: 'lang–script pairs' },
                { name: 'LANG_CODES',        count: LANG_CODES.length,        desc: 'languages' },
                { name: 'SCRIPT_CODES',      count: SCRIPT_CODES.length,      desc: 'writing scripts' },
              ].map(({ name, count, desc }) => (
                <div key={name} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '14px 0', borderBottom: '1px solid #f0edf8',
                }}>
                  <div>
                    <code style={{ fontFamily: '"DM Mono", monospace', fontSize: 11.5, color: '#6c2bd9', lineHeight: 1.6 }}>{name}</code>
                    <div style={{ fontSize: 11, color: '#aaa', marginTop: 4, lineHeight: 1.5 }}>{desc}</div>
                  </div>
                  <div style={{
                    fontSize: 28, fontWeight: 800, color: '#1a0533',
                    lineHeight: 1, letterSpacing: -0.5, paddingLeft: 12,
                  }}>{count}</div>
                </div>
              ))}
            </Card>
            <Card>
              <Label>Script Distribution — loaded locales</Label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
                {scriptSorted.slice(0, 7).map(([script, count]) => (
                  <div key={script} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 44 }}><ScriptBadge script={script} /></div>
                    <div style={{
                      flex: 1, height: 7, background: '#f0ecff', borderRadius: 999, overflow: 'hidden',
                    }}>
                      <div style={{
                        width: `${(count / available.length) * 100}%`,
                        height: '100%',
                        background: 'linear-gradient(90deg, #6c2bd9, #a855f7)',
                        borderRadius: 999, transition: 'width 0.4s ease',
                      }} />
                    </div>
                    <div style={{
                      fontFamily: '"DM Mono", monospace', fontSize: 11,
                      color: '#6c2bd9', width: 22, textAlign: 'right',
                    }}>{count}</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* ── Provider setup ── */}
          <Card>
            <Label>Provider Setup</Label>
            <p style={{ fontSize: 13.5, color: '#888', margin: '0 0 4px', lineHeight: 1.7 }}>
              Wrap your app once with <Tag>I18nProvider</Tag>. Accepts <Tag>default_lang</Tag> and <Tag>default_database</Tag>.
              Generate <code style={{ fontFamily: '"DM Mono", monospace', fontSize: 12 }}>translations.json</code> with the CLI.
            </p>
            <CodeBlock>{`// main.tsx
import { I18nProvider } from "react-auto-i18n";
import db from "./assets/translations.json";

createRoot(document.getElementById('root')!).render(
  <I18nProvider default_lang="eng_Latn" default_database={db}>
    <App />
  </I18nProvider>
);

// Generate the database with the CLI
// npx auto-i18n-cli -i "./src/**/*.ts" -o "./assets/translations.json" \\
//   --langs spa_Latn,fra_Latn,deu_Latn,jpn_Jpan \\
//   --source eng_Latn --backend azure --azureKey "YOUR_KEY"`}</CodeBlock>
          </Card>

          {/* ── Full API ── */}
          <Card>
            <Label>Full API Reference</Label>
            <div style={{ marginTop: 8 }}>
              <ApiRow fn="__t(key, msg, arg?)"           desc="Translate a string. Use {{...}} to escape text, {{$var}} for variable substitution." />
              <ApiRow fn="__tv(key, variants, arg)"      desc="Variant / plural translation. Array of [string, predicate] pairs with a string fallback." />
              <ApiRow fn="useI18n()"                     desc="React hook — exposes locale, database, setLocale(), setDatabase(), getLocales(), getLocaleObj()." />
              <ApiRow fn="I18nProvider"                  desc="Context provider. Props: default_lang (LangScriptCode), default_database (I18nDatabase)." />
              <ApiRow fn="new LangScriptObj(code)"       desc="OOP wrapper: .getLangCode() .getScriptCode() .getEnglishName() .getName() .getCountry() .getCountryFlag()" />
              <ApiRow fn="getLangCode(code)"             desc='Extract "ace" from "ace_Arab".' />
              <ApiRow fn="getScriptCode(code)"           desc='Extract "Arab" from "ace_Arab".' />
              <ApiRow fn="formatLangScriptCode(l, s)"    desc='Combine "ace" + "Arab" → "ace_Arab".' />
              <ApiRow fn="getEnglishLangName(code)"      desc="English display name for a LangCode." />
              <ApiRow fn="getLocaleLangName(code)"       desc="Native display name for a LangCode." />
              <ApiRow fn="getCountryCode(code)"          desc="ISO country most associated with a LangCode." />
              <ApiRow fn="stringToLangCode(str)"         desc="Safe parse to LangCode — returns null if invalid." />
              <ApiRow fn="stringToLangScriptCode(str)"   desc="Safe parse to LangScriptCode — returns null if invalid." />
              <ApiRow fn="stringToScriptCode(str)"       desc="Safe parse to ScriptCode — returns null if invalid." />
              <ApiRow fn="LANG_SCRIPT_CODES"             desc="Readonly tuple of all 200+ LangScriptCodes." />
              <ApiRow fn="LANG_CODES / SCRIPT_CODES"     desc="Arrays of all distinct language and script codes." />
              <ApiRow fn="getCurrentLocalRaw()"          desc="Low-level getter — prefer useI18n().locale." />
              <ApiRow fn="setCurrentLocalRaw(locale)"    desc="Low-level setter — prefer useI18n().setLocale()." />
              <ApiRow fn="getI18nDatabaseRaw()"          desc="Low-level getter — prefer useI18n().database." />
              <ApiRow fn="setI18nDatabaseRaw(db)"        desc="Low-level setter — prefer useI18n().setDatabase()." />
            </div>
          </Card>

        </div>
      </div>
    </>
  );
}