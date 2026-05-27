<template>
  <FormElement :style="{ width: '400px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">
        PLEASE FILL IN THE FOLLOWING INFORMATION:
      </legend>
      <div v-if="computedErrors.length" class="k-messagebox k-messagebox-error">
        {{ kendoForm.errors[genericErrorField] }}
        <ul>
          <li v-for="errors in computedErrors" :key="errors">
            {{ errors }}
          </li>
        </ul>
      </div>
      <Field
        id="username"
        name="username"
        label="User Name"
        :component="'myTemplate'"
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
        :component="'myTemplate'"
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
        id="notifications"
        name="notifications"
        label="I want to receive notifications"
        hint="You will receive our latest updates and promotions on your email"
        optional
        :component="'myTemplate'"
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
        <KButton theme-color="primary" type="submit" :disabled="!kendoForm.allowSubmit">
          Submit
        </KButton>
        <KButton @click="clear">Clear</KButton>
      </div>
    </fieldset>
  </FormElement>
</template>

<script setup>
import { computed, inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import FormCheckbox from "./FormCheckbox.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { userNameValidator, emailValidator } from "./validators";

const kendoForm = inject("kendoForm", {});
const genericErrorField = "VALIDATION_SUMMARY";

const computedErrors = computed(() =>
    Object.keys(kendoForm.errors)
        .filter((field) => field !== genericErrorField)
        .filter((field) => kendoForm.errors[field])
        .map((field) => kendoForm.errors[field])
);

const clear = () => {
    kendoForm.onFormReset();
};
</script>
