<template>
  <FieldWrapper>
    <KLabel
      class="k-form-label"
      :editor-id="id"
      :editor-valid="valid"
      :disabled="disabled"
      :optional="optional"
    >
      {{ label }}
    </KLabel>
    <div class="k-form-field-wrap">
      <Rating
        v-if="value === 0"
        :style="{ width: '230px' }"
        :valid="valid"
        :id="id"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <Rating
        v-else
        :style="{ width: '230px' }"
        :valid="valid"
        :id="id"
        :value="value"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
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
import { Rating } from "@progress/kendo-vue-inputs";

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
        type: Number,
        default: 0,
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

