<template>
  <Label :class="'k-form-label'" :editor-id="id" :editor-valid="valid">
    {{ label }}
  </Label>
  <div class="k-form-field-wrap">
    <DatePicker
      :value="value"
      :valid="valid"
      :id="id"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <Error v-if="showValidationMessage">
      {{ validationMessage }}
    </Error>
    <Hint v-else :direction="hintDirection">{{ hint }}</Hint>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { DatePicker } from "@progress/kendo-vue-dateinputs";

const props = defineProps({
  modified: Boolean,
  visited: Boolean,
  name: String,
  hintDirection: String,
  touched: Boolean,
  label: String,
  validationMessage: String,
  hint: String,
  id: String,
  valid: Boolean,
  value: {
    type: Date,
    default: null,
  },
  format: {
    type: String,
    default: "dd/MM/yyyy",
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
