<template>
  <Editor
    :tools="tools"
    :default-content="content"
    :content-style="{
      height: '300px',
    }"
    @loaded="onLoaded"
  />
</template>

<script>
import { Editor } from "@progress/kendo-vue-editor";
import content from "./content";
const styles = `
    p {
        color: #53d2fa;
    }
`;
export default {
  components: {
    Editor,
  },
  data() {
    return {
      tools: [["Bold", "Italic", "Underline"]],
      content: content,
    };
  },
  methods: {
    onLoaded(event) {
      const iframeDocument = event.dom.ownerDocument;
      const style = iframeDocument.createElement("style");
      style.appendChild(iframeDocument.createTextNode(styles));
      iframeDocument.head.appendChild(style);
    },
  },
};
</script>

