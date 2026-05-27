<template>
  <div>
    <KTextBox
      v-model="value"
      :placeholder="'Type some text...'"
      :style="{ width: '230px' }"
      :show-clear-button="true"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";

const value = ref("Clear this text!");
</script>
