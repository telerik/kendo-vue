<template>
  <div>
    <div>Message:</div>
    <KTextBox
      :value="value"
      :placeholder="'Type message'"
      :input-prefix="'prefix'"
      :input-suffix="'suffix'"
      :required="true"
      :valid="valid"
      :style="{ width: '300px' }"
      @input="handleInput"
    >
      <template #prefix>
        <SvgIcon
          v-if="valid && recommended"
          :icon="checkIcon"
          :theme-color="'success'"
        />
        <SvgIcon v-else-if="valid" :icon="warningTriangleIcon" :theme-color="'warning'" />
        <SvgIcon v-else :icon="warningCircleIcon" :theme-color="'error'" />
      </template>
      <template #suffix>
        {{ `${String(value).length}/${MAX_LENGTH}` }} &nbsp;
      </template>
    </KTextBox>
    <Hint>Recommended size is between at least 5 characters</Hint>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { TextBox as KTextBox } from "@progress/kendo-vue-inputs";
import { SvgIcon } from "@progress/kendo-vue-common";
import { checkIcon, warningTriangleIcon, warningCircleIcon } from "@progress/kendo-svg-icons";
import { Hint } from "@progress/kendo-vue-labels";

const EMPTY_VALUE = "";
const MAX_LENGTH = 10;

const value = ref(EMPTY_VALUE);

const valid = computed(() => /^[a-zA-Z0-9]{1,10}$/g.test(String(value.value)));
const recommended = computed(() => /^[a-zA-Z0-9]{5,10}$/g.test(String(value.value)));

function handleInput(event) {
    value.value = event.target.value;
}
</script>
