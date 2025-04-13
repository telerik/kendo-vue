<template>
  <form-element :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <Field
        :name="'name'"
        :label="'Name'"
        :component="'myTemplate'"
        :validator="isValid"
      >
        <template v-slot:myTemplate="{ props }">
          <forminput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          ></forminput>
        </template>
      </Field>
    </fieldset>
  </form-element>
</template>

<script>
import { FormElement, Field } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';

export default {
  components: {
    'form-element': FormElement,
    forminput: FormInput,
    Field,
  },
  inject: {
    kendoForm: { default: {} },
  },
  emits: ['change', 'valid'],
  data() {
    return {
      value: '',
      valid: true,
      touched: false,
      validationMessage: '',
      hint: '',
      disabled: false,
    };
  },
  methods: {
    change(e) {
      this.$emit('change', e, e.target.value);
    },
    isValid(value) {
      this.$emit('valid', value.length > 0);
      return value.length > 0 ? '' : 'The field is required';
    },
  },
};
</script>
