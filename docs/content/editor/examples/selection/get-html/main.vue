<template>
  <div>
    <Editor
      :tools="tools"
      :content-style="{ height: '360px' }"
      :default-content="content"
      @execute="onExecute"
    />
    <br />
    Selected HTML
    <TextArea
      ref="htmlAreaRef"
      :style="{ height: '100px', width: '100%', resize: 'none' }"
      :value="htmlAreaRefValue"
      :read-only="true"
    />
    <br />
    <br />
    Selected Text
    <TextArea
      ref="textAreaRef"
      :style="{ height: '100px', width: '100%', resize: 'none' }"
      :value="textAreaRefValue"
      :read-only="true"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TextArea } from "@progress/kendo-vue-inputs";
import { Editor, EditorUtils } from "@progress/kendo-vue-editor";
import content from "./content";

const tools = [["Bold", "Italic"]];
const htmlAreaRefValue = ref(null);
const textAreaRefValue = ref(null);

function onExecute(event) {
    const { doc, selection } = event.transaction;
    let selectionHtml = "";
    let selectionText = "";

    if (!selection.empty) {
        const node = doc.cut(selection.from, selection.to);
        selectionHtml = EditorUtils.getHtml({
            doc: node,
            schema: node.type.schema,
        });
        selectionText = node.textContent;
    }

    htmlAreaRefValue.value = selectionHtml;
    textAreaRefValue.value = selectionText;
}
</script>
