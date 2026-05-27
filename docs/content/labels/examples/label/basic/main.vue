<template>
  <div>
    <KLabel :editor-id="editorId">
      First Name:&nbsp;
    </KLabel>
    <KInput :style="{ width: '230px' }" :id="editorId" />
  </div>
</template>

<script setup>
import { Label as KLabel } from "@progress/kendo-vue-labels";
import { Input as KInput } from "@progress/kendo-vue-inputs";

const editorId = "firstName";
</script>

