# vuepress-mindmap

[Demo](https://thinking.renzhansheng.cn/devops/markdown/#思维导图)

## Project setup
```
npm install
npm run serve
npm run build
```

- [Markmap 官网](https://markmap.js.org/)

```
// 全局安装
cnpm install markmap-cli -g

// render Html
markmap note.md
```

## Publish Npm Packages
npm官方规范建议的包至少包含：

+ package.json（包的基本信息）
+ README.md（文档）
+ index.js （入口文件）


```
cd dist // 进入发布目录
npm login // 登录
npm publish // 发布
```