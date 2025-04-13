<template>
    <fieldwrapper>
      <KLabel
        :editor-id="id"
        :editor-valid="valid"
        :disabled="disabled"
        :optional="optional"
      >
        {{ label }}
      </KLabel>
      <div class="k-form-field-wrap">
        <KTextBox
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
        <error v-if="showValidationMessage">
          {{ validationMessage }}
        </error>
        <hint v-else>{{ hint }}</hint>
      </div>
    </fieldwrapper>
  </template>
  <script>
  import { FieldWrapper } from '@progress/kendo-vue-form';
  import { Error, Hint, Label as KLabel } from '@progress/kendo-vue-labels';
  import { TextBox as KTextBox } from '@progress/kendo-vue-inputs';
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
        default: '',
      },
    },
    components: {
      fieldwrapper: FieldWrapper,
      error: Error,
      hint: Hint,
      KLabel,
      KTextBox,
    },
    computed: {
      showValidationMessage() {
        return this.$props.touched && this.$props.validationMessage;
      },
      showHint() {
        return !this.showValidationMessage && this.$props.hint;
      },
      hintId() {
        return this.showHint ? `${this.$props.id}_hint` : '';
      },
      errorId() {
        return this.showValidationMessage ? `${this.$props.id}_error` : '';
      },
    },
    emits: {
      input: null,
      change: null,
      blur: null,
      focus: null,
    },
    methods: {
      handleChange(e) {
        this.$emit('change', e);
      },
      handleBlur(e) {
        this.$emit('blur', e);
      },
      handleFocus(e) {
        this.$emit('focus', e);
      },
    },
  };
  </script>
  