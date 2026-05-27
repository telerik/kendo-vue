<template>
  <div>
    <TextArea
      :style="{ width: '230px' }"
      v-model="value"
      :show-clear-button="true"
      :rows="4"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TextArea } from "@progress/kendo-vue-inputs";

const value = ref("Clear me!");
</script>
