<template>
  <div>
    <MaskedTextBox
      :style="{ width: '230px' }"
      :inputPrefix="'prefix'"
      :mask="mask"
      :default-value="defaultValue"
    >
      <template #prefix>
        <InputIcons />
      </template>
    </MaskedTextBox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";
import InputIcons from "./InputIcons.vue";

const mask = ref("(999) 000-00-00-00");
const defaultValue = ref("(359) 555-55-55-55");
</script>
