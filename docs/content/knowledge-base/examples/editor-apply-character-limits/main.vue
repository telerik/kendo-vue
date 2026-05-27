<template>
  <Editor
    :tools="tools"
    :content-style="{ height: '100px' }"
    @change="onChange"
    :value="value"
  />
  <Hint :id="'editorHint'"> {{ length }}/{{ maxLength }} </Hint>
</template>

<script setup>
import { ref } from 'vue';
import { Editor } from '@progress/kendo-vue-editor';

const tools = [['Bold', 'Italic']];
const maxLength = 100;
const length = ref(21);
const value = ref('<p>Editor sample content</p>');

function onChange(event) {
  const textContent = event.value.textContent;
  if (textContent.length <= maxLength) {
    value.value = event.html;
    length.value = textContent.length;
  }
}
</script>
