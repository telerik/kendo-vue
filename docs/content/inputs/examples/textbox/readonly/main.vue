<template>
  <div :style="{ width: '300px' }">
    <div class="example-config">
      <KCheckbox
        :label="'Read Only'"
        :checked="readOnly"
        @change="handleDisabledChange"
      />
    </div>
    <KLabel>Message:</KLabel>
    <FieldWrapper>
      <KTextBox
        :value="value"
        :readonly="readOnly"
        @input="handleInput"
        :placeholder="'Type your message here'"
      />
    </FieldWrapper>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { TextBox as KTextBox, Checkbox as KCheckbox } from "@progress/kendo-vue-inputs";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Label as KLabel } from "@progress/kendo-vue-labels";

const value = ref("Sample text");
const readOnly = ref(true);

function handleDisabledChange() {
    readOnly.value = !readOnly.value;
}

function handleInput(event) {
    value.value = event.target.value;
}
</script>
