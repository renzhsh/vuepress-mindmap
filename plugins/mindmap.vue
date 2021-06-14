<template>
  <svg id="mindmap" class="not-select" :style="{ width: width, height: height }"></svg>
</template>
<script>
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";
export default {
  name: "mindmap",
  data() {
    return {
      markdown: "",
      options: null,
      width: "100%",
      height: "400px",
    };
  },
  mounted() {
    if (!this.$page.markdown) return;
    console.warn("一个页面仅能使用一次<mindmap>");

    this.markdown = this.$page.markdown;
    if (this.$page.mindmapWidth) {
      this.width = this.$page.mindmapWidth;
    }
    if (typeof this.width == "number") {
      this.width = `${this.width}px`;
    }

    if (this.$page.mindmapHeight) {
      this.height = this.$page.mindmapHeight;
    }
    if (typeof this.height == "number") {
      this.height = `${this.height}px`;
    }

    const transformer = new Transformer();

    // 1. transform markdown
    const { root } = transformer.transform(this.$page.markdown);

    const mm = Markmap.create(
      "svg#mindmap",
      this.options == null ? void 0 : this.options,
      root
    );
  },
};
</script>
<style scoped>
.not-select{
    -moz-user-select:none; /*火狐*/
    -webkit-user-select:none; /*webkit浏览器*/
    -ms-user-select:none; /*IE10*/
    -khtml-user-select:none; /*早期浏览器*/
    user-select:none;
}
</style>