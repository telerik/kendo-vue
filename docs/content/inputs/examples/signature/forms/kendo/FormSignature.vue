<template>
  <FieldWrapper>
    <KLabel
      :class="'k-form-label'"
      :id="labelId"
      :editor-id="id"
      :editor-valid="valid"
      :editor-disabled="disabled"
    >
      {{ label }}
    </KLabel>
    <Signature
      :id="id"
      :aria-describedBy="`${hintId} ${errorId}`"
      :aria-labelledBy="labelId"
      :value="value"
      :valid="valid"
      :disabled="disabled"
      :popup-scale="2"
      @change="onChange"
    />
    <Hint v-if="showHint" id="hintId">{{ hint }}</Hint>
    <Error v-if="showValidationMessage" id="errorId">
      {{ validationMessage }}
    </Error>
  </FieldWrapper>
</template>

<script setup>
import { computed } from "vue";
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label as KLabel } from "@progress/kendo-vue-labels";
import { Signature } from "@progress/kendo-vue-inputs";

defineOptions({ inheritAttrs: false });

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

const emit = defineEmits(["change"]);

const showValidationMessage = computed(
    () => props.touched && props.validationMessage
);
const showHint = computed(() => !showValidationMessage.value && props.hint);
const hintId = computed(() => (showHint.value ? `${props.id}_hint` : ""));
const errorId = computed(() =>
    showValidationMessage.value ? `${props.id}_error` : ""
);
const labelId = computed(() => (props.label ? `${props.id}_label` : ""));

function onChange(e) {
    emit("change", e);
}
</script>
