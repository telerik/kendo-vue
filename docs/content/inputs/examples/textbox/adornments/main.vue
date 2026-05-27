<template>
  <div>
    <div>Message:</div>
    <KTextBox
      :value="value"
      :placeholder="'Type message'"
      :input-prefix="'prefix'"
      :input-suffix="'suffix'"
      :style="{ width: '300px' }"
      @input="handleInput"
    >
      <template #prefix>
        <SvgIcon :icon="envelopeIcon" />
      </template>
      <template #suffix>
        <KButton
          :disabled="value === EMPTY_VALUE"
          :theme-color="'primary'"
          :fill-mode="'flat'"
          :rounded="'none'"
        >
          Send
        </KButton>
      </template>
    </KTextBox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { envelopeIcon } from "@progress/kendo-svg-icons";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const value = ref("");
const EMPTY_VALUE = "";

function handleInput(event) {
    value.value = event.target.value;
}
</script>
