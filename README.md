# vue-demo

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### element-ui docs
https://element.eleme.cn/2.0/#/zh-CN/component/form

### sentry
demo - sentry demo - https://github.com/kamilogorek/sentry-vue-sourcemaps
上传source map到sentry服务的插件 - https://github.com/40thieves/webpack-sentry-plugin
- step
  - 依赖、sentry init
  - build
  - release
  - serve启动测试
#### sentry-cli
curl全局安装
```
curl -sL https://sentry.io/get-cli/ | bash
```
release msourceMap
```
sentry-cli releases files 'vodapay-test1.0' upload-sourcemaps './dist'
```
