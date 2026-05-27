<template>
  <FormElement :style="{ maxWidth: '400px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">
        BOOK YOUR DREAM VACATION TODAY
      </legend>
      <Field
        id="firstName"
        name="firstName"
        label="First Name"
        component="myTemplate"
        :validator="firstNameValidator"
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
        component="myTemplate"
        :validator="lastNameValidator"
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
        id="confirmation"
        name="confirmation"
        label="Type of reservation confirmation"
        hint="Hint: Choose a way to receive a confirmation"
        :data-items="confirmationData"
        layout="horizontal"
        component="myTemplate"
        :validator="radioGroupValidator"
      >
        <template #myTemplate="{ props }">
          <FormRadioGroup
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <div class="k-form-buttons">
        <KButton theme-color="primary" type="submit" :disabled="!kendoForm.allowSubmit">
          Submit
        </KButton>
        <KButton @click="clear">Clear</KButton>
      </div>
    </fieldset>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormRadioGroup from "./FormRadioGroup.vue";
import FormInput from "./FormInput.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const kendoForm = inject("kendoForm", { default: {} });

const confirmationData = [
    { label: "Phone Call", value: "phone" },
    { label: "Via Email", value: "email" },
];

function firstNameValidator(value) {
    return !value
        ? "First Name is required"
        : value.length < 7
            ? "First Name should be at least 7 characters long."
            : "";
}

function lastNameValidator(value) {
    return !value
        ? "Last Name is required"
        : value.length < 7
            ? "Last Name should be at least 7 characters long."
            : "";
}

function radioGroupValidator(value) {
    return !value ? "Type of Confirmation is required" : "";
}

function clear() {
    kendoForm.onFormReset();
}
</script>
