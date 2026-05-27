<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset>
      <legend>Create new account:</legend>
      <div class="mb-3">
        <Field
          id="username"
          name="username"
          component="myTemplate"
          :style="{ width: '100%' }"
          label="First Name"
          pattern="[A-Za-z]+"
          :min-length="2"
          :validator="requiredValidator"
        >
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              :validation-message="usernameValidationMessage"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </div>
      <div class="mb-3">
        <Field
          name="password"
          type="password"
          component="myTemplate"
          :style="{ width: '100%' }"
          label="Password"
          :min-length="6"
          :max-length="16"
          :validator="passwordValidator"
        >
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              :validation-message="passwordValidationMessage"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </div>
      <div class="mb-3">
        <Field
          name="confirmPassword"
          type="password"
          component="myTemplate"
          :style="{ width: '100%' }"
          label="Confirm Password"
          :min-length="2"
          :max-length="18"
          :validator="passwordValidator"
        >
          <template #myTemplate="{ props }">
            <FormInput
              v-bind="props"
              :validation-message="passwordValidationMessage"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </div>
      <div class="mb-3">
        <Field
          name="email"
          type="email"
          component="myTemplate"
          :style="{ width: '100%' }"
          label="Email address"
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
      </div>
      <div class="mb-3">
        <Field
          id="keepSigned"
          name="keepSigned"
          component="myTemplate"
          :validator="requiredValidator"
        >
          <template #myTemplate="{ props }">
            <FormSwitch
              v-bind="props"
              :validation-message="switchCustomMessage"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
        <span :style="{ 'margin-left': 10, 'font-size': 12 }">
          Keep me signed in
        </span>
      </div>
    </fieldset>
    <div class="k-form-buttons">
      <KButton :disabled="!kendoForm.allowSubmit">Submit</KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import FormInput from "./FormInput.vue";
import FormSwitch from "./FormSwitch.vue";

const requiredValidator = (value) => {
    return value ? "" : "Error: This field is required.";
};

const passwordValidator = (value) => {
    return !value || value.length < 6 || value.length > 16;
};

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
    emailRegex.test(value) ? "" : "Please enter a valid email.";

const kendoForm = inject("kendoForm", {});

const usernameValidationMessage = "Your username should contain only letters";
const passwordValidationMessage =
  "Please enter password between 6 and 16 characters";
const switchCustomMessage = "Please turn the automatic sign in";
</script>
