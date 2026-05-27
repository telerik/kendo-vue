<template>
  <div :style="{ position: 'absolute' }">
    <TextArea
      :style="{ width: '260px' }"
      :maxlength="max"
      :value="value"
      @input="handleChange"
      :rows="4"
    />
    <Hint direction="end"> {{ value.length }} / {{ max }} </Hint>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TextArea } from "@progress/kendo-vue-inputs";
import { Hint } from "@progress/kendo-vue-labels";

const max = 20;
const value = ref("");

function handleChange(e) {
    value.value = e.value;
}
</script>
