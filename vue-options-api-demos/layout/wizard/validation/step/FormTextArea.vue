<template>
  <fieldwrapper>
    <klabel :class="'k-form-label'" :editor-id="id" :editor-valid="valid" :optional="optional">
      {{ label }}
    </klabel>
    <div class="k-form-field-wrap">
      <span class="k-textarea">
        <textarea
          class="k-input"
          style="margin-top: 0px; margin-bottom: 0px; height: 56px"
          :valid="valid"
          :value="value"
          :id="id"
          @change="handleChange"
          @blur="handleBlur"
          @focus="handleFocus"
        ></textarea>
      </span>
      <error v-if="showValidationMessage">
        {{ validationMessage }}
      </error>
      <hint v-else>{{ hint }}</hint>
    </div>
  </fieldwrapper>
</template>
<script>
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Hint, Label } from '@progress/kendo-vue-labels';
export default {
  props: {
    optional: Boolean,
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
    klabel: Label,
  },
  emits: {
    change: null,
    blur: null,
    focus: null,
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
