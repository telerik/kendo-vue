<template>
  <FormElement :style="{ margin: '0 auto' }" :cols="formBreakpoints">
    <FormFieldSet legend="Personal Information" :cols="firstFieldSetBreakpoints">
      <Field
        :col-span="[{ minWidth: 0, maxWidth: 499, value: 1 }, { minWidth: 500, value: 2 }]"
        :id="'title'"
        :name="'title'"
        :label="'Title'"
        :data="titles"
        :default-value="titles[0]"
        :component="'dropdownTemplate'"
        :validator="requiredValidator"
      >
        <template #dropdownTemplate="{ props }">
          <FormDropDownList v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field
        :col-span="[{ minWidth: 0, maxWidth: 499, value: 1 }, { minWidth: 500, value: 4 }]"
        :name="'fullName'"
        :label="'Full name'"
        :component="'inputTemplate'"
        :validator="nameValidator"
        :auto-complete="'username'"
      >
        <template #inputTemplate="{ props }">
          <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field
        :col-span="[{ minWidth: 0, maxWidth: 499, value: 1 }, { minWidth: 500, value: 3 }]"
        :id="'phoneNumber'"
        :name="'phoneNumber'"
        :label="'Phone Number'"
        :mask="'(999) 000-00-00-00'"
        :placeholder="'(___) ___-__-__-__'"
        :component="'maskedTemplate'"
        :validator="phoneValidator"
      >
        <template #maskedTemplate="{ props }">
          <FormMaskedTextBox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field
        :col-span="[{ minWidth: 0, maxWidth: 499, value: 1 }, { minWidth: 500, value: 3 }]"
        :id="'email'"
        :name="'email'"
        :label="'Email'"
        :type="'email'"
        :component="'inputTemplate'"
        :validator="emailValidator"
        :placeholder="'your@email.com'"
        :auto-complete="'email'"
      >
        <template #inputTemplate="{ props }">
          <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field
        :id="'birthDate'"
        :name="'birthDate'"
        :label="'Birth Date'"
        :component="'dateTemplate'"
        :format="'dd/MM/yyyy'"
        :placeholder="'dd/MM/yyyy'"
        :wrapper-style="{ width: '160px' }"
        :validator="requiredValidator"
      >
        <template #dateTemplate="{ props }">
          <FormDatePicker v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
    </FormFieldSet>

    <FormFieldSet legend="Shipping Address" :cols="secondFieldSetBreakpoints">
      <Field
        :col-span="1"
        :id="'country'"
        :name="'country'"
        :label="'Country'"
        :placeholder="'EU Country'"
        :component="'comboTemplate'"
        :data="countries"
        :validator="requiredValidator"
      >
        <template #comboTemplate="{ props }">
          <FormComboBox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field
        :col-span="1"
        :id="'city'"
        :name="'city'"
        :label="'City'"
        :component="'inputTemplate'"
        :validator="requiredValidator"
      >
        <template #inputTemplate="{ props }">
          <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field
        :col-span="[{ minWidth: 0, maxWidth: 499, value: 1 }, { minWidth: 500, value: 2 }]"
        :id="'streetAddress'"
        :name="'streetAddress'"
        :label="'Street Address'"
        :component="'inputTemplate'"
        :validator="requiredValidator"
      >
        <template #inputTemplate="{ props }">
          <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field
        :col-span="[{ minWidth: 0, maxWidth: 499, value: 1 }, { minWidth: 500, value: 2 }]"
        :id="'streetAddress2'"
        :name="'streetAddress2'"
        :label="'Street Address line 2'"
        :component="'inputTemplate'"
      >
        <template #inputTemplate="{ props }">
          <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
    </FormFieldSet>

    <div class="k-form-buttons">
      <KButton :theme-color="'primary'" type="submit" :disabled="!kendoForm.allowSubmit">Submit</KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from 'vue';
import { FormElement, Field, FormFieldSet } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import FormInput from './FormInput.vue';
import FormMaskedTextBox from './FormMaskedTextBox.vue';
import FormDropDownList from './FormDropDownList.vue';
import FormComboBox from './FormComboBox.vue';
import FormDatePicker from './FormDatePicker.vue';
import { nameValidator, emailValidator, phoneValidator, requiredValidator } from './validators';

const kendoForm = inject('kendoForm', {});

const titles = ['None', 'Mr.', 'Mrs.', 'Ms.'];

const countries = [
  'Albania', 'Andorra', 'Armenia', 'Austria', 'Azerbaijan', 'Belarus', 'Belgium',
  'Bosnia & Herzegovina', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark',
  'Estonia', 'Finland', 'France', 'Georgia', 'Germany', 'Greece', 'Hungary', 'Iceland',
  'Ireland', 'Italy', 'Kosovo', 'Latvia', 'Liechtenstein', 'Lithuania', 'Luxembourg',
  'Macedonia', 'Malta', 'Moldova', 'Monaco', 'Montenegro', 'Netherlands', 'Norway',
  'Poland', 'Portugal', 'Romania', 'Russia', 'San Marino', 'Serbia', 'Slovakia',
  'Slovenia', 'Spain', 'Sweden', 'Switzerland', 'Turkey', 'Ukraine', 'United Kingdom', 'Vatican City'
];

const formBreakpoints = [
  { minWidth: 0, maxWidth: 768, value: 1 },
  { minWidth: 769, value: 2 }
];

const firstFieldSetBreakpoints = [
  { minWidth: 0, maxWidth: 499, value: 1 },
  { minWidth: 500, value: 6 }
];

const secondFieldSetBreakpoints = [
  { minWidth: 0, maxWidth: 499, value: 1 },
  { minWidth: 500, value: 2 }
];
</script>

<style>
.k-form-field-wrap { width: 100%; }
</style>
