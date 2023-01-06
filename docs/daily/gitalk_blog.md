最近在折腾Vitepress博客，差不多搭建好了，感觉如果没有评论功能，总是有点缺憾的。由于博客本身是用github pages 部署的，所以用 gitalk 来做评论似乎是很理想的，但是这个配置过程十分的曲折，决定写下来，希望能帮到后来者吧。

## 开始工作
参考了一下文档[vitepress配置评论(gitalk)](https://juejin.cn/post/7146037234527895560),基本上能看明白，但是代码不是很全，需要自己折腾一下，我先抄一下文章，后面再把遇到的问题和解决的方法写上

## 创建GitHub Application
使用gitalk之前，得先创建[GitHub Application](https://github.com/settings/applications/new)，为了后续提供给gitalk的两个数据， `Client ID`和`Client secrets`，如下图

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c9aba4ce7914ecfbcfea179207e0e43~tplv-k3u1fbpfcp-watermark.image?)

**注意：**
1. 本地调试的时候，修改`callback url`为本地服务的链接
2. Application新建好之后，要及时复制 `Client ID`和`Client secrets` 关闭之后，需要到如下路径去找
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b84e155379bd4edb823affe07f33a909~tplv-k3u1fbpfcp-watermark.image?)

## 安装
> 根据 gitalk 官方文档，有两种安装方式，但是我们只使用 npm 来安装

**注意：**
1. 官方版本目前是有bug的，因为github的api接口数据结构变了，导致了后面一系列的折腾
2. 为了解决这个问题，我自己fork了一个gitalk，并修了一下bug，所以，从我的github项目直接安装，功能是正常的。
3. 安装方式如下：
    1. 在package.json 中添加一下依赖包
    2. 执行 pnpm install

```json
{
  "devDependencies": {
    "sass": "^1.56.1",
    "vitepress": "1.0.0-alpha.30",
    "vue": "^3.2.45"
  },
  "scripts": {
    "start": "vitepress dev docs",
    "build": "vitepress build docs"
  },
  "dependencies": {
    "gitalk": "git://github.com/lesonky/gitalk.git"
  }
}
```
## 使用
想要在所有文章下面使用，但是又不想每个文章里面都去初始化，我们需要利用 Layout 来实现

在`.vitepress`下面新建一个`theme`的文件夹，创建两个文件`index.js`和`MyLayout.vue`，这个layout文件就是我们包装每个文章页面的根组件，

```html
<!--.vitepress/theme/MyLayout.vue-->
<template>
  <Layout>
    <template #doc-after>
      <div class="comment-container"></div>
    </template>
  </Layout>
</template>

<script setup>
import { onMounted, watch } from 'vue';
import 'gitalk/dist/gitalk.css';
import Gitalk from 'gitalk';
import DefaultTheme from 'vitepress/theme';
import { useRoute } from 'vitepress';

const { Layout } = DefaultTheme;

const route = useRoute();

const emptyNode = (node) => {
  //循环删除子元素，一直删除第一个子元素直到没有子元素即为清空
  while (node.hasChildNodes()) {
    node.removeChild(node.firstChild);
  }
};

const initGitalk = () => {
  if (typeof window !== undefined) {
    const s_div = document.createElement('div'); // 创建节点
    s_div.setAttribute('id', 'gitalk-page-container'); // 设置id
    const container = document.querySelector('.comment-container'); // querySelector的节点可自己根据自己想加载的地方设置
    if (container) {
      emptyNode(container);
      container.appendChild(s_div);
      const gitment = new Gitalk({
        id: { name: `${location.pathname.replace(/\W/g, '')}` }, // 可选。默认为 location.href
        owner: '*****', // GitHub repository 所有者
        repo: '**********', // GitHub repository
        clientID: '*************', // 自己的clientID
        clientSecret: '*************', // 自己的clientSecret
        admin: ['lesonky'], // GitHub repository 所有者
        labels: [{ name: 'Gitalk' }], // GitHub issue 的标签
        createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
        // proxy: "https://vercel.younglina.top/github_access_token",
      });
      gitment.render('gitalk-page-container');
    }
  }
};
onMounted(initGitalk);

watch(
  () => route.path,
  () => {
    initGitalk();
  }
);
</script>
```
这个Layout是自定义的，他做了几件事情：
1. 继承了原始的layout，这样可以保证功能。
2. 在`doc-after`插槽里面添加了gitalk节点，这样只有在 doc 类型的页面中才会出现评论，其他类型页面则不会出现
3. 监听了路由变化，在路由切换的时候，会重新拉取评论数据，如果不监听，页面只会在第一次的时候拉评论，导致换了文章评论却对不上。

定义好了Layout，我们需要使用一下，这里在index.js 中使用
```js
// .vitepress/theme/index.js

import Theme from 'vitepress/theme'
import './styles/vars.scss'
import './styles/style.scss'
import MyLayout from './MyLayout.vue'

export default {
  ...Theme,
  Layout: MyLayout
}
```
这样配置之后，基本就可以用了，但是如果是暗色主题，会发现输入框的字是白色的，输入框背景也是白色的，导致无法输入，所以我们需要再加入一点CSS来搞定这个事情
这段代码可以添加在`.vitepress/theme/styles/styule.scss`里面，如果没有，就自己建一个。

```css
.gt-container .gt-header-textarea{
    background-color: var(--vp-c-brand-dimm) !important;
}
```

以上，基本就完成了，下面来扯一下 gitalk 是怎么工作的，在这都是在排查问题的过程中摸索出来的。

## Gitalk工作原理（bug解析）
1. Gitalk 会根据配置中的 ID 和 Labels 来获取 配置中 repo 所指向的项目的一个 issue，
2. 如果没有，则显示找不到issue。这时候，如果你是本人账号，并且createIssueManually 配置是 true 则有一个初始化的按钮，点击一下，就会自动建一个issue，后续的评论都会在这个issue下面。如果 createIssueManually 配置是false，则会自动初始化一个issue。
3. 这个issue会使用当前页面的 title作为名字，用配置中的 id 和 Labels 作为标签。
4. **注意：** 问题就出在这里，老的github接口 Labels 是用的字符串数组，而现在需要对象数组，对象的格式为 `{name:'******'}`，所以我的配置和其他的资料里的不一样，我的 id 和 Labels 用的都是对象。
5. 评论和文章是通过 id + labels 来查询对应的issue，然后加载的，但是这个接口没改，他需要的是字符串数组，这导致了配置成对象的参数，找不到对应的issue，一直显示初始化按钮，或者一直自动新建issue。
6. 同时，因为只有新建接口变了。导致这个bug的表现就是，如果之前已经建过issue的页面，配置不变的情况下，是可以找到对应的issue的，也可以正常使用。如果你之前没有issue，则要么不能新建issue，要么无法查询到对应的评论
7. 分析完成后，我觉得这应该不是大问题，于是就改了一下，事实上和我分析得一样，很快就改完了，具体修改如下：

```js
// gitalk/src/gitalk.jsx  省略了其他代码，只修改了获取和创建的部分，兼容了对象和字符串的写法

getIssueByLabels () {
    const { owner, repo, id, labels, clientID, clientSecret } = this.options

    return axiosGithub.get(`/repos/${owner}/${repo}/issues`, {
      auth: {
        username: clientID,
        password: clientSecret
      },
      params: {
        labels: labels.concat(id).map(_ => typeof _ === 'string' ? _ : _.name).join(','),
        t: Date.now()
      }
    }).then(res => {
      const { createIssueManually } = this.options
      let isNoInit = false
      let issue = null
      if (!(res && res.data && res.data.length)) {
        if (!createIssueManually && this.isAdmin) {
          return this.createIssue()
        }

        isNoInit = true
      } else {
        issue = res.data[0]
      }
      this.setState({ issue, isNoInit })
      return issue
    })
  }
  
  createIssue () {
    const { owner, repo, title, body, id, labels, url } = this.options
    return axiosGithub.post(`/repos/${owner}/${repo}/issues`, {
      title,
      labels: labels.concat(id).map(_ => typeof _ === 'string' ? {name:_} : _),
      body: body || `${url} \n\n ${
        getMetaContent('description') ||
        getMetaContent('description', 'og:description') || ''
      }`
    }, {
      headers: {
        Authorization: `token ${this.accessToken}`
      }
    }).then(res => {
      this.setState({ issue: res.data })
      return res.data
    })
  }
```


