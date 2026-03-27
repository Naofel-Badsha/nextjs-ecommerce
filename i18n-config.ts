export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'it', 'fr', 'bn', 'hn', 'ar'],
} as const;

export type Locale = (typeof i18n)['locales'][number]