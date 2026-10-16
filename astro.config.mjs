import { defineConfig, fontProviders } from "astro/config"

// https://astro.build/config
export default defineConfig({
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Mona Sans",
      cssVariable: "--font-sans",
      weights: ["200 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        experimental: {
          variableAxis: { wdth: [[75, 125]] }
        }
      }
    }
  ]
})
