<template>
  <FormElement
    :style="{
      width: '290px',
      margin: '0px auto',
    }"
  >
    <legend class="k-form-legend">USER DETAILS</legend>
    <fieldset class="k-form-fieldset">
      <Field
        id="firstName"
        name="firstName"
        label="First Name:"
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
        label="Last Name:"
        :validator="lastNameValidator"
        component="myTemplate"
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
        id="address"
        name="address"
        label="Address:"
        component="myTemplate"
        :validator="textAreaValidator"
        hint="Hint: Enter your personal address"
      >
        <template #myTemplate="{ props }">
          <FormTextArea
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <div class="k-form-buttons">
        <KButton
          theme-color="primary"
          type="submit"
          :disabled="!kendoForm.allowSubmit"
        >
          Submit
        </KButton>
        <KButton @click="clear"> Clear </KButton>
      </div>
    </fieldset>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormTextArea from "./FormTextArea.vue";
import FormInput from "./FormInput.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const kendoForm = inject("kendoForm", {});

function clear() {
    kendoForm.onFormReset();
}

const firstNameValidator = (value) =>
    !value
        ? "First Name is required"
        : value.length < 7
            ? "First Name should be at least 7 characters long."
            : "";

const lastNameValidator = (value) =>
    !value
        ? "Last Name is required"
        : value.length < 7
            ? "Last Name should be at least 7 characters long."
            : "";

const textAreaValidator = (value) => (!value ? "Address is required" : "");
</script>
