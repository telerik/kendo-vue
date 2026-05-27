<template>
  <FieldWrapper>
    <KLabel
      :id="labelId"
      :editor-id="id"
      :editor-valid="valid"
      :editor-disabled="disabled"
    >
      {{ label }}
    </KLabel>
    <RadioGroup
      :aria-describedby="describedBy"
      :label="label"
      :valid="valid"
      :value="value"
      :layout="layout"
      :data-items="dataItems"
      :id="id"
      :checked="value"
      @change="handleChange"
      @blur="handleBlur"
      @focus="handleFocus"
    />
    <Error v-if="showValidationMessage">
      {{ validationMessage }}
    </Error>
    <Hint>{{ hint }}</Hint>
  </FieldWrapper>
</template>

<script setup>
import { computed } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label as KLabel } from "@progress/kendo-vue-labels";
import { RadioGroup } from "@progress/kendo-vue-inputs";

defineOptions({ inheritAttrs: false });

const props = defineProps({
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    disabled: Boolean,
    layout: String,
    dataItems: Array,
    value: String,
});

const emit = defineEmits(["change", "blur", "focus"]);

const showValidationMessage = computed(
    () => props.touched && props.validationMessage
);
const showHint = computed(() => !showValidationMessage.value && props.hint);
const hintId = computed(() => (showHint.value ? `${props.id}_hint` : ""));
const errorId = computed(() =>
    showValidationMessage.value ? `${props.id}_error` : ""
);
const describedBy = computed(() => `${hintId.value} ${errorId.value}`);
const labelId = computed(() => (props.label ? `${props.id}_label` : ""));

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

