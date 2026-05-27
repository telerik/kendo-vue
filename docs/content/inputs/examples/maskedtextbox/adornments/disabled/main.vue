<template>
  <div>
    <MaskedTextBox
      :style="{ width: '300px' }"
      :disabled="true"
      :inputIconName="'gear'"
      :showValidationIcon="true"
      :inputPrefix="'prefix'"
      :inputSuffix="'suffix'"
      :showClearButton="true"
      :mask="mask"
      :default-value="defaultValue"
    >
      <template #prefix>
        <InputIcons />
      </template>
      <template #suffix>
        <SvgIcon :icon="gearIcon" />
      </template>
    </MaskedTextBox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";
import InputIcons from "./InputIcons.vue";
import { SvgIcon } from "@progress/kendo-vue-common";
import { gearIcon } from "@progress/kendo-svg-icons";

const mask = ref("(999) 000-00-00-00");
const defaultValue = ref("(359) 555-55-55-55");
</script>
