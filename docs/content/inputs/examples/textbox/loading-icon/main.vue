<template>
  <div>
    <KTextBox
      :style="{ width: '230px' }"
      :placeholder="'Type some text...'"
      :show-loading-icon="true"
    />
  </div>
</template>

<script setup>
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";
</script>
