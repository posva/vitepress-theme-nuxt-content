import Layout from './Layout.vue'

/** @typedef {import('vitepress').Theme} */
const theme = {
  Layout,
  NotFound: () => 'Nope',
  enhanceApp({ app, router, stieData }) {},
}

export { theme }
