<template>
  <Editor
    :tools="tools"
    :default-content="content"
    :content-style="{ height: '300px' }"
  >
    <template #MyLineHeight="{ props }">
      <FontName v-bind="props" />
    </template>
  </Editor>
</template>

<script setup>
import { Editor, FontName } from '@progress/kendo-vue-editor';
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

const tools = [{ render: 'MyLineHeight', props: lineHeightSettings }];
</script>
