# ipbd-fast-vue使用文档

## 介绍

ipbd快速开发后台

## 安装
注意：需使用 nodejs 长期维护版本，如：[16.x]，能保证项目的稳定运行。

```bash
# 克隆项目
git clone https://github.com/itxaiohanglover/ipbd-fast-vue.git

# 进入项目
cd ipbd-fast-vue

# 安装依赖
npm install

# 运行项目
npm run dev

# 打包发布
npm run build
```

## 目录结构

```html
ipbd-fast-vue
├─public   静态文件
     ├─favicon.ico 网页图标
├─src      源文件
│    ├─api         接口模块
│    ├─assets      资源文件
│    ├─components  常用组件
│    ├─hooks       业务封装
│    ├─i18n        zh-CN.ts文件存放基础文本内容
│    ├─icons       svg图标
│    ├─layout      框架布局
│    ├─router      路由文件
│    ├─store       状态管理
│    ├─stypes      SCSS样式
│    ├─types       d.ts声明
│    ├─utils       常用工具
│    ├─views       业务视图
│    ├─App.vue     入口页面
│    ├─main.ts     入口文件，组件加载、初始化等
│ 
├─.env.development      开发环境配置
├─.env.production       生产环境配置
├─.eslintignore         eslint忽略的文件
├─.eslintrc.js          eslint规则配置
├─.prettierrc.js        prettier规则配置
├─components.d.ts       动态生成的
├─index.html            首页文件
├─package.json          依赖管理
├─tsconfig.json         TypeScript配置
├─vite.config.ts        Vite配置
```

## 注意

- 开发前需要先配置env.development中的后端接口地址（默认为演示环境接口地址 非正式接口）
- 在i18n文件的zh-CN中修改网站基础信息（项目名称，项目简介等）