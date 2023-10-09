---
layout: home

hero:
  name:  徐大兵的文档库
  text: 运营有我，签单不愁。
  tagline: 
  image:
    src: https://s2.loli.net/2023/03/03/IduznQDYlVt6MBo.png
    alt: 
  actions:
    - theme: brand
      text: 点击了解
      link: ./brooke/cc
    - theme: alt
      text: 运营平台
      link: ./brooke/cc
  features:
  - title: SF Map Graph
    details: 提供一系列的柱状、饼状等组件，此外还有文字滚动、时间轴等特殊组件.
    url: http://xxx.com/service/guide/install.html
    img: /home/graph.png
  - title: SF Map Service
    details: 提供大搜、按钮等一系列组件，已内置了状态和接口功能.
    url: http://xxx.com/service/guide/install.html
    img: /home/service.png
  - title: SF Ui 
    details: 基于Vue / Ant Design Vue的UI组件库.
    url: http://xxx.com/service/guide/install.html
    img: /home/ui.png
  - title: SF Icons 
    details: 一整套公司自有的图标集.
    url: http://xxx.com/service/guide/icon.html
    img: /home/icon.png
footer: MIT Licensed | Copyright © 2020-present
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://s2.loli.net/2023/03/04/5EdUFlhjPbrWkyc.png',
    name: '好好住',
    title: '>>了解详情',
    sponsor: './brooke/haohaozhu//hhz',
  },
  {
    avatar: 'https://s2.loli.net/2023/03/04/5zpAyHsQCe4oBZf.png',
    name: '土巴兔',
    title: '>>了解详情',
    sponsor: './brooke/tubatu//01',
  },
  {
    avatar: 'https://s2.loli.net/2023/03/03/SvcQbuDlROh5q8T.png',
    name: '小红书',
    title: '>>了解详情',
    sponsor: 'https://github.com/xbrooke',
  },
  {
    avatar: 'https://s2.loli.net/2023/03/04/bNjQc3WrfC4Hy7o.png',
    name: '美团',
    title: '>>了解详情',
    sponsor: 'https://github.com/xbrooke',
  },
  {
    avatar: 'https://s2.loli.net/2023/03/04/2EmjN6k5yi1phCo.png',
    name: '住小帮',
    title: '>>了解详情',
    sponsor: 'https://github.com/xbrooke',
  },
  {
    avatar: 'https://s2.loli.net/2023/03/04/iLaKhfAmdRZp2S6.png',
    name: '抖音',
    title: '>>了解详情',
    sponsor: 'https://github.com/xbrooke',
  },
  {
    avatar: 'https://s2.loli.net/2023/03/04/bN4g6wWKrCTzqHn.png',
    name: '视频号',
    title: '>>了解详情',
    sponsor: 'https://github.com/xbrooke',
  },
  {
    avatar: 'https://s2.loli.net/2023/03/04/AhX76MQWpqZxvjc.png',
    name: '微信公众号',
    title: '>>了解详情',
    sponsor: 'https://github.com/xbrooke',
  },

]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <!-- <template #title>
      Our Team
    </template> -->
     <!--<template #lead>
      The development of VitePress is guided by an international
      team, some of whom have chosen to be featured below.
    </template>-->
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>


