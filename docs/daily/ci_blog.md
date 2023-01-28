---
layout: doc
title: Github Actions 自动化部署
---
# Github Actions 自动化部署

## Github actions 简介

科普还得看阮一峰,先看看[阮一峰的博文](https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html),科普一下.

看归看,但是这篇文章老了,里面的配置目前没法用了.了解一下概念,我们开工

## 部署流程
![图 1](/images/ci_blog/e26e76f06722b1822bea626420f60f51570464fd08589fc1711a076a3d629649.png)  

### 这里需要做些准备
1. 准备一套秘钥,用于自动化脚本提交代码时使用,[参考文档](https://github.com/JamesIves/github-pages-deploy-action/tree/dev#using-an-ssh-deploy-key-)
```bash
# -f 后面是文件名
# 注意修改 email 地址
ssh-keygen -f my_blog -t rsa -m pem -b 4096 -C "youremailhere@example.com" -N ""
```
2. 生成两个文件,一个` my_blog`,一个`my_blog.pub`
3. 将`my_blog.pub`的内容复制下来,添加到`{username}.github.io`这个仓库的 `deploy key` 中
![图 2](/images/ci_blog/99efcc115b99f31739ac3054a02caf90595aeca7f2b42cc47de2f39ef4212de2.png)  
4. 将`my_blog`的内容复制下来,添加到 `blog代码`这个仓库的 `secrets`中,这里取名`DEPLOY_KEY`,在脚本中用 `secrets.DEPLOY_KEY` 来读取这个值
![图 3](/images/ci_blog/46a1d4b0e3de3c311969c46e4cf7db8a8599fb8a282eb5c39aa339b3dc042a18.png)  

### 添加打包脚本
1. 在`blog代码`这个仓库,新建文件夹`.github/workflows`
2. 在`.github`文件夹中添加一个`yml`文件,文件名随意
![图 4](/images/ci_blog/d244c34976e98218dba9be8a550eb9a33eac925164d66c913d544e7db806ffa9.png)  
3. 添加脚本
```
name: Blog Deploy
permissions:
  contents: write
on:
  push:
    branches:
      - main
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Install and Build 🔧
        run: |
          npm install
          npm run build

      - name: Build and Deploy
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          folder: docs/.vitepress/dist # 如果 vitepress 没有配置 outDir,这里就是这个值,如果配置了 outDir ,这里就填写打包输出目录
          clean: true
          ssh-key: ${{ secrets.DEPLOY_KEY }} # 这里就是第四步添加的参数
          branch: main
          repository-name: ************************ # 替换成自己 blog 仓库,如 username/username.github.io

      - name: Invoke Cloudflare Webhook
        uses: distributhor/workflow-webhook@v2
        env:
          webhook_url: ${{ secrets.CLOUDFLARE_WEBHOOK_URL }}
```

脚本解析:
1. 在推送`main`分支时触发
2. 在 `ubuntu-latest` 上运行
3. 首先拉取代码
4. 安装依赖,`buid`
5. 把`buid`的结果推送到`repository-name`配置的仓库中
6. 触发cloudflare的webhook,同步更新cloudflare的pages

:::info 触发cloudflare webhook
我在cloudflare上做了一个备份,而且cloudflare的pages服务速度更快,为了同步,我在脚本的结尾加了一步,触发cloudflare 的webhook,这样就能保证同步了
:::

在加一个评论功能,Blog就全了,下一篇,我们来通过 Gitalk 加上评论功能