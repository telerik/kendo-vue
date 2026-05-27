<template>
  <div>
    <Editor
      :tools="tools"
      :content-style="{ height: '170px' }"
      :default-content="content"
    />
  </div>
</template>

<script setup>
import { Editor } from "@progress/kendo-vue-editor";
import { content } from "./content";

const tools = [["Bold", "Italic", "Underline"], ["ViewHtml"]];
</script>
