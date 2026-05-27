<template>
  <div>
    <Editor
      :tools="[['Bold', 'Italic', 'Underline']]"
      :content-style="{ height: '160px' }"
      :default-content="'<p>editor sample html</p>'"
      ref="editorRef"
    />
    <br />
    <KButton :svg-icon="arrowDownIcon" @click="getHtml">Gets HTML</KButton>
    &nbsp;
    <KButton :svg-icon="arrowUpIcon" @click="setHtml">Sets HTML</KButton>
    <br />
    <br />
    <TextArea
      :style="{ height: '100px', width: '100%', resize: 'none' }"
      :default-value="'<p>textarea sample html</p>'"
      ref="textareaRef"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { TextArea } from "@progress/kendo-vue-inputs";
import { Editor } from "@progress/kendo-vue-editor";
import { arrowUpIcon, arrowDownIcon } from "@progress/kendo-svg-icons";

const editorRef = ref(null);
const textareaRef = ref(null);

function getHtml() {
    textareaRef.value.element.value = editorRef.value.getHTML();
}

function setHtml() {
    editorRef.value.setHTML(textareaRef.value.element.value);
}
</script>

