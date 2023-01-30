<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '100px' }"
    @change="onChange"
    :value="value"
  />
</template>
<script>
import { defaultMarkdownParser } from 'prosemirror-markdown';
import { markdown } from './markdown.js';
import { Editor } from '@progress/kendo-vue-editor';

const a = defaultMarkdownParser.parse(markdown);

export default {
  components: {
    Editor,
  },
  data() {
    return {
      tools: [['Bold', 'Italic']],
      value: a
    };
  },
  methods: {
    onChange(event) {
      this.value = event.value;
    },
  },
};
</script>
