<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">Please fill in the fields:</legend>
      <div class="mb-3">
        <Field name="firstName" component="myTemplate" label="First name">
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
        <Field name="lastName" component="myTemplate" label="Last name">
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
          name="email"
          type="email"
          component="myTemplate"
          label="Email"
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
          hint="Keep me signed in"
          :validator="requiredValidator"
        >
          <template #myTemplate="{ props }">
            <FormSwitch
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </div>
    </fieldset>
    <div class="k-form-buttons">
      <KButton type="submit" :disabled="!kendoForm.allowSubmit">
        Submit
      </KButton>
      <KButton type="button" @click="clear">Clear</KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import FormInput from "./FormInput.vue";
import FormSwitch from "./FormSwitch.vue";

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
    emailRegex.test(value) ? "" : "Please enter a valid email.";
const requiredValidator = (value) => (value ? "" : "This field is required.");

const kendoForm = inject("kendoForm", {});
const clear = () => {
    kendoForm.onFormReset();
};
</script>
