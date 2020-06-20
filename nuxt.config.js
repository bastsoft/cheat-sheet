import path from 'path'
import Mode from 'frontmatter-markdown-loader/mode'
import MarkdownIt from 'markdown-it'
import mip from 'markdown-it-prism'
import data from './md/data/generate.json'

const routerBase =
  process.env.DEPLOY_ENV === 'GH_PAGES'
    ? {
        router: {
          base: '/cheat-sheet/'
        }
      }
    : {}

const md = new MarkdownIt({
  html: true,
  typographer: true
})
md.use(mip)

export default {
  ...routerBase,
  mode: 'universal',

  generate: {
    routes: data.map((mdFileName) => '/blog/' + mdFileName.replace(/\.md/g, ''))
  },

  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['github-markdown-css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Build configuration
   */
  build: {
    extend(config, _ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'md'),
        options: {
          mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
          vue: {
            root: 'dynamicMarkdown'
          },
          markdown(body) {
            return md.render(body)
          }
        }
      })
    }
  }
}
