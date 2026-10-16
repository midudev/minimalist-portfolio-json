import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    // Una sola página: incrustar el CSS evita una petición que bloquea el render
    inlineStylesheets: 'always'
  }
});
