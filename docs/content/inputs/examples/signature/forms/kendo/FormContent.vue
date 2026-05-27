<template>
  <FormElement :style="{ width: '400px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">User Details</legend>
      <div class="mb-3">
        <Field
          :name="'firstName'"
          :component="'myTemplate'"
          :label="'First name'"
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
          :name="'lastName'"
          :component="'myTemplate'"
          :label="'Last name'"
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
          :name="'signature'"
          :component="'myTemplate'"
          :label="'Signature'"
          :hint="'Sign to agree with our Terms of Use'"
          :validator="signatureValidator"
        >
          <template #myTemplate="{ props }">
            <FormSignature v-bind="props" @change="props.onChange" />
          </template>
        </Field>
      </div>
    </fieldset>
    <div class="k-form-buttons">
      <KButton type="submit" :disabled="!kendoForm.allowSubmit">
        Submit
      </KButton>
      <KButton type="button" @click="clear">Clear </KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./FormInput.vue";
import FormSignature from "./FormSignature.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const kendoForm = inject("kendoForm", { default: {} });

const signatureValidator = (value) =>
    !value ? "Signature is required" : "";

function clear() {
    kendoForm.onFormReset();
}
</script>
