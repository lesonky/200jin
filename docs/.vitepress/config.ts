import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'Wukoon',
  description: 'Stay Hungry, Stay Foolish!',
  base: '/',
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: 'home.svg' }]],
  lastUpdated: true,
  markdown: {
    headers: {
      level: [0, 0]
    }
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
    sidebar: {
      '/daily/': [
        {
          text: '意识流乱打',
          collapsible: true,
          items: [
            { text: '关于这里', link: '/daily/' },
          ],
        },
        {
          text: '搭建博客',
          collapsible: true,
          items: [
            { text: 'Vitepress 搭建博客', link: '/daily/build_vitepress_blog' },
            { text: 'Github Pages 发布博客', link: '/daily/publish_blog' },
            { text: 'Github Actions 自动化部署', link: '/daily/ci_blog' },
            { text: '自定义个性化域名', link: '/daily/cname_blog' },
          ],
        },
      ],
    },
  },
  outDir: '../dist',
});
