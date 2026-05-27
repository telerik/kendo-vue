<template>
  <NumericTextBox :style="{ width: '230px' }" :inputSuffix="'suffix'">
    <template #suffix>
      <SvgIcon :icon="gearIcon" />
    </template>
  </NumericTextBox>
</template>

<script setup>
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { gearIcon } from "@progress/kendo-svg-icons";
</script>
