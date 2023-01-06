import { defineConfig } from 'vitepress';
import buildSidebar from './sidebar'

export default defineConfig({
  title: 'Wukoon',
  description: 'Stay Hungry, Stay Foolish!',
  base: '/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'home.svg' }]],
  lastUpdated: true,
  markdown: {
    headers: {
      level: [0, 1, 2],
    },
    lineNumbers: true,
    anchor: {
      level: [0,1,2],
    },
  },
  themeConfig: {
    logo: '/home.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习', link: '/daily/' },
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/lesonky' }],
    footer: {
      message: '<a href="https://beian.miit.gov.cn/">苏ICP备2020067590号</a>',
      copyright: 'Copyright © 2022-12-06 ～ present Wukoon',
    },
    sidebar: buildSidebar(),
  },
  outDir: '../dist',
});
