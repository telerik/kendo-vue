<template>
  <FieldWrapper>
    <KLabel
      class="k-form-label"
      :editor-id="id"
      :editor-valid="valid"
      :optional="optional"
    >
      {{ label }}
    </KLabel>
    <div class="k-form-field-wrap">
      <span>
        <Checkbox
          :value="value"
          :valid="valid"
          :id="id"
          @change="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
        />
      </span>
      <Error v-if="showValidationMessage">
        {{ validationMessage }}
      </Error>
      <Hint v-else>{{ hint }}</Hint>
    </div>
  </FieldWrapper>
</template>

<script setup>
import { computed } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label as KLabel } from "@progress/kendo-vue-labels";
import { Checkbox } from "@progress/kendo-vue-inputs";

defineOptions({ inheritAttrs: false });

const props = defineProps({
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    disabled: Boolean,
    optional: Boolean,
    visited: Boolean,
    modified: Boolean,
    value: {
        type: [Boolean, String],
        default: false,
    },
});

const emit = defineEmits(["change", "blur", "focus"]);

const showValidationMessage = computed(() => {
    return props.touched && props.validationMessage;
});

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

