export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'en',
      prefix: 'og: http://ogp.me/ns#'
    },
    title: 'Adrian Arenal',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'og:title',
        content: 'Adrian Arenal'
      },
      {
        name: 'og:description',
        content: process.env.npm_package_description || ''
      },
      {
        name: 'og:image',
        content: 'https://adrianarenal.dev/adrian.jpeg'
      },
      {
        name: 'og:url',
        content: 'https://adrianarenal.dev'
      },
      {
        name: 'theme-color',
        content: '#367062'
      }
    ],
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    '@/assets/scss/reset.scss',
    '@/assets/scss/resources.scss',
    '@/assets/scss/default.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/device.client.ts'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
    scss: [
      './assets/scss/abstracts/_functions.scss',
      './assets/scss/vars/*.scss',
      './assets/scss/abstracts/_animations.scss',
      './assets/scss/abstracts/_mixins.scss'
    ]
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
