<template>
  <FormElement>
    <fieldset class="k-form-fieldset" :style="{ width: '500px' }">
      <Field
        id="username"
        name="username"
        label="Username"
        :component="'myTemplate'"
        :validator="userNameValidatorRef"
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
        id="email"
        name="email"
        label="Email"
        hint="Hint: Enter your personal email address."
        :component="'myTemplate'"
        :validator="emailValidatorRef"
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
        id="password"
        name="password"
        label="Password"
        :component="'myTemplate'"
        type="password"
        hint="Hint: enter alphanumeric characters only."
        :validator="passwordValidatorRef"
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
import { emailValidator, userNameValidator, passwordValidator } from './validators';

const emailValidatorRef = emailValidator;
const userNameValidatorRef = userNameValidator;
const passwordValidatorRef = passwordValidator;
</script>
