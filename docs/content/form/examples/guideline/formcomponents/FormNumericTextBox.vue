<template>
  <FieldWrapper>
    <Label class="k-form-label" :editor-id="id" :editor-valid="valid">
      {{ label }}
    </Label>
    <div class="k-form-field-wrap">
      <NumericTextBox
        :style="{ width: '230px' }"
        :valid="valid"
        :value="value"
        :id="id"
        :min="0"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <Error v-if="showValidationMessage">{{ validationMessage }}</Error>
      <Hint v-else>{{ hint }}</Hint>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { computed } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { NumericTextBox } from "@progress/kendo-vue-inputs";

const props = defineProps({
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: {
        type: Number,
        default: null,
    },
});

const emits = defineEmits(["change", "blur", "focus"]);

const showValidationMessage = computed(
    () => props.touched && props.validationMessage
);
const handleChange = (e) => emits("change", e);
const handleBlur = (e) => emits("blur", e);
const handleFocus = (e) => emits("focus", e);
</script>

