# react-redux-sass-webpack-boilerplate

一个使用 React, Redux, React-Router-Dom, Sass, Webpack 的简单样板

## 语言

- 中文
- [English](README.md)

## 项目依赖

- [React](https://reactjs.org)
- [Redux](https://github.com/reduxjs/redux)
- [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Sass](https://sass-lang.com)
- [Webpack](https://webpack.js.org)

## 环境依赖

Make sure you have Node.js >= 18.0.0 installed on your machine.

## 安装

```bash
npm install
```

安装依赖的 node_modules

在项目根目录建立环境配置文件，格式可以参考 `.env.example` 文件中的格式，建立 `.env.local` 用于本地开发，建立 `.env` 用于正式环境。
在代码中使用 `process.env.XXX` 访问其中定义的值。

## 开发

```bash
npm run start
```

## 打包

```bash
npm run build
```

打包后会在根目录生成一个 /dist 目录，入口文件为 `index.html`，将此目录放置于服务器使用类似 nginx 等工具进行配置即可。
