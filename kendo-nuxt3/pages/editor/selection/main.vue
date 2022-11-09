<template>
<div>
  <Slider
        :style="{
          width: '100%'
        }"
        :value="start"
        :step="1"
        :min="0"
        :max="contentSize"
        @change="onSliderValueChangeStart"
      />
      <Slider
        :style="{
          width: '100%'
        }"
        :value="end"
        :step="1"
        :min="0"
        :max="contentSize"
        @change="onSliderValueChangeEnd"
      />
      {{`Selection: ${JSON.stringify({
        start,
        end,
      })}`}}
      &nbsp;
  <Editor
      :tools="tools"
      :content-style="{
        height: '320px'
      }"
      :value="value"
      @change="handleValueChange"
      ref="editor"
    />
  </div>
</template>

<script lang="ts">
import { Slider } from "@progress/kendo-vue-inputs";
import {
  Editor,
  EditorUtils,
  ProseMirror,
} from "@progress/kendo-vue-editor";
const { Schema, TextSelection } = ProseMirror;

class EditorView extends ProseMirror.EditorView {}

const { nodes, marks } = EditorUtils;
const initialDocument = EditorUtils.createDocument(
  new Schema({
    nodes,
    marks,
  }),
  content
);
import content from "../content";

const initialDocSize = initialDocument.content.size;
const initialRange = {
  start: Math.round(initialDocSize / 3),
  end: Math.round((initialDocSize / 3) * 2),
};

export default {
    components: {
       Editor,
       Slider
    },
    computed: {
        contentSize(){
          return this.value.content.size;
        },
        end() {
          return Math.min(this.range.end, this.contentSize);
        },
        start() {
          return Math.min(this.range.start, this.end);
        }
    },
    data () {
      return {
        value: initialDocument,
        range: initialRange,
        tools: [
        ['Bold', 'Italic', 'Underline'],
        ['ViewHtml'],
        ],
       content: content
      };
    },
    methods: {
      handleValueChange(event) {
        this.value = event.value;
      },
      setEditorTextSelection (anchor, head) {
        const view = this.$refs.editor.getView();
        if (!view) {
          return;
        }

        const doc = view.state.doc;
        const selection = TextSelection.create(doc, anchor, head);
        const transaction = view.state.tr; // state.tr - Starts a transaction from this state.

        transaction.setSelection(selection);
        view.dispatch(transaction);
        view.focus();
      },
      onSliderValueChangeStart (event) {
        const start = Math.round(event.value);

        if (this.range.start !== start) {
          this.setEditorTextSelection(start, this.end);
          this.range = {
            start,
            end: this.end,
          };
        }
      },
      onSliderValueChangeEnd (event) {
        const end = Math.round(event.value);

        if (this.range.end !== end) {
          this.setEditorTextSelection(this.start, end);
          this.range = {
            start: this.start,
            end,
          };
        }
      }
    }
};
</script>

