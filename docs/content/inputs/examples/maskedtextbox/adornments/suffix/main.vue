<template>
  <MaskedTextBox
    :style="{ width: '230px' }"
    :inputSuffix="'suffix'"
    :mask="mask"
    :default-value="defaultValue"
  >
    <template #suffix>
      <SvgIcon :icon="gearIcon" />
    </template>
  </MaskedTextBox>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { gearIcon } from "@progress/kendo-svg-icons";

const mask = ref("(999) 000-00-00-00");
const defaultValue = ref("(359) 555-55-55-55");
</script>
