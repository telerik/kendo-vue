<template>
  <Label
    class="k-form-label"
    :editor-id="id"
    :editor-valid="valid"
    :disabled="disabled"
    :optional="optional"
  >
    {{ label }}
  </Label>
  <div class="k-form-field-wrap">
    <KInput
      :valid="valid"
      :id="id"
      :value="value"
      :disabled="disabled"
      :placeholder="placeholder"
      @input="handleChange"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <Error v-if="showValidationMessage">
      {{ validationMessage }}
    </Error>
    <Hint v-else>{{ hint }}</Hint>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { Input as KInput } from "@progress/kendo-vue-inputs";

const props = defineProps({
  modified: Boolean,
  visited: Boolean,
  name: String,
  optional: Boolean,
  disabled: Boolean,
  placeholder: String,
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

const emit = defineEmits(["input", "change", "blur", "focus"]);

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
