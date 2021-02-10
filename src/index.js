import './main.css'
import Layout from './Layout.vue'
import AppColorSwitcher from './components/AppColorSwitcher.vue'
import Alert from './components/Alert.vue'
import CodeGroup from './components/CodeGroup.vue'
import CodeBlock from './components/CodeBlock.vue'
import List from './components/List.vue'
import { reactive } from 'vue'

/** @type {import('vitepress').Theme} */
const theme = {
  Layout,
  // @ts-ignore
  NotFound: () => 'Nope',
  enhanceApp({ app, router, siteData }) {
    app.component('AppColorSwitcher', AppColorSwitcher)
    app.component('Alert', Alert)
    app.component('CodeGroup', CodeGroup)
    app.component('CodeBlock', CodeBlock)
    app.component('List', List)

    app.config.globalProperties.settings = reactive({
      // TODO: computed
      layout: 'default',
    })
  },
}

export { theme }
