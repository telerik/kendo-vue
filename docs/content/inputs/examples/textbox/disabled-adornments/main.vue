<template>
  <div>
    <KTextBox
      :style="{ width: '230px' }"
      :disabled="true"
      :showValidationIcon="true"
      :inputPrefix="'prefix'"
      :inputSuffix="'suffix'"
      :showClearButton="true"
    >
      <template #prefix>
        <TextBoxIcons />
      </template>
      <template #suffix>
        <SvgIcon :icon="envelopeIconRef" />
      </template>
    </KTextBox>
  </div>
</template>

<script setup>
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { envelopeIcon } from "@progress/kendo-svg-icons";
import TextBoxIcons from "./TextBoxIcons.vue";

const envelopeIconRef = envelopeIcon;
</script>
