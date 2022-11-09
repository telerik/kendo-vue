<template>
  <div>
    <Editor
      :tools="tools"
      :content-style="{
        height: '430px',
      }"
      :default-content="content"
      @blur="onBlur"
      @change="onChange"
      @execute="onExecute"
      @focus="onFocus"
      @loaded="onLoaded"
      :paste-html="onPaste"
    />
  </div>
</template>
<script lang="ts">
import { Editor } from '@progress/kendo-vue-editor';
import content from '../content';

export default {
  components: {
    Editor,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data: function () {
    return {
      tools: [
        ['Bold', 'Italic', 'Underline'],
        ['Undo', 'Redo'],
        ['Link', 'Unlink'],
        ['AlignLeft', 'AlignCenter', 'AlignRight'],
        ['OrderedList', 'UnorderedList', 'Indent', 'Outdent'],
      ],
      content: content,
      events: [],
    };
  },
  methods: {
    onChange(e) {
      console.log('Change event triggered.');
    },
    onBlur(e) {
      console.log('Blur event triggered.');
    },
    onExecute(e) {
      console.log('Execute event triggered.');
    },
    onFocus(e) {
      console.log('Focus event triggered.');
    },
    onLoaded(e) {
      console.log('Loaded event triggered.');
    },
    onPaste(e) {
      console.log('PasteHTML triggered.');
    },
  },
};
</script>
