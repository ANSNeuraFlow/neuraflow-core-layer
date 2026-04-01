import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  $meta: {
    name: 'neuraflow-core-layer',
  },
  app: {
    head: {
      htmlAttrs: {
        class: 'theme-dark',
      },
    },
    pageTransition: { name: 'fade', mode: 'out-in' },
    layoutTransition: { name: 'fade', mode: 'out-in' },
  },
  typescript: {
    typeCheck: true,
    strict: true,
  },
  vite: {
    optimizeDeps: {
      include: ['vue', 'reka-ui'],
    },
    ssr: {
      noExternal: ['reka-ui'],
    },
  },
  imports: {
    scan: false,
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxtjs/fontaine',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@vee-validate/nuxt',
  ],
  components: [
    {
      path: resolve(currentDir, 'app/components'),
      pathPrefix: false,
      extensions: ['.vue'],
    },
  ],
  css: [
    resolve(currentDir, 'app/assets/css/base.css'),
    resolve(currentDir, 'app/assets/css/tailwind.css'),
    resolve(currentDir, 'app/assets/css/tokens.css'),
  ],
  googleFonts: {
    families: {
      Roboto: '400..700',
    },
    preload: true,
  },
  fonts: {
    families: [
      {
        name: 'Arlon-Bold',
      },
    ],
    provider: 'local',
  },
  fontMetrics: {
    fonts: ['Roboto', { family: 'Roboto' }],
  },
});
