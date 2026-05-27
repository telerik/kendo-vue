<template>
  <div>
    <div>Message:</div>
    <KTextBox
      :value="value"
      :valid="value.length <= MAX_LENGTH"
      :placeholder="'Type message'"
      :max-length="MAX_LENGTH"
      :input-prefix="'prefix'"
      :input-suffix="'suffix'"
      :style="{ width: '300px' }"
      @input="handleInput"
    >
      <template #prefix>
        <SvgIcon :icon="envelopeIcon" />
        <InputSeparator />
      </template>
      <template #suffix>
        <SvgIcon
          v-if="value !== EMPTY_VALUE"
          @click="handleClear"
          :icon="xIcon"
        />
        {{ `${String(value).length}/${MAX_LENGTH}` }} &nbsp;
      </template>
    </KTextBox>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TextBox as KTextBox, InputSeparator } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { envelopeIcon, xIcon } from "@progress/kendo-svg-icons";

const value = ref("");
const MAX_LENGTH = 10;
const EMPTY_VALUE = "";

function handleInput(event) {
    value.value = event.target.value;
}

function handleClear() {
    value.value = EMPTY_VALUE;
}
</script>
