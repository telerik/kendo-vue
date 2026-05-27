<template>
  <div>
    <Slider
      :style="{ width: '100%' }"
      :value="start"
      :step="1"
      :min="0"
      :max="contentSize"
      @change="onSliderValueChangeStart"
    />
    <Slider
      :style="{ width: '100%' }"
      :value="end"
      :step="1"
      :min="0"
      :max="contentSize"
      @change="onSliderValueChangeEnd"
    />
    {{ `Selection: ${JSON.stringify({ start, end })}` }}
    &nbsp;
    <Editor
      :tools="tools"
      :content-style="{ height: '320px' }"
      :value="value"
      @change="handleValueChange"
      ref="editor"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Slider } from "@progress/kendo-vue-inputs";
import { Editor, EditorUtils, ProseMirror } from "@progress/kendo-vue-editor";
import content from "./content.js";

const { Schema, TextSelection } = ProseMirror;
const { nodes, marks } = EditorUtils;

const initialDocument = EditorUtils.createDocument(
    new Schema({ nodes, marks }),
    content
);
const initialDocSize = initialDocument.content.size;

const editor = ref(null);
const value = ref(initialDocument);
const range = ref({
    start: Math.round(initialDocSize / 3),
    end: Math.round((initialDocSize / 3) * 2),
});

const tools = [["Bold", "Italic", "Underline"], ["ViewHtml"]];

const contentSize = computed(() => value.value.content.size);
const start = computed(() => Math.min(range.value.start, range.value.end));
const end = computed(() => Math.min(range.value.end, contentSize.value));

function handleValueChange(event) {
    value.value = event.value;
}

function setEditorTextSelection(anchor, head) {
    const view = editor.value.getView();
    if (!view) return;

    const doc = view.state.doc;
    const selection = TextSelection.create(doc, anchor, head);
    const transaction = view.state.tr;
    transaction.setSelection(selection);
    view.dispatch(transaction);
    view.focus();
}

function onSliderValueChangeStart(event) {
    const start = Math.round(event.value);
    if (range.value.start !== start) {
        setEditorTextSelection(start, end.value);
        range.value = { start, end: end.value };
    }
}

function onSliderValueChangeEnd(event) {
    const end = Math.round(event.value);
    if (range.value.end !== end) {
        setEditorTextSelection(start.value, end);
        range.value = { start: start.value, end };
    }
}
</script>
