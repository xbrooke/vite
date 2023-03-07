// vite.config.js

const head = [
  ['link', {rel: 'icon', href: 'https://s2.loli.net/2023/03/03/IduznQDYlVt6MBo.png'}]
]

// markdown 配置
const markdown = {
  // 是否开启行号
  lineNumbers: true
}

// gitee logo svg icon
import gitee from '.././images/gitee.txt'
import coding from '.././images/coding.txt'
import oschina from '.././images/oschina.txt'

// 社交链接
const socialLinks = [
  // 默认支持 'discord' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'slack' | 'twitter' | 'youtube'
  {icon: 'github', link: 'https://github.com/xbrooke'},
  // 或者导入svg图片
  {icon: {svg: gitee}, link: 'https://gitee.com/maddragon'},
  {icon: {svg: coding}, link: 'https://maddragon.coding.net/user/projects'},
  {icon: {svg: oschina}, link: 'https://my.oschina.net/520wsl'},
]
// 页脚配置
const footer = {
  // 消息
  message: '蟹蟹有你',
  // 版权
  copyright: '© 2023 <a href="https://github.com/xbrooke" target="_black" ></a> | 徐大兵维护。'
}

// 上一个和下一个链接上方显示的文本
const docFooter = {
  prev: '测试',
  next: 'https://github.com/'
}

// 顶部导航
const nav = [
  {text: '首页', link: '/'},

]

// 全局左侧菜单 显示我们优势的总栏
const sidebar = {
  '/brooke/': [
      {
         text: '介绍',
         // 是否可收缩
         collapsible: true,
         // 是否折叠
         collapsed: false,
         items: [
          {text: '为什么要做线上', link: '/brooke/xianshang'},       
         ]
      },
      {
          text: '好好住',
          // 是否可收缩
          collapsible: true,
          // 是否折叠
          collapsed: false,
          items: [
            {text: '平台玩法', link: '/brooke/haohaozhu//hhz'},
            {text: '编辑精选', link: '/brooke/haohaozhu/anli'},
            {text: '高光时刻', link: '/brooke/haohaozhu/ggsk'},
            {text: '文章语法', link: '/brooke/haohaozhu/yufa'},
          ]   
      },
      {
        text: '土巴兔',
        // 是否可收缩
        collapsible: true,
        // 是否折叠
        collapsed: false,
        items: [
            {text: '平台玩法', link: '/brooke/tubatu//01'},
            {text: '编辑精选', link: '/brooke/tubatu//02'},
            {text: '高光时刻', link: '/brooke/tubatu//03'},
            {text: '文章语法', link: '/brooke/tubatu//04'},
        ]
    },
      {
        text: '住小帮',
        // 是否可收缩
        collapsible: true,
        // 是否折叠
        collapsed: false,
        items: [
          {text: '平台玩法', link: '/brooke/tubatu//01'},
          {text: '编辑精选', link: '/brooke/tubatu//02'},
          {text: '高光时刻', link: '/brooke/tubatu//03'},
          {text: '文章语法', link: '/brooke/tubatu//04'},
        ]
    }
  ],
  
  //第二栏不会出现第一栏的内容标题
  //'/haohaozhu/': [
   // {
    //    text: '好好住',
        // 是否可收缩
      //  collapsible: true,
        // 是否折叠
     //   collapsed: false,
     //   items: [
     //       {text: '为什么要做线上', link: '/haohaozhu/xianshang'},
      //      {text: '平台玩法', link: '/haohaozhu//hhz'},
      //      {text: '编辑精选', link: '/haohaozhu/anli'},
       //     {text: '高光时刻', link: '/haohaozhu/ggsk'},
      //      {text: '文章语法', link: '/haohaozhu/yufa'},
      //  ]
    //}
 // ], 
}


// 主题配置
const themeConfig = {
  // 全局左侧菜单
  sidebar,
  // 顶部导航
  nav,
  // 站点标题
  siteTitle: '蟹蟹有你',
  // 最后跟新时间标题
  //lastUpdatedText: '上次更新',
  // logo
  logo: 'https://s2.loli.net/2023/03/03/IduznQDYlVt6MBo.png',
  // 社交链接
  socialLinks,
  // 页脚配置
  footer,
  // 上一个和下一个链接上方显示的文本
  docFooter,
  // 右侧目录标题
  outlineTitle: '本页目录',
}

// APP配,
module.exports = {
  // 主题配置
  themeConfig,
  // markdown 配置
  markdown,
  // 站点标题
  title: '运营文档库',
  // 站点说明
  description: '徐大兵',
  // base URL
  base: '/vite/',
  // 站点lang
  lang: 'zh-CN',
  // 是否显示更新时间
  //lastUpdated: true,
  // 当设置为true时，VitePress不会因死链接而导致构建失败。
  ignoreDeadLinks: true,
  head
}
