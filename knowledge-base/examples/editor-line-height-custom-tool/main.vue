<template>
  <Editor
    :tools="tools"
    :default-content="content"
    :content-style="{
      height: '300px',
    }"
  >
    <template v-slot:MyLineHeight="{ props }">
      <fontsize v-bind="props" />
    </template>
  </Editor>
</template>

<script>
import {
  Editor,
  InlineFormat,
  FontName,
} from '@progress/kendo-vue-editor';
import content from './content-basic';

const lineHeightSettings = {
  style: 'line-height',
  defaultItem: {
    text: 'No Line Height',
    value: '',
  },
  items: [
    { text: '2', value: '2' },
    { text: '3', value: '3' },
    { text: '4', value: '4' },
    { text: '5', value: '5' },
    { text: '6', value: '6' },
    { text: '7', value: '7' },
  ],
  commandName: 'LineHeight',
};

export default {
  components: {
    Editor,
    inlineformat: InlineFormat,
    fontsize: FontName,
    fontname: FontName,
  },
  data() {
    return {
      content: content,
      tools: [{ render: 'MyLineHeight', props: lineHeightSettings }],
    };
  },
};
</script>
