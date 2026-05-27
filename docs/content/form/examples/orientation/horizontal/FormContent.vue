<template>
  <FormElement :horizontal="true" :style="{ maxWidth: '650px' }">
    <Field
      :id="'email'"
      :name="'email'"
      :label="'Email (Regular Label)'"
      :component="'labelTemplate'"
      :validator="emailValidator"
    >
      <template #labelTemplate="{ props }">
        <LabelEmailInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
      </template>
    </Field>
    <Field
      :id="'secondEmail'"
      :name="'secondemail'"
      :label="'Email (Floating Label)'"
      :component="'floatingTemplate'"
      :validator="emailValidator"
    >
      <template #floatingTemplate="{ props }">
        <FloatingLabelEmailInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
      </template>
    </Field>
    <div class="k-form-buttons" :style="{ gridColumn: '1 / -1', justifyContent: 'flex-start' }">
      <KButton :disabled="!kendoForm.allowSubmit">Submit</KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from 'vue';
import { FormElement, Field } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import LabelEmailInput from './LabelEmailInput.vue';
import FloatingLabelEmailInput from './FloatingLabelEmailInput.vue';

const emailRegex = /\S+@\S+\.\S+/;
const emailValidator = (value) => emailRegex.test(value) ? '' : 'Please enter a valid email.';

const kendoForm = inject('kendoForm', {});
</script>

<style>
.k-form-field-wrap { width: 100%; }
</style>
