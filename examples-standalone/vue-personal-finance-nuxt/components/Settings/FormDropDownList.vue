<template>
  <Label class="k-form-label" :editor-id="id" :editor-valid="valid">
    {{ label }}
  </Label>
  <div class="k-form-field-wrap">
    <DropDownList
      :data-items="data"
      :valid="valid"
      :value="value"
      :id="id"
      :fill-mode="'solid'"
      @change="handleChange"
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
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { DropDownList } from "@progress/kendo-vue-dropdowns";

const props = defineProps({
  modified: Boolean,
  visited: Boolean,
  name: String,
  textField: String,
  data: Object,
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
