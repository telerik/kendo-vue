<template>
  <FormElement>
    <fieldset
      class="k-form-fieldset"
      :style="{ width: '500px', margin: '0 auto' }"
    >
      <Field
        id="fullName"
        name="fullName"
        label="Full Name"
        :component="'myTemplate'"
        :validator="nameValidator"
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
        id="countryselected"
        name="countryselected"
        label="Country"
        hint="Hint: Only European countries."
        :component="'myTemplate'"
        :data="countries"
        :validator="requiredValidator"
      >
        <template #myTemplate="{ props }">
          <FormAutoComplete
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        id="gender"
        name="gender"
        label="Gender"
        layout="horizontal"
        :component="'myTemplate'"
        :data-items="genders"
        :validator="requiredValidator"
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
      <Field
        id="about"
        name="about"
        label="About"
        optional
        :component="'myTemplate'"
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
    </fieldset>
  </FormElement>
</template>

<script setup>
import { Field, FormElement } from '@progress/kendo-vue-form';
import FormInput from './FormInput.vue';
import FormAutoComplete from './FormAutoComplete.vue';
import FormRadioGroup from './FormRadioGroup.vue';
import FormTextArea from './FormTextArea.vue';
import { requiredValidator, nameValidator } from './validators';

const genders = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
];

const countries = [
    'Albania',
    'Andorra',
    'Armenia',
    'Austria',
    'Azerbaijan',
    'Belarus',
    'Belgium',
    'Bosnia & Herzegovina',
    'Bulgaria',
    'Croatia',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Estonia',
    'Finland',
    'France',
    'Georgia',
    'Germany',
    'Greece',
    'Hungary',
    'Iceland',
    'Ireland',
    'Italy',
    'Kosovo',
    'Latvia',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Malta',
    'Moldova',
    'Monaco',
    'Montenegro',
    'Netherlands',
    'Norway',
    'Poland',
    'Portugal',
    'Romania',
    'Russia',
    'San Marino',
    'Serbia',
    'Slovakia',
    'Slovenia',
    'Spain',
    'Sweden',
    'Switzerland',
    'Turkey',
    'Ukraine',
    'United Kingdom',
    'Vatican City',
];
</script>
