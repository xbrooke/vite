import { h } from 'vue'
import Theme from 'vitepress/theme'
import './style/overwrite.css'
import './style/style.css'
import HomeSponsors from './components/HomeSponsors.vue'
import AsideSponsors from './components/AsideSponsors.vue'
import './style/vars.css'
import './custom.css'
export default {
  ...Theme,
  Layout() {
    return h(Theme.Layout, null, {
      'home-features-after': () => h(HomeSponsors),
      'aside-ads-before': () => h(AsideSponsors),
    })
  }
}
