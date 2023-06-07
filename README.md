# react-redux-sass-webpack-boilerplate

- [中文](README.zh.md)
- English

A boilerplate using React, Redux, React-Router-Dom, Sass, Webpack

## Project dependencies

- [React](https://reactjs.org)
- [Redux](https://github.com/reduxjs/redux)
- [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Sass](https://sass-lang.com)
- [Webpack](https://webpack.js.org)

## Project dev dependencies

Make sure you have Node.js >= 18.0.0 installed on your machine.

## Installation

```bash
npm install
```

To install all the dependencies.

Create a `.env.local` file in the root directory of the project, the format can refer to the format in the `.env.example` file, create `.env.local` for local development, and create `.env` for the production environment.

## Development

```bash
npm run start
```

## Production

```bash
npm run build
```

After the package is generated, a `/dist` directory will be generated in the root directory, and the entry file is `index.html`. Place this directory on the server and use tools such as nginx for configuration.
