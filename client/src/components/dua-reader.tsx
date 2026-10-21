import { useSyncExternalStore, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

/* ───────────────────────── Reader preferences store ─────────────────────────
 * Shared by every dua card on a page (and across pages) so the font size and
 * translation toggles behave like the Quran reader. Persisted in localStorage.
 */

interface ReaderState {
    fontLevel: number; // 1..5
    showEn: boolean | null; // null = follow site language
    showUr: boolean | null;
}

const STORAGE_KEYS = { en: "dua-pref-en", ur: "dua-pref-ur", font: "dua-fontsize-level" };

function loadState(): ReaderState {
    const state: ReaderState = { fontLevel: 3, showEn: null, showUr: null };
    if (typeof window === "undefined") return state;
    try {
        const en = localStorage.getItem(STORAGE_KEYS.en);
        const ur = localStorage.getItem(STORAGE_KEYS.ur);
        const font = localStorage.getItem(STORAGE_KEYS.font);
        if (en !== null) state.showEn = en === "true";
        if (ur !== null) state.showUr = ur === "true";
        if (font !== null) {
            const level = parseInt(font);
            if (level >= 1 && level <= 5) state.fontLevel = level;
        }
    } catch {
        // storage unavailable — use defaults
    }
    return state;
}

let readerState = loadState();
const listeners = new Set<() => void>();

function setReaderState(patch: Partial<ReaderState>) {
    readerState = { ...readerState, ...patch };
    try {
        if (readerState.showEn !== null) localStorage.setItem(STORAGE_KEYS.en, String(readerState.showEn));
        if (readerState.showUr !== null) localStorage.setItem(STORAGE_KEYS.ur, String(readerState.showUr));
        localStorage.setItem(STORAGE_KEYS.font, String(readerState.fontLevel));
    } catch {
        // ignore
    }
    listeners.forEach(l => l());
}

function subscribe(listener: () => void) {
    listeners.add(listener);
    return () => listeners.delete(listener);
}

export function useDuaReader() {
    const { lang } = useLanguage();
    const state = useSyncExternalStore(subscribe, () => readerState, () => readerState);
    const isUrdu = lang === "ur";
    const showEn = state.showEn ?? !isUrdu;
    const showUr = state.showUr ?? isUrdu;

    return {
        fontLevel: state.fontLevel,
        showEn,
        showUr,
        changeFontSize: (delta: number) =>
            setReaderState({ fontLevel: Math.max(1, Math.min(5, state.fontLevel + delta)) }),
        setArabicOnly: () => setReaderState({ showEn: false, showUr: false }),
        toggleEn: () => setReaderState({ showEn: !showEn, showUr }),
        toggleUr: () => setReaderState({ showUr: !showUr, showEn }),
    };
}

const ARABIC_SIZES = [
    "text-lg md:text-2xl",
    "text-xl md:text-3xl",
    "text-2xl md:text-4xl",
    "text-3xl md:text-5xl",
    "text-4xl md:text-6xl",
];
const URDU_SIZES = [
    "text-base md:text-lg",
    "text-lg md:text-xl",
    "text-xl md:text-2xl",
    "text-2xl md:text-3xl",
    "text-3xl md:text-4xl",
];
const ENGLISH_SIZES = [
    "text-sm md:text-base",
    "text-base md:text-lg",
    "text-base md:text-lg",
    "text-lg md:text-xl",
    "text-xl md:text-2xl",
];

export const arabicSizeClass = (level: number) => ARABIC_SIZES[level - 1] ?? ARABIC_SIZES[2];
export const urduSizeClass = (level: number) => URDU_SIZES[level - 1] ?? URDU_SIZES[2];
export const englishSizeClass = (level: number) => ENGLISH_SIZES[level - 1] ?? ENGLISH_SIZES[2];

/* ───────────────────────── Toolbar ───────────────────────── */

export function DuaReaderToolbar({ className }: { className?: string }) {
    const { fontLevel, showEn, showUr, changeFontSize, setArabicOnly, toggleEn, toggleUr } = useDuaReader();
    const arabicOnly = !showEn && !showUr;

    const pill = (active: boolean) => cn(
        "px-4 py-1.5 md:px-5 md:py-2 rounded-full text-xs md:text-sm font-semibold transition-all",
        active ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:bg-muted"
    );

    return (
        <div className={cn(
            "sticky top-20 md:top-24 z-30 flex flex-wrap items-center justify-center gap-2 px-3 py-2.5 rounded-full",
            "bg-background/90 backdrop-blur-xl border border-border/60 shadow-lg w-fit mx-auto",
            className
        )}>
            <div className="flex items-center bg-muted/50 p-1 rounded-full border border-border/50">
                <button
                    onClick={() => changeFontSize(-1)}
                    disabled={fontLevel === 1}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted disabled:opacity-30 transition-colors"
                    title="Decrease font size"
                    aria-label="Decrease font size"
                >
                    <span className="text-xs font-bold">A−</span>
                </button>
                <div className="w-1 h-1 rounded-full bg-border mx-1"></div>
                <button
                    onClick={() => changeFontSize(1)}
                    disabled={fontLevel === 5}
                    className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:bg-muted disabled:opacity-30 transition-colors"
                    title="Increase font size"
                    aria-label="Increase font size"
                >
                    <span className="text-sm font-bold">A+</span>
                </button>
            </div>

            <div className="flex items-center gap-1 bg-muted/50 p-1 rounded-full border border-border/50">
                <button onClick={setArabicOnly} className={pill(arabicOnly)} aria-pressed={arabicOnly}>
                    عربی
                </button>
                <button onClick={toggleUr} className={cn(pill(showUr), "font-urdu leading-none")} aria-pressed={showUr}>
                    اردو
                </button>
                <button onClick={toggleEn} className={pill(showEn)} aria-pressed={showEn}>
                    English
                </button>
            </div>
        </div>
    );
}

/* ───────────────────────── Arabic text ───────────────────────── */

const HARAKAT = /[ؐ-ًؚ-ٰٟۖ-ۭـ]/g;

function isBismillahLine(line: string) {
    const plain = line.replace(HARAKAT, "").replace(/ہ/g, "ه").replace(/\s+/g, " ").trim();
    return /^بسم (الله|ٱلله) (الرحمن|الرحمان) (الرحيم|الرحیم)$/.test(plain);
}

/** Octagonal ayah marker (same motif as the Quran reader), sized relative to the text. */
function AyahMarker({ label }: { label?: string }) {
    return (
        <span className="relative inline-flex items-center justify-center align-middle mx-[0.2em] w-[1.15em] h-[1.15em] translate-y-[-0.08em] select-none" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full text-amber-600/70 dark:text-amber-400/70" viewBox="0 0 100 100">
                <path fill="currentColor" className="opacity-15" d="M50 5 L65 15 L85 15 L95 35 L95 65 L85 85 L65 85 L50 95 L35 85 L15 85 L5 65 L5 35 L15 15 L35 15 Z" />
                <path fill="none" stroke="currentColor" strokeWidth="3" d="M50 8 L64 17 L82 17 L92 35 L92 65 L82 83 L64 83 L50 92 L36 83 L18 83 L8 65 L8 35 L18 17 L36 17 Z" />
            </svg>
            {label && (
                <span className="relative font-numeric font-bold text-amber-900/80 dark:text-amber-100/90 text-[0.32em] leading-none">
                    {label}
                </span>
            )}
        </span>
    );
}

const MARKER_RE = /\(([۰-۹٠-٩0-9:٫]+)\)|۝/g;

function renderWithMarkers(line: string) {
    const parts: ReactNode[] = [];
    let last = 0;
    let match: RegExpExecArray | null;
    MARKER_RE.lastIndex = 0;
    while ((match = MARKER_RE.exec(line)) !== null) {
        if (match.index > last) parts.push(line.slice(last, match.index));
        parts.push(<AyahMarker key={match.index} label={match[1]} />);
        last = match.index + match[0].length;
    }
    if (last < line.length) parts.push(line.slice(last));
    return parts;
}

/**
 * Renders dua Arabic in a Mushaf-like layout: each source line on its own row,
 * blank lines become stanza breaks, Bismillah lines get a framed heading and
 * "(۱)" / "۝" markers become ornamental ayah markers.
 */
export function ArabicText({ text, className }: { text: string; className?: string }) {
    const { fontLevel } = useDuaReader();
    const stanzas = text.trim().split(/\n\s*\n/).map(s => s.split("\n").map(l => l.trim()).filter(Boolean));

    return (
        <div dir="rtl" lang="ar" className={cn("space-y-6 md:space-y-8", className)}>
            {stanzas.map((lines, si) => (
                <div key={si} className="space-y-2 md:space-y-3">
                    {lines.map((line, li) =>
                        isBismillahLine(line) ? (
                            <div key={li} className="flex justify-center py-2">
                                <p className={cn(
                                    arabicSizeClass(Math.max(1, fontLevel - 1)),
                                    "font-arabic font-bold text-amber-900 dark:text-amber-100 px-8 py-2 rounded-2xl bg-amber-100/40 dark:bg-amber-900/30 border border-amber-200/60 dark:border-amber-700/40 leading-[2]"
                                )}>
                                    {line}
                                </p>
                            </div>
                        ) : (
                            <p
                                key={li}
                                className={cn(
                                    arabicSizeClass(fontLevel),
                                    "font-arabic font-medium text-zinc-900 dark:text-zinc-100 leading-[2.3] md:leading-[2.5] text-center md:text-justify"
                                )}
                                style={{ textAlignLast: "center" }}
                            >
                                {renderWithMarkers(line)}
                            </p>
                        )
                    )}
                </div>
            ))}
        </div>
    );
}

/* ───────────────────────── Translation ───────────────────────── */

const ARABIC_SCRIPT = /[؀-ۿ]/g;

function isMostlyArabicScript(text: string) {
    const letters = text.replace(/[\s\d!-/:-@[-`{-~،؛؟۔]/g, "");
    if (!letters) return false;
    return (text.match(ARABIC_SCRIPT)?.length ?? 0) / letters.length > 0.5;
}

/** Splits the "English Translation: … Urdu Translation: …" format used in the data files. */
export function parseTranslation(raw: string | undefined): { en: string; ur: string } {
    if (!raw) return { en: "", ur: "" };
    const text = raw.trim();
    const urIdx = text.search(/Urdu Translation:/i);
    let en = urIdx >= 0 ? text.slice(0, urIdx) : text;
    let ur = urIdx >= 0 ? text.slice(urIdx).replace(/^Urdu Translation:\s*/i, "") : "";
    en = en.replace(/^English Translation:\s*/i, "").trim();

    if (!ur && isMostlyArabicScript(en)) {
        ur = en;
        en = "";
    }

    ur = ur
        .split("\n")
        .filter(line => !/^\s*ترجمہ\s*:?\s*$/.test(line))
        .map(line => line.replace(/^\s*ترجمہ\s*:\s*/, ""))
        .join("\n")
        .replace(/\n{3,}/g, "\n\n")
        .trim();

    return { en, ur };
}

export function DuaTranslation({ translation, label }: { translation?: string; label?: string }) {
    const { fontLevel, showEn, showUr } = useDuaReader();
    const { en, ur } = parseTranslation(translation);

    // If the chosen language isn't available for this dua, fall back to the other one.
    const wantsAny = showEn || showUr;
    const renderUr = !!ur && (showUr || (showEn && !en));
    const renderEn = !!en && (showEn || (showUr && !ur));
    if (!wantsAny || (!renderUr && !renderEn)) return null;

    return (
        <div className="space-y-5">
            {label && (
                <div className="flex items-center gap-3">
                    <div className="h-px flex-1 bg-amber-900/10 dark:bg-amber-100/10"></div>
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700/70 dark:text-amber-300/70">{label}</span>
                    <div className="h-px flex-1 bg-amber-900/10 dark:bg-amber-100/10"></div>
                </div>
            )}
            {renderUr && (
                <p
                    dir="rtl"
                    lang="ur"
                    className={cn(
                        urduSizeClass(fontLevel),
                        "font-urdu text-amber-950/80 dark:text-amber-50/85 !leading-[2.4] text-right whitespace-pre-line"
                    )}
                >
                    {ur}
                </p>
            )}
            {renderEn && (
                <p className={cn(
                    englishSizeClass(fontLevel),
                    "text-zinc-700 dark:text-zinc-300 leading-relaxed whitespace-pre-line"
                )}>
                    {en}
                </p>
            )}
        </div>
    );
}

/* ───────────────────────── Paper panel ───────────────────────── */

/** Cream "mushaf paper" surface with ornamental corners, shared with the Quran reader look. */
export function MushafPanel({ children, className }: { children: ReactNode; className?: string }) {
    const corner = "absolute w-6 h-6 md:w-10 md:h-10 border-amber-500/30 pointer-events-none";
    return (
        <div className={cn("relative mushaf-paper bg-[#fdfaf1] dark:bg-zinc-950/20 px-5 py-8 md:px-12 md:py-10", className)}>
            <div className={cn(corner, "top-3 left-3 border-t-2 border-l-2 rounded-tl-xl")}></div>
            <div className={cn(corner, "top-3 right-3 border-t-2 border-r-2 rounded-tr-xl")}></div>
            <div className={cn(corner, "bottom-3 left-3 border-b-2 border-l-2 rounded-bl-xl")}></div>
            <div className={cn(corner, "bottom-3 right-3 border-b-2 border-r-2 rounded-br-xl")}></div>
            {children}
        </div>
    );
}

/* ───────────────────────── Simple dua card ───────────────────────── */

interface SimpleDuaCardProps {
    title: string;
    arabic: string;
    transliteration?: string;
    translation?: string;
    reference?: string;
    note?: string;
}

/** Mushaf-style card for duas that only have Arabic + transliteration + a single translation. */
export function SimpleDuaCard({ title, arabic, transliteration, translation, reference, note }: SimpleDuaCardProps) {
    const { fontLevel } = useDuaReader();
    return (
        <article className="rounded-3xl border border-amber-200/60 dark:border-border/60 shadow-xl overflow-hidden bg-background">
            <header className="flex items-start justify-between gap-3 px-5 py-4 md:px-8 md:py-5 border-b border-border/60">
                <h3 className="text-base md:text-xl font-display font-bold text-gray-800 dark:text-white leading-snug">{title}</h3>
                {reference && (
                    <span className="shrink-0 px-3 py-1 rounded-full bg-amber-100/70 dark:bg-amber-900/40 border border-amber-300/40 dark:border-amber-700/50 text-amber-800 dark:text-amber-200 text-xs font-bold">
                        {reference}
                    </span>
                )}
            </header>
            <MushafPanel>
                <ArabicText text={arabic} />
            </MushafPanel>
            <div className="px-5 py-6 md:px-12 md:py-8 border-t border-amber-900/10 dark:border-border/60 bg-amber-50/30 dark:bg-transparent space-y-4">
                {transliteration && (
                    <p className={cn(englishSizeClass(fontLevel), "italic text-amber-700 dark:text-amber-400 leading-relaxed")}>
                        {transliteration}
                    </p>
                )}
                <DuaTranslation translation={translation} />
                {note && (
                    <div className="flex items-start gap-3 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/50 px-4 py-3 text-sm text-emerald-900/80 dark:text-emerald-100/80">
                        <i className="fas fa-info-circle text-emerald-500 mt-0.5 shrink-0"></i>
                        <span>{note}</span>
                    </div>
                )}
            </div>
        </article>
    );
}
