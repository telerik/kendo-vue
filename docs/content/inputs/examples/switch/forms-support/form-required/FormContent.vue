<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <legend>Create new account:</legend>
      <div class="mb-3">
        <Field
          name="firstName"
          component="myTemplate"
          label="First Name:"
          required
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
          name="password"
          type="password"
          component="myTemplate"
          label="Password"
          required
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
          required
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

const kendoForm = inject("kendoForm", {});
</script>
