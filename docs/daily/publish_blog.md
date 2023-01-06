---
layout: doc
title: Github Pages 发布博客
---
# Github Pages 发布博客
## 部署准备

github 的 pages 服务,可以为每个项目提供一个页面,地址是 `{username}.github.io/{repo}/`

每个用户都可以建一个仓库,名字为 `{username}.github.io` ,这个仓库开启page服务后,地址就是`{username}.github.io` 没有后缀.

如果作为主力Blog,最好放在`{username}.github.io`中.

1. 新建仓库`{username}.github.io`
2. 将blog项目build结果(`.vitepress\dist`)提交到仓库.

## 开启 Pages 服务
![图 1](/images/publish_blog/3c4612417bcd389d571f7a51507d3fe26c65ef8d30f3976eb4c841c3e5320d8c.png)  

## 自定义域名

### 配置github
如果你有自己的域名,并且想用自己的域名,可以在 Pages 服务添加自定义域名配置
![图 2](/images/publish_blog/66f02f5819815681875746524e107fc8d7dcf6f08d64811815d9459e9d6b00bf.png)  

配置完成之后,会生成一个`CNAME`文件,在项目根目录下,但是这个仓库我们并不想自己维护,是自动生成的,所以需要每次生成的时候`CNAME`文件都需要带上:

1. 拷贝`CNAME`文件
2. 粘贴到博客项目中`docs/.vitepress/public`的目录下.
![图 4](/images/publish_blog/86d2dbf92e0bbb47a4840cb0afb4a1bf206ce28a7f3dd0eba10ea09adcfb09e8.png)  

### 配置DNS
1. 打开域名管理后台(我域名是在阿里云买的,所以这里用阿里云做示例)
2. 添加一条解析记录

![图 3](/images/publish_blog/bd870e1811408e0a6c40e1929bfbe6f3528cbecf7a584c73b18a0f4cde37c3b0.png)  

这样,就可以通过自己的域名来访问了

::: tip 温馨提示
这里修改了域名,之后所有的pages服务,都会在这个域名下
:::

还有一个问题需要解决,就是自动发布,我只想写文档,并不想自己build,拷贝目录啥的,这些事情还是自动化吧.

**下一篇,我们开始利用 Github Actions 自动部署**
