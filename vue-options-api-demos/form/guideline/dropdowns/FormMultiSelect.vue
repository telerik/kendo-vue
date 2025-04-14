<template>
  <fieldwrapper>
    <klabel :class="'k-form-label'" :editor-id="id" :editor-valid="valid">
      {{ label }}
    </klabel>
    <div class="k-form-field-wrap">
      <MultiSelect
        :style="{ width: '230px' }"
        :data-items="data"
        :valid="valid"
        :id="id"
        :value="value"
        @change="handleChange"
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
import { Error, Hint, Label } from '@progress/kendo-vue-labels';
import { MultiSelect } from '@progress/kendo-vue-dropdowns';
export default {
  props: {
    textField: String,
    data: Object,
    touched: Boolean,
    label: String,
    validationMessage: String,
    hint: String,
    id: String,
    valid: Boolean,
    value: {
      type: Array,
      default: [],
    },
  },
  components: {
    fieldwrapper: FieldWrapper,
    error: Error,
    hint: Hint,
    klabel: Label,
    MultiSelect,
  },
  emits: {
    input: null,
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
