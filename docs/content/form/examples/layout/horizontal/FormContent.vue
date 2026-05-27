<template>
  <FormElement :horizontal="true" :style="{ maxWidth: '650px' }">
    <Field
      :id="'email'"
      :name="'email'"
      :component="'myTemplate'"
      :label="'Email (Regular Label)'"
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
      :id="'secondEmail'"
      :name="'secondEmail'"
      :component="'myTemplate'"
      :label="'Email (Floating Label)'"
      :validator="emailValidator"
    >
      <template #myTemplate="{ props }">
        <FormFloatingLabelInput
          v-bind="props"
          @change="props.onChange"
          @blur="props.onBlur"
          @focus="props.onFocus"
        />
      </template>
    </Field>
    <div class="k-form-buttons">
      <KButton type="submit" :disabled="!kendoForm.allowSubmit">
        Submit
      </KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from "vue";
import { Field, FormElement } from "@progress/kendo-vue-form";
import FormInput from "./LabelFormInput.vue";
import FormFloatingLabelInput from "./FloatingLabelFormInput.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const emailRegex = new RegExp(/\S+@\S+\.\S+/);
const emailValidator = (value) =>
    emailRegex.test(value) ? "" : "Please enter a valid email.";

const kendoForm = inject("kendoForm", {});
</script>
