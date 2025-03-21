import { computed, watch, type WritableComputedRef } from 'vue'
import { useLocalStorage } from '@vueuse/core'
import { type LocaleCode, i18n, DEFAULT_LOCALE, LOCALES_CONFIG } from '@/i18n'

export function useLocale() {
  const { t } = i18n.global
  const currentLocale = i18n.global.locale as unknown as WritableComputedRef<LocaleCode>

  const savedLocale = useLocalStorage<LocaleCode>('locale', DEFAULT_LOCALE)

  if (savedLocale.value && Object.keys(LOCALES_CONFIG).includes(savedLocale.value)) {
    currentLocale.value = savedLocale.value
  }

  const currentLocaleMeta = computed(() => LOCALES_CONFIG[currentLocale.value])

  const availableLocalesMeta = computed(() =>
    Object.entries(LOCALES_CONFIG).map(([code, meta]) => ({
      code: code as LocaleCode,
      ...meta
    }))
  )

  const changeLocale = (locale: LocaleCode) => {
    currentLocale.value = locale
    savedLocale.value = locale
  }

  watch(currentLocale, (newLocale) => {
    savedLocale.value = newLocale
  })

  return {
    t,
    currentLocale,
    currentLocaleMeta,
    availableLocales: Object.keys(LOCALES_CONFIG) as LocaleCode[],
    availableLocalesMeta,
    changeLocale
  }
}