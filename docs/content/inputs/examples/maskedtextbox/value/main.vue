<template>
  <div>
    <MaskedTextBox
      :style="{ width: '230px' }"
      :mask="mask"
      :value="value"
      @change="onChange"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";

const mask = ref("0000-0000-0000-0000");
const value = ref("5748-1570-0019-4334");

const onChange = (event) => {
    const newValue = event.target.value;
    if (value.value !== newValue) {
        value.value = newValue;
    }
};
</script>
