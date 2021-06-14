# vuepress-plugin-mindmap

+ 一个[VuePress](https://vuepress.vuejs.org/zh/plugin/)插件
+ 将MarkDown渲染成思维导图
+ 使用组件[Markmap](https://markmap.js.org/)



## install
```
npm install vuepress-plugin-mindmap
```

## Demo

```md
<mindmap>
# mindmap
## Links
- <https://thinking.renzhansheng.cn/>
- [GitHub](https://github.com/renzhsh/vuepress-mindmap
## Related
- [Document](https://thinking.renzhansheng.cn/devops/markdown/#思维导图)
## Features
- links
- **inline** ~~text~~ *styles*
- multiline
  text
- `inline code`
</mindmap>
```

+ 一个页面只能有一个`<mindmap>`;
+ `<mindmap></mindmap>`内部不能有空格，容易造成编译失败;
+ 在`Front Matter`部分指定宽度和高度,默认`100%`和`400px`：

```yaml
mindmapWidth: '100%'
mindmapHeight: '400px'
```

## Markmap
```
// 全局安装
cnpm install markmap-cli -g

// render Html
markmap note.md
```