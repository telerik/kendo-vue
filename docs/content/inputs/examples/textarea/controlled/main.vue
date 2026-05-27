<template>
  <div>
    <TextArea
      :style="{ width: '260px' }"
      :value="value"
      @change="handleChange"
      :rows="2"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TextArea } from "@progress/kendo-vue-inputs";

const value = ref("");

function handleChange(e) {
    value.value = e.value;
}
</script>
