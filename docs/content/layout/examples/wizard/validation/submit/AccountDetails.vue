<template>
  <FormElement>
    <fieldset
      class="k-form-fieldset"
      :style="{
        width: '500px',
        margin: '0 auto',
      }"
    >
      <Field
        id="username"
        name="username"
        label="Username"
        component="myTemplate"
        :validator="userNameValidator"
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
        component="myTemplate"
        :validator="emailValidator"
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
        component="myTemplate"
        type="password"
        :validator="passwordValidator"
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
        id="avatar"
        name="avatar"
        label="Avatar"
        hint="Hint: Upload your avatar picture"
        optional
        component="myTemplate"
      >
        <template #myTemplate="{ props }">
          <FormUpload
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
import FormUpload from './FormUpload.vue';
import { emailValidator, userNameValidator, passwordValidator } from './validators';
</script>
