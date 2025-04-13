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
      :aria-describedBy="`${hindId} ${errorId}`"
      :aria-labelledBy="labelId"
      :value="value"
      :valid="valid"
      :disabled="disabled"
      :layout="layout"
      :popup-scale="2"
      @change="onChange"
    />
    <Hint v-if="showHint" id="hindId">{{ hint }}</Hint>
    <Error v-if="showValidationMessage" id="errorId">
      {{ validationMessage }}
    </Error>
  </FieldWrapper>
</template>
<script>
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { Signature } from "@progress/kendo-vue-inputs";
export default {
  props: {
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
  },
  components: {
    FieldWrapper,
    Error,
    Hint,
    KLabel: Label,
    Signature,
  },
  computed: {
    showValidationMessage() {
      return this.$props.touched && this.$props.validationMessage;
    },
    showHint() {
      return !this.showValidationMessage && this.$props.hint;
    },
    hintId() {
      return this.showHint ? `${this.$props.id}_hint` : "";
    },
    errorId() {
      return this.showValidationMessage ? `${this.$props.id}_error` : "";
    },
  },
  emits: {
    change: null,
  },
  methods: {
    onChange(e) {
      this.$emit("change", e);
    },
  },
};
</script>
