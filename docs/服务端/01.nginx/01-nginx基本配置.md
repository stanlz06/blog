---
title: nginx基本配置
date: 2022-06-01 11:35:26
permalink: /nginx/base
categories: 
  - nginx
tags: 
  - nginx
---

# nginx基本配置


## 前端路由使用history模式

**try_files**属性会到硬盘里尝试找这个文件，当请求的url在 **$uri $uri/** 匹配路径下都找不到最后访问index.html。

```conf
location / {
    root   html;
    index  index.html index.htm;
    # 防止前端基于history模式路由刷新页面404
    try_files $uri $uri/ /index.html;
}
```

## 设置跨域代理请求

```conf
server {
    listen       3001;

    server_name  localhost;
    
    location /api/ {
        # 替换请求url的/api/前缀
        rewrite ^/api/(.*) /$1  break;

        # 允许跨域的ip地址 如果设置成*时Access-Control-Allow-Credentials true;会失败
        add_header Access-Control-Allow-Origin http://localhost:3000;

        # add_header Access-Control-Allow-Headers *;
        # 允许跨域的请求头
        add_header Access-Control-Allow-Methods "GET, POST, PUT, OPTIONS";

        # 允许跨域携带cookie
        add_header Access-Control-Allow-Credentials true;

        # 当请求是OPTIONS预检请求时 返回200 或者 204
        if ($request_method = 'OPTIONS') {
            return 200;
        }

        # 代理需要转发的目标地址
        proxy_pass http://localhost:8888;
    }
}
```

假设前端是在**localhost的3000端口**允许发送一个**http://localhost:3001/api/demo/test**的请求，由于访问的是3001端口访问的是nginx服务器，nginx会将 **/api/** 前缀去掉然后设置跨域的响应头并转发到**http://localhost:8888**地址，所以最后转发的请求地址是**http://localhost:8888/demo/test**.

## nginx 配置缓存
```conf
location /test/ {

  if ($request_uri ~* .*[.](js|css|map|jpg|png|svg|ico)$) {
    # 非html缓存1个月 也可以使用expires来设置 这一步都是设置强缓存。
    add_header Cache-Control "public, max-age=2592000";
  }

  if ($request_filename ~* ^.*[.](html|htm)$) {
    # html文件设置协商缓存，也就是每次都询问服务器，服务器会根据Etag 和 Last-Modified来判断是否命中协商缓存，如果命中则返回304状态。
    add_header Cache-Control "public, no-cache";
  }
}
```

## 开启gzip

```conf
http {
  # 开启gzip
  gzip on;

  # 启用gzip压缩的最小文件；小于设置值的文件将不会被压缩
  gzip_min_length 1k;

  # gzip 压缩级别 1-10 
  gzip_comp_level 2;

  # 进行压缩的文件类型。
  gzip_types text/plain application/javascript application/x-javascript text/css application/xml text/javascript application/x-httpd-php image/jpeg image/gif image/png;

  # 是否在http header中添加Vary: Accept-Encoding，建议开启
  gzip_vary on;
}
```
