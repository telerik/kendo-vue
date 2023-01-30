<template>
  <fieldwrapper>
    <klabel
      :editor-id="id"
      :editor-valid="valid"
      :disabled="disabled"
      :optional="optional"
    >
      {{ label }}
    </klabel>
    <div class="k-form-field-wrap">
      <kswitch
        :valid="valid"
        :id="id"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        @change="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
      />

      <span v-if="showValidationMessage && showHint">
        <error>
          {{ validationMessage }}
        </error>
        <hint>{{ hint }}</hint>
      </span>
      <error v-else-if="showValidationMessage">
        {{ validationMessage }}
      </error>
      <hint v-else-if="showHint">{{ hint }}</hint>
    </div>
  </fieldwrapper>
</template>
<script lang="ts">
import { FieldWrapper } from '@progress/kendo-vue-form';
import { Error, Hint, Label } from '@progress/kendo-vue-labels';
import { Switch } from '@progress/kendo-vue-inputs';
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
    klabel: Label,
    kswitch: Switch,
  },
  computed: {
    showValidationMessage() {
      return this.$props.touched && this.$props.validationMessage;
    },
    showHint() {
      return this.$props.hint;
    },
    hintId() {
      return this.showHint ? `${this.$props.id}_hint` : '';
    },
    errorId() {
      return this.showValidationMessage ? `${this.$props.id}_error` : '';
    },
  },
  emits: {
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
