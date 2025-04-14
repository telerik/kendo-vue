<template>
  <div>
    <Editor
      :tools="[['Bold', 'Italic', 'Underline'], ['ViewHtml']]"
      :content-style="{
        height: '360px',
      }"
      :default-content="content"
      @execute="onExecute"
    />
    <br />
    Selected HTML
    <k-textarea
      ref="htmlAreaRef"
      :style="{ height: '100px', width: '100%', resize: 'none' }"
      :value="htmlAreaRefValue"
      :read-only="true"
    />
    <br />
    <br />
    Selected Text
    <k-textarea
      ref="textAreaRef"
      :style="{ height: '100px', width: '100%', resize: 'none' }"
      :value="textAreaRefValue"
      :read-only="true"
    />
  </div>
</template>

<script>
import { TextArea } from "@progress/kendo-vue-inputs";
import { Editor, EditorUtils } from "@progress/kendo-vue-editor";

import content from "./content";

export default {
  components: {
    Editor,
    "k-textarea": TextArea,
  },
  data() {
    return {
      tools: [["Bold", "Italic"]],
      content: content,
      textAreaRefValue: null,
      htmlAreaRefValue: null,
    };
  },
  methods: {
    onExecute(event) {
      const { doc, selection } = event.transaction;
      let selectionHtml = "";
      let selectionText = "";

      if (!selection.empty) {
        const node = doc.cut(selection.from, selection.to);
        selectionHtml = EditorUtils.getHtml({
          doc: node,
          schema: node.type.schema,
        });
        selectionText = node.textContent;
      }

      if (this.$refs.htmlAreaRef) {
        this.htmlAreaRefValue = selectionHtml;
      }

      if (this.$refs.textAreaRef) {
        this.textAreaRefValue = selectionText;
      }
    },
  },
};
</script>
