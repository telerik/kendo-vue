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
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>
<script>
import { Editor } from '@progress/kendo-vue-editor';
import content from './content';
import Logger from './Logger.vue';

export default {
  components: {
    Logger,
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
      this.events.unshift('Change event triggered.');
    },
    onBlur(e) {
      this.events.unshift('Blur event triggered.');
    },
    onExecute(e) {
      this.events.unshift('Execute event triggered.');
    },
    onFocus(e) {
      this.events.unshift('Focus event triggered.');
    },
    onLoaded(e) {
      this.events.unshift('Loaded event triggered.');
    },
    onPaste(e) {
      this.events.unshift('PasteHTML triggered.');
    },
  },
};
</script>
