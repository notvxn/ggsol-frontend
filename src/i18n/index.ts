import { createI18n } from 'vue-i18n'
import ru from './locales/ru.json'
import en from './locales/en.json'

export type LocaleCode = 'ru' | 'en'

export const DEFAULT_LOCALE: LocaleCode = 'ru'
export const LOCALES_CONFIG: Record<LocaleCode, { name: string }> = {
  ru: { name: 'Русский' },
  en: { name: 'English' }
} as const

type MessageSchema = typeof ru

export const i18n = createI18n<[MessageSchema], LocaleCode>({
  locale: DEFAULT_LOCALE,
  fallbackLocale: DEFAULT_LOCALE,
  availableLocales: Object.keys(LOCALES_CONFIG),
  messages: { ru, en },
  legacy: false,
})