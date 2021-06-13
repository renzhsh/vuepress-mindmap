<template>
  <div id="markmap">
    <svg id="mindmap" style="width: 800px; height: 800px"></svg>
  </div>
</template>

<script>
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";

export default {
  data() {
    return {
      mdContent: "# Title 1",
      options: null,
    };
  },
  mounted() {
    const transformer = new Transformer();

    // 1. transform markdown
    const { root } = transformer.transform(this.mdContent);

    const mm = Markmap.create(
      "svg#mindmap",
      this.options == null ? void 0 : this.options,
      root
    );

    // const toolbar = new Toolbar();
    // toolbar.attach(mm);
    // const el = toolbar.render();

    // el.setAttribute("style", "position:absolute;bottom:20px;right:20px");

    // document.getElementById("markmap").append(el);
  },
};
</script>
