---
layout: doc
title: 如何购买域名
---
# 如何购买域名
- 一般我们需要通过域名服务商来购买域名，这里介绍三个购买域名的途径，分别是 国内的阿里云，腾讯云，海外的 Godaddy。
- 阿里云和腾讯云在国内可以访问，且可以用支付宝或者微信付款，对国内用户比较友好，但是在国内购买域名是需要实名认证的，这个问题需要用户自己考虑。
- 海外服务来购买域名，可以尝试在 Godaddy 上购买，Godaddy 支持使用支付宝，且 Godaddy 上不需要实名认证。
- 亲们可以根据自己的需求自行选择域名服务商。

## 从阿里云购买域名
### 1. 首先登录[阿里云](https://account.aliyun.com/login/login.htm?oauth_callback=https://cn.aliyun.com/)
> 阿里云支持自家账号登录
> 阿里云链接：https://account.aliyun.com/login/login.htm?oauth_callback=https://cn.aliyun.com/

![阿里云支持自家账号登录](/images/reg_domain/cd6ad7a23f769f97e247c36c50b51fded98acc8e5e7398d311686e02a27eea8a.png)  
选择一个已经有的账号登录，或者注册一个新的账号都可以。

### 2. [填写个人或者企业信息](https://dc.console.aliyun.com/#/info-stencil/Management?type=common)
> 国内购买域名需要实名认证，这一点比较麻烦
> 进入控制台页面： https://dc.console.aliyun.com/#/info-stencil/Management?type=common
![图 3](/images/reg_domain/1fac9de6f34a65e9130f3547bacd4624511eeeaff18a8d68a20fe55e5b1797b4.png)  
- 根据需求，填写个人或者企业信息模板。
- 这一步可以域名注册后再做，但是后面弄可能需要修改域名配置，比较麻烦，所以还是先做完比较好。

### 3. 进入[万网](https://wanwang.aliyun.com/domain)挑选域名
> 万网链接：https://wanwang.aliyun.com/domain
- 输入想要的域名，点击查询。
- 挑选域名要注意几点：
    - 不要购买 `.cn`或者 `.com.cn` 结尾的域名，这样的域名无法注册 GWS 服务。
    - 根据自己的喜好挑选域名，如果域名被占用了。可以试着加一些前缀和后缀。
![图 2](/images/reg_domain/9e298fa93d425af477f09b21cdf26d6a63e3e76ffbb0772beb45bd72bab64fdf.png)  
- 挑选好域名后，点击“加入清单”
- 点击搜索框最右边的域名清单，弹出购物车
- 如果只是用来注册 GWS 的话，附加服务都不用买，直接结算。
- 跳转到结算页面，选择持有者信息，这是我们在上一步的时候设置的。
![图 4](/images/reg_domain/23f24f58136a116b5f15ae0cd7937a2d994546db52026e3a7b4a21e3cf2bc797.png)  
- 确认信息后，选择自己方便的支付方式，就可以支付了。
![图 5](/images/reg_domain/660e7a26ea2f081a44be16748841fd80de8a1aa69a7c3bc6f2e90fe1e54b6839.png)  
### 4. [查看购买的域名](https://home.console.aliyun.com/home/dashboard/ProductAndService)
- 进入阿里云控制台：https://home.console.aliyun.com/home/dashboard/ProductAndService
- 搜索域名
![图 6](/images/reg_domain/7d8901688822f2cf1052be2acda5fa695f88caacd74686f1bdcb61a6e8e5955f.png)  
- 进入域名控制台
- 我们购买的域名在“未实名认证域名”中，因为实名认证需要一些时间（大概几分钟，如果操作慢的话，可能不会看到这一步）
![图 7](/images/reg_domain/4da0e9ed92f885e2c9e88f9bb56e208103f038ebe4314a6a7169d13c04db1992.png)  
- 点击“全部域名”下面的数字进入页面，我们可以看到我们之前买的域名
![图 8](/images/reg_domain/b35beecbbdacc9a932dfd03eff08435a39ce63ecab0837a1e8d46703ed3d404a.png)  
- 这里就是设置 DNS 的入口，如何设置 DNS 我们将在[下一篇文章](/daily/gws/dns_setting)中介绍。
- 至此，你在阿里云上就拥有了一个自己的域名。

## 从腾讯云购买域名
### 1. [进入腾讯云域名购买网站](https://buy.cloud.tencent.com/domain/buy)
- 先登录网站，可以使用微信扫码登录，这很方便。
- 网址：https://buy.cloud.tencent.com/domain/buy

### 2. 查找自己想要的域名并购买
- 购买流程和阿里云很相似
- 同样的注意事项：
    - 不要购买 `.cn`或者 `.com.cn` 结尾的域名，这样的域名无法注册 GWS 服务。
    - 根据自己的喜好挑选域名，如果域名被占用了。可以试着加一些前缀和后缀。

![图 10](/images/reg_domain/9227298804d455ab3fc206761ae412ca204a08f53d3732d6f202e09b3ea447bc.png)  
- 同样需要提交实名信息，但是这里可以在购买页面直接填写

![图 11](/images/reg_domain/6b85c9babb4dff79c180b345eac44bca37fc8f1473e327b8df1a68ee39ac42af.png)  
- 填写完成后，就可以直接付款了，付款完成后，我们同样可以去后台查看我们购买的域名
- 腾讯云域名控制台地址：https://console.cloud.tencent.com/cns

![图 12](/images/reg_domain/251c2cea12eaedc91cfb572b45adf251ccd16273d8d56601b3a8939024772466.png)  
- 这里可以设置 DNS 解析，如何设置 DNS 我们将在[下一篇文章](/daily/gws/dns_setting)中介绍。

## 通过 Godaddy 购买
### 1. 进入 [Godaddy 网站](https://www.godaddy.com/domainsearch/find)
- 这个网站是有中文的，根据你访问的节点来判断，所以如果你开了魔法，可能会显示英文。
- 注册并购买 Domain 的流程是差不多的。
- 不详细介绍购买流程了，这个网站的流程还是比较好流畅的。
- 购买域名的价格要注意原价和第一年的价格，第一年的价格往往比较低，但是后续续费的价格就是原价了，要特别注意，有些域名第一年只要十几块钱，但是续费需要好几百，如果长期使用又考虑成本的话，不建议选择这样的域名。
- 购物车里面内容比较多，记得去掉不必要的项目，减少开支。
- 最后结算的时候，添加结算信息，支付方式可以选`支付宝`
- 这里给一个参考价格，一个 com 结尾的域名，一年期的价格大概在 100 块钱以下，如果你的价格比这个高，可能是你的域名比较好，或者是附加了服务，记得退回去，把不必要的服务取消.
![图 13](/images/reg_domain/52707858fcf172a522b8aa58250063081b69d692882057efa6a58b6a343c9741.png)  
- 购买完成后，点击进入控制台，我们就可以找到刚刚购买的域名了(这里不是上图里面那个域名，我选了一个冷门的后缀，比较便宜)
![图 14](/images/reg_domain/d4adb84f8a4dc463087aff9c30b44dfdbe53a4e0e3aefab22cde24780b3a6ca3.png)  
PS： 我这个域名用来做演示，购买了 1 年，费用为 14 元人民币，还是比较合算的。

### 2. 设置 DNS 的操作请看[下一篇文章](/daily/gws/dns_setting)