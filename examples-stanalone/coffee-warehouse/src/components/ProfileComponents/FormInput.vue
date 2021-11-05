<template>
  <fieldwrapper>
    <klabel
      :editor-id="id"
      :editor-valid="valid"
      :disabled="disabled"
      :optional="optional"
      style="text-align:right"
    >
      {{ label }}
    </klabel>
    <div class="k-form-field-wrap">
      <kinput
        :valid="valid"
        :id="id"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      <error v-if="showValidationMessage">
        {{ validationMessage }}
      </error>
      <hint v-else>{{ hint }}</hint>
    </div>
  </fieldwrapper>
</template>
<script>
import { FieldWrapper } from "@progress/kendo-vue-form";
import { Error, Hint, Label } from "@progress/kendo-vue-labels";
import { Input } from "@progress/kendo-vue-inputs";
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
    fieldwrapper: FieldWrapper,
    error: Error,
    hint: Hint,
    klabel: Label,
    kinput: Input,
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
    blur: null,
    focus: null,
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e);
    },
    handleBlur(e) {
      this.$emit("blur", e);
    },
    handleFocus(e) {
      this.$emit("focus", e);
    },
  },
};
</script>
