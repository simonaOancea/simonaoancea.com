// Theme registry — the single source of truth shared by the no-flash script
// (Layout.astro) and the ThemePicker. Each id must have a matching
// [data-theme='<id>'] block in src/styles/tokens.css.
// `bg` doubles as the <meta name="theme-color"> value.
//
// The cities are home + the 2026 speaking tour (updated 2026-07-24):
// Bucharest (home), Berlin (BED-Con), Munich (W-JAX), Hannover (Java Forum
// Nord), Hamburg (Bit Summit), Rovinj (JavaCro). Future seasons: retire and
// add cities as the tour changes — one block in tokens.css + one row here.

export interface Theme {
  id: string;
  label: string;
  scheme: 'dark' | 'light';
  bg: string;
  accent: string;
}

export const themes: Theme[] = [
  { id: 'bucharest', label: 'Bucharest', scheme: 'dark', bg: '#101319', accent: '#E5A54B' },
  { id: 'berlin', label: 'Berlin', scheme: 'dark', bg: '#0E0F11', accent: '#E8C842' },
  { id: 'munich', label: 'Munich', scheme: 'dark', bg: '#0D1420', accent: '#7FB4E8' },
  { id: 'hannover', label: 'Hannover', scheme: 'light', bg: '#F5F8F5', accent: '#1F7A4E' },
  { id: 'hamburg', label: 'Hamburg', scheme: 'light', bg: '#F4F7FA', accent: '#23618E' },
  { id: 'rovinj', label: 'Rovinj', scheme: 'light', bg: '#F8F7F2', accent: '#0E7373' },
];

export const DEFAULT_THEME = themes[0];
