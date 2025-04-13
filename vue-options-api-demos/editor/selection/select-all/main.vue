<template>
  <div>
    <Editor
      :tools="tools"
      :content-style="{
        height: '320px',
      }"
      :default-content="content"
      ref="editor"
    />
  </div>
</template>

<script>
import { Editor, ProseMirror } from '@progress/kendo-vue-editor';
import content from './content.js';
const { AllSelection } = ProseMirror;

export default {
  components: {
    Editor,
  },
  mounted() {
    this.setEditorTextSelection();
  },
  data() {
    return {
      tools: [['Bold', 'Italic', 'Underline'], ['ViewHtml']],
      content: content,
    };
  },
  methods: {
    setEditorTextSelection(anchor, head) {
      const view = this.$refs.editor.getView();
      if (!view) {
        return;
      }
      const doc = view.state.doc;
      const selection = new AllSelection(view.state.doc);
      const transaction = view.state.tr; // state.tr - Starts a transaction from this state.
      transaction.setSelection(selection);
      view.dispatch(transaction);
      view.focus();
    },
  },
};
</script>
