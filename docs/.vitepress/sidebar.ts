export default function buildSidebar() {
  return {
    '/daily/': [
      {
        text: '意识流',
        collapsible: true,
        items: [{ text: '关于这里', link: '/daily/' }],
      },
      {
        text: '搭建博客',
        collapsible: true,
        items: [
          { text: 'Vitepress 搭建博客', link: '/daily/build_vitepress_blog' },
          { text: 'Github Pages 发布博客', link: '/daily/publish_blog' },
          { text: 'Github Actions 自动化部署', link: '/daily/ci_blog' },
          { text: '添加gitalk支持', link: '/daily/gitalk_blog' },
        ],
      },
      {
        text: 'GWS 注册和购买',
        collapsible: true,
        items: [
          { text: '新手指南', link: '/daily/gws/buy_gws' },
          { text: '如何购买域名', link: '/daily/gws/reg_domain' },
          { text: '如何通过 GWS 域名认证', link: '/daily/gws/dns_setting' },
        ],
      },
    ],
  };
}
