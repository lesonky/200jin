export default function buildSidebar() {
  return {
    '/daily/': [
      {
        text: '意识流乱打',
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
    ],
  };
}
