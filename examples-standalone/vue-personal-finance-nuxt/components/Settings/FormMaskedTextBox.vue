<template>
  <KLabel
    :class="'k-form-label'"
    :editor-id="id"
    :editor-valid="valid"
    :optional="optional"
  >
    {{ label }}
  </KLabel>
  <MaskedTextBox
    :valid="valid"
    :value="value"
    :id="id"
    :mask="mask"
    :readonly="readonly"
    @change="handleChange"
    @blur="handleBlur"
    @focus="handleFocus"
  />
  <Error v-if="showValidationMessage">
    {{ validationMessage }}
  </Error>
  <Hint v-else>{{ hint }}</Hint>
</template>

<script setup>
import { computed } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label as KLabel } from "@progress/kendo-vue-labels";
import { MaskedTextBox } from "@progress/kendo-vue-inputs";

const props = defineProps({
  modified: Boolean,
  visited: Boolean,
  name: String,
  readonly: Boolean,
  optional: Boolean,
  mask: String,
  touched: Boolean,
  label: String,
  validationMessage: String,
  hint: String,
  id: String,
  valid: Boolean,
  value: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(["change", "blur", "focus", "input"]);

const showValidationMessage = computed(
  () => props.touched && props.validationMessage
);

function handleChange(e) {
  emit("change", e);
}

function handleBlur(e) {
  emit("blur", e);
}

function handleFocus(e) {
  emit("focus", e);
}
</script>
