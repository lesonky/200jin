---
layout: doc
title: 如何通过 GWS 域名认证
---
# 如何通过 GWS 域名认证
- 首先我们需要有一个域名，如果没有还没有，请参考[文章：如何购买域名](/daily/gws/reg_domain)购买自己的域名。
- 其次，我们要知道 google 域名验证的本质就是为了确认域名的控制权在用户手中
- google 有多种方式来验证域名，我们选最简单的一种：设置 TXT 记录值来做验证。这是大多数用户使用的方式，也是比较方便的一种方式。

## 1. 获取 TXT 记录值
每一个域名都会有一个唯一的记录值，只有域名和记录值可以匹配的时候，才能通过域名验证，所以，只有可以设置 DNS 的用户才可以通过域名验证。
1. 打开小程序

【TODO：小程序截图】

2. 进入「我的」页面，登录小程序。
3. 点击「域名检查工具」

【TODO：域名检查工具截图】

4. 输入你的域名，并点击「获取 Token」
    - 比如你注册了域名「abc.com」
    - 这里可以直接用 「abc.com」
    - 也可以使用 「xxxx.abc.com」
    - 注意，你这里填的域名，后续设置解析的时候需要用，请记住你填的值。
5. 复制获得的 Token ，发送到电脑端，备用。

## 2. 设置 DNS 解析记录
同样，我们还分三个平台来说明，阿里云，腾讯云和 Godaddy。你在哪个平台购买的域名，就去哪个平台去设置。
设置过程大同小异，但是由于国内的云平台功能比较多，我会把每个页面链接贴出来，方便大家按图设置，不会出错。

### 阿里云设置 DNS 解析记录
1. 登录[阿里云](https://account.aliyun.com/login/login.htm)
2. 右上角，点击控制台
3. 进入控制台后，搜索「域名」
![图 0](/images/dns_setting/bf5450a6793e5a845b165648e9953b4c4962e2bf2282fafabcf487446d6840f0.png)  
4. 点击进入域名管理页面，点击如图位置，进入域名列表页面，（也可以在右侧菜单点击域名列表菜单，效果一样）
![图 1](/images/dns_setting/b64bad1998c883a299ef53c9f44caca970b2098ebef9840d8878e39faeca1a2c.png)  
5. 选择你刚刚用来获取 Token 的域名，点击列表后的「解析」
![图 2](/images/dns_setting/125f6ad39baf3c96d3e808516d53578c39ae50e21a8b0b9fa09ad0a67bdf48b0.png)  
6. 如果有新手指引，直接关闭。
7. 点击「添加记录值」
![图 3](/images/dns_setting/9b72d2b343e455efd8e7025d59562d28483c0b64ef9f2edc1f1299c28c88b45b.png)  
8. 根据下图提示，完成配置
![图 4](/images/dns_setting/4917982dd616f768e54bf01e601a5bb01c90007b88dbb54fb04c5a1a02d05771.png)  
9. 完成设置

### 腾讯云设置 DNS 解析记录
1. 登录[腾讯云域名控制台](https://console.cloud.tencent.com/cns)
2. 选择你刚刚用来获取 Token 的域名，点击列表后的解析
![图 5](/images/dns_setting/a39340f9b0a635b017f1bd4ca71422b8abaf5cfae366ee126ad540eec5d382f4.png)  
3. 根据下发图片，完成配置
![图 6](/images/dns_setting/9810420907312552110d0a2d2ed4ee745d8c58ad57f3c4a66f6bc25598c9cdf7.png)  

### Godaddy 设置 DNS 解析记录
1. 登录 [Godaddy](https://www.godaddy.com)
2. 点击右上角用户名
![图 7](/images/dns_setting/8923068eed1c203faa9f1e8f905705c1a79b613adaa4cf2a7ce636074bca199d.png)  
3. 找到你的域名，并点击 DNS
![图 8](/images/dns_setting/8ff3789dce40f626d4bc2e3b5d9db15db77357c9bbcefe154ca76bb253a31bdb.png)  
4. 点击添加记录
![图 9](/images/dns_setting/5d1470c37a401ebe4b1b3ebbe04cafcff2876ecd4a6b29c14df5b4041b62a09b.png)  
5. 按照下图完成配置
![图 10](/images/dns_setting/43c6c173034ec2f069983897ef306decb7a1fcd0ded9b291fa48885c90afb961.png)  


## 3. 去下单吧
如果你通过我们的小程序购买 GWS 服务，那么你可以使用这个配置后的域名，你只需要提供一些注册信息选择你的套餐和用量，剩下的事情就交给我们就可以了。
