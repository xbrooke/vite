import DefaultTheme from 'vitepress/theme'
import './style/overwrite.css' // 首页图标样式距离
//import './style/style.css' //选择框样式
import './style/vars.css' //首页样式

const theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {

  }
}

export default theme