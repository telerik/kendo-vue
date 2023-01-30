<template>
  <Editor
      :tools="tools"
      :content-style="{
        height: '630px'
      }"
      :value="value"
      @change="onChange"
    />
     {{value}}
</template>

<script lang="ts">
import { Editor, EditorTools,
  EditorUtils,
  ProseMirror, } from "@progress/kendo-vue-editor";

export default {
    components: {
       Editor
    },
    data () {
      return {
        tools: [
        ['Bold', 'Italic'],
        ],
        value:   EditorUtils.createDocument(
          new ProseMirror.Schema({
            nodes: EditorUtils.nodes,
            marks: EditorUtils.marks,
          }),
          "<p>Editor sample content</p>"
        )
      };
    },
    methods: {
      onChange(event) {
        this.value = event.value;
      }
    }
};
</script>

