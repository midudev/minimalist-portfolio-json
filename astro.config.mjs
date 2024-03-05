import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: Object.keys(languages),
        defaultLocale: defaultLang,
        routing: {
            prefixDefaultLocale: true
        }
    },
});
