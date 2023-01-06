---
layout: doc
title: 如何通过 Vitepress 搭建一个博客
---

# 如何通过 Vitepress 搭建一个博客

## 不废话,直接开工吧
:::info 嘿嘿嘿
推荐直接看文档,但是我还是会抄一下,要不怎么水文章呢,嘿嘿嘿
:::

```js
// 1、创建项目并初始化package.json
mkdir my_blog 
cd my_blog
pnpm init

//2、安装vitePress和vue3.0
pnpm i vitepress vue -D

//3、创建文件夹docs，并在其中添加一个md文档index.md
mkdir docs && echo '# Hello VitePress' > docs/index.md

//4、在package.json中添加scripts脚本
  "scripts": {
    "dev": "vitepress dev docs",
    "build": "vitepress build docs",
    "serve": "vitepress serve docs"
  },
  
//5、通过命令运行项目
pnpm dev
```

ε=(´ο｀*)))唉,感觉照着文档抄这个,好傻,不抄了,大家还是照着文档看看吧,我们来写点高级的

[中文文档:smile::+1:](https://process1024.github.io/vitepress/guide/getting-started) :100:

## 研究一下配置吧
回归初心,我原来就是为了应付备案检查,所以先配置一下备案信息吧,[文档在这里](https://process1024.github.io/vitepress/guide/theme-footer)

1. 先新建一个配置文件`config.ts`,文件结构如下:
```text
.
├─ docs
│  ├─ .vitepress
│  │  └─ config.ts
│  └─ index.md
└─ package.json
```

2. 添加配置,`config.ts`如下( 配置如下,去除掉其他配置 )
```ts
import { defineConfig } from 'vitepress';

export default defineConfig({
  themeConfig: {
    footer: {
      message: '<a href="https://beian.miit.gov.cn/">苏ICP备2020067590号</a>',
      copyright: 'Copyright © 2022-12-06 ～ present Wukoon',
    },
  },
});
```
各种配置很多,文档写得很细,[查看文档,好好学习](https://process1024.github.io/vitepress/guide/theme-introduction)

::: tip ε=(´ο｀*)))唉
所以说,写教程很麻烦,因为文档明明写得很全,抄写一遍真的好傻,实在是不想抄,但是水文章是刚需啊,得写点文档里面没有的.
:::

## 研究一下编辑器吧

我觉得这个可以写写,毕竟,这是一个Blog,写文章才是重要的,作为一个程序员,我决定万物归于`vscode`,写blog,需要解决的第一个问题就是图片存储,俗话说,无图言🐦

添加插件(Markdown Image)
![图 1](/images/build_vitepress_blog/ba61c3d4b8b4e8c69b5cfa658390a435b926d4ec76962b0921907b95fc6906cf.png)  
这个插件支持很多图床设置,但是最简单的就是存在项目里面,毕竟github不要钱,虽然速度有点慢,但是所有文章和图片都在自己手上,是不是安全感满满.

添加**项目配置**(这种插件,每个项目配置都不一样,所以添加在项目配置中比较好):

![图 2](/images/build_vitepress_blog/1d9d43341f1bb4c5b1a2101a0190a6f4639d9fa191e3a3c4eaec98dc92c042c2.png)  

这时候,项目中会多一个文件`.vscode/setting.json`
```json
{
    "markdown-image.local.path": "/docs/public/images",
    "markdown-image.base.fileNameFormat": "${mdname}/${hash}",
    "markdown-image.local.referencePath": "/images/${mdname}/"
}
```
解释一下配置:
1. 本地图片存储位置`/docs/public/images`,`public/images`目录在编译之后会被拷贝到输出目录的根目录下,可以通过`images/XXXXX`来访问.
2. 存储文件格式为 `文件名/hash` ,用文件名做一下隔离,便于找到图片.
3. 自动插入文档时代码 `[图 1](/images/文件名/hash.png)`

配置完成后,就可以直接在 markdown 文档中直接粘贴截图了,Mac 版本的快捷键为`Option+shift+v`,截图回自动保存,并插入`markdown`图片链接,十分的丝滑.

没有`emoji`的文档,多少有点无聊,但是在markdown中加入emoji有点麻烦,所以需要加一个插件来解决这个问题

添加插件(:emojisense:)
![图 3](/images/build_vitepress_blog/3ad9ad49d345d945c9345bc501320e42d3cc9d983f59de4f26eed41fe6894207.png)  

现在可以开始快乐输入了,在markdown文档中,键入`::` 弹出提示.

![图 4](/images/build_vitepress_blog/8577f3149fa91838b18e6aa74ec6c6a8552d2d22831de29f274b568c1dc3a4c7.png)  

::: tip 就这样吧
写到这里,一个Blog就差不多了,写文档也很方便了, 但是写了blog不是为了自己看啊,需要部署出去,不装得儿,写啥blog :sunglasses:
,看下一篇文章,我们通过 github page 来部署吧
:::