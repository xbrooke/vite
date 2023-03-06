---
layout: home

hero:
  name:  蟹蟹有你
  text: 运营有我，签单不愁。
  tagline: 
  image:
    src: https://s2.loli.net/2023/03/03/IduznQDYlVt6MBo.png
    alt: 
  actions:
    - theme: brand
      text: 点击了解
      link: ./demo1/a
    - theme: alt
      text: 运营平台
      link: ./demo1/
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
    sponsor: './brooke/hhz',
  },
  {
    avatar: 'https://s2.loli.net/2023/03/04/5zpAyHsQCe4oBZf.png',
    name: '土巴兔',
    title: '>>了解详情',
    sponsor: './brooke/hhz',
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
