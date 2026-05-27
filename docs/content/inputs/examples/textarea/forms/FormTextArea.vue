<template>
  <FieldWrapper>
    <KLabel :class="'k-form-label'" :editor-id="id" :editor-valid="valid">
      {{ label }}
    </KLabel>
    <div class="k-form-field-wrap">
      <span class="k-textarea">
        <TextArea
          :valid="valid"
          :value="value"
          :id="id"
          :maxlength="max"
          @input="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
        />
      </span>
      <Error v-if="showValidationMessage">
        {{ validationMessage }}
      </Error>
      <div v-else style="display: flex; justify-content: space-between">
        <Hint>{{ hint }}</Hint>
      </div>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { computed } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label as KLabel } from "@progress/kendo-vue-labels";
import { TextArea } from "@progress/kendo-vue-inputs";

const props = defineProps({
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    max: Number,
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
