<template>
  <FieldWrapper>
    <FloatingLabel
      :label-class="'k-form-label'"
      :label="label"
      :editor-id="id"
      :editor-valid="valid"
      :disabled="disabled"
      :optional="optional"
    >
      <div class="k-form-field-wrap">
        <KInput
          :style="{ width: '230px' }"
          :valid="valid"
          :id="id"
          :type="'email'"
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
    </FloatingLabel>
  </FieldWrapper>
</template>

<script setup>
import { computed } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, FloatingLabel } from "@progress/kendo-vue-labels";
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

const emit = defineEmits(["change", "blur", "focus"]);

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

