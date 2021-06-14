const { path } = require('@vuepress/shared-utils')
module.exports = {
    extendPageData($page) {
        const {
            _strippedContent,    // 源文件剔除掉 frontmatter 的内容字符串
            frontmatter,         // 页面的 frontmatter 对象
        } = $page

        $page.mindmapWidth = frontmatter.mindmapWidth;
        $page.mindmapHeight = frontmatter.mindmapHeight;

        if (!_strippedContent) return;

        var content = _strippedContent;

        const startToken = '<mindmap>';
        const endToken = '</mindmap>';

        var startIndex = content.indexOf(startToken);
        var endIndex = content.indexOf(endToken);

        if (startIndex == -1 || endIndex == -1) return;
        var markdown = content.substring(startIndex + startToken.length, endIndex);

        $page.markdown = markdown;

    },
    enhanceAppFiles: [
        path.resolve(__dirname, 'enhanceAppFile.js')
    ]
}