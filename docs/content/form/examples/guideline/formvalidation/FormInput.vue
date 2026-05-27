<template>
  <FieldWrapper>
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
        :style="{ width: '230px' }"
        :valid="valid"
        :id="id"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="handleChange"
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
import { Input as KInput } from "@progress/kendo-vue-inputs";

const props = defineProps({
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

const emits = defineEmits(["input", "change", "blur", "focus"]);

const showValidationMessage = computed(
    () => props.touched && props.validationMessage
);
const handleChange = (e) => emits("change", e);
const handleBlur = (e) => emits("blur", e);
const handleFocus = (e) => emits("focus", e);
</script>

