<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <Field
        name="name"
        label="Name"
        :component="'myTemplate'"
        :validator="isValid"
      >
        <template #myTemplate="{ props }">
          <FormInput
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
    </fieldset>
  </FormElement>
</template>

<script setup>
import { FormElement, Field } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';

const emit = defineEmits(['change', 'valid']);

function isValid(value) {
    emit('valid', value.length > 0);
    return value.length > 0 ? '' : 'The field is required';
}
</script>
