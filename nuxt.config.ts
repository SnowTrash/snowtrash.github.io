import wasm from 'vite-plugin-wasm';
// import topLevelAwait from 'vite-plugin-top-level-await'

export default defineNuxtConfig({
  app: {
    baseURL: '/snowtrash.github.io',
    buildAssetsDir: 'assets',
  },

  tres: {
    devtools: true,
    glsl: true
  },

  ssr: false,

  modules: [
    '@tresjs/nuxt',
    '@nuxt/devtools',
    '@pinia/nuxt',
    'nuxt-vuefire'
  ],

  vuefire:{
    auth:{
      enabled: true,
      seesionCookie: false,
    },
    config: {
      apiKey: "AIzaSyDB86rNA0muTeyB0GAFKsK2SzEbBRou-wI",
      authDomain: "snow-cat-91d34.firebaseapp.com",
      projectId: "snow-cat-91d34",
      storageBucket: "snow-cat-91d34.appspot.com",
      messagingSenderId: "912061334044",
      appId: "1:912061334044:web:01661bbaddefb6730e55d9",
      measurementId: "G-HL8VQD5QKL"
    }
  },
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs"
  },

  vite: {
    plugins: [wasm()],
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})