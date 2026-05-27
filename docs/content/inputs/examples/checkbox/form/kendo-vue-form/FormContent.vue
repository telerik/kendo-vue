<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">BOOK YOUR DREAM VACATION TODAY</legend>
      <Field
        :id="'firstName'"
        :name="'firstName'"
        :label="'First Name'"
        :component="'myTemplate'"
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
        :id="'lastName'"
        :name="'lastName'"
        :label="'Last Name'"
        :component="'myTemplate'"
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
      <span class="k-form-separator" />
      <Field
        :id="'terms'"
        :name="'terms'"
        :label="'I agree with terms and conditions'"
        :component="'myTemplate'"
        :validator="checkboxValidator"
      >
        <template #myTemplate="{ props }">
          <FormCheckbox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <div class="k-form-buttons">
        <KButton :primary="true" :type="'submit'" :disabled="!kendoForm.allowSubmit">
          Submit
        </KButton>
      </div>
    </fieldset>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import FormCheckbox from "./FormCheckbox.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const kendoForm = inject("kendoForm", { default: {} });

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

function checkboxValidator(value) {
    return !value ? "Terms&Conditions checkbox is required" : "";
}
</script>
