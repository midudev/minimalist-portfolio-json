import cvEs from "@cv"
import cvEn from "../../cv_english.json"
import { ui } from "./ui"

// Añade aquí un idioma con su CV y sus textos en `ui.ts`.
// Si solo quieres un idioma, deja únicamente el de `DEFAULT_LANG`.
export const LANGUAGES = {
  es: { name: "Español", cv: cvEs },
  en: { name: "English", cv: cvEn },
}

export type Lang = keyof typeof LANGUAGES

export const DEFAULT_LANG: Lang = "es"

export const getCV = (lang: Lang) => LANGUAGES[lang].cv

export const getLangPath = (lang: Lang) =>
  lang === DEFAULT_LANG ? "/" : `/${lang}/`

export const useTranslations = (lang: Lang) => {
  return (
    key: keyof (typeof ui)[typeof DEFAULT_LANG],
    params: Record<string, string> = {}
  ) =>
    ui[lang][key].replace(/\{(\w+)\}/g, (match, param) => params[param] ?? match)
}

export const formatMonthYear = (lang: Lang, date: string) =>
  new Intl.DateTimeFormat(lang, {
    month: "long",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(date))
