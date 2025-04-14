<template>
  <div>
    <Editor
      :tools="tools"
      :content-style="{
        height: '170px',
      }"
      :default-content="content"
    />
  </div>
</template>

<script>
import { Editor } from '@progress/kendo-vue-editor';
import { content } from './content';

export default {
  components: {
    Editor,
  },
  data() {
    return {
      tools: [['Bold', 'Italic', 'Underline'], ['ViewHtml']],
      content: content,
    };
  },
};
</script>
