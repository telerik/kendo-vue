<template>
  <FormElement>
    <fieldset
      class="k-form-fieldset"
      :style="{ width: '500px', margin: '0 auto' }"
    >
      <Field
        id="firstName"
        name="firstName"
        label="First Name"
        :component="'myTemplate'"
        :validator="requiredValidator"
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
      <Field
        id="lastName"
        name="lastName"
        label="Last Name"
        :component="'myTemplate'"
        :validator="requiredValidator"
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
import { Field, FormElement } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';

const requiredValidator = (value) => !!value || 'This field is required.';
</script>
