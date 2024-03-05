import { defineConfig } from 'astro/config';
import { languages, defaultLang } from './src/i18n/utils';

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
