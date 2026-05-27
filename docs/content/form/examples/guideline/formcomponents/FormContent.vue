<template>
  <FormElement :style="{ maxWidth: '650px' }">
    <fieldset class="k-form-fieldset">
      <legend class="k-form-legend">
        BOOK YOUR DREAM VACATION TODAY
      </legend>
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
        id="phoneNumber"
        name="phoneNumber"
        label="Phone Number"
        mask="(999) 000-00-00-00"
        hint="Hint: Your active phone number."
        :component="'myTemplate'"
        :validator="phoneValidator"
      >
        <template #myTemplate="{ props }">
          <FormMaskedTextBox
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
      <div :style="{ display: 'flex', justifyContent: 'space-between' }">
        <Field
          id="arrivalDate"
          name="arrivalDate"
          label="Arrival Date"
          hint="Hint: Should be greater than today."
          :component="'myTemplate'"
          :validator="arrivalDateValidator"
          :style="{ width: '90%', marginRight: '18px' }"
        >
          <template #myTemplate="{ props }">
            <FormDatePicker
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
        <Field
          id="nightsCount"
          name="nightsCount"
          label="Number of Nights"
          format="n0"
          :component="'myTemplate'"
          :validator="nightsValidator"
        >
          <template #myTemplate="{ props }">
            <FormNumericTextBox
              v-bind="props"
              @change="props.onChange"
              @blur="props.onBlur"
              @focus="props.onFocus"
            />
          </template>
        </Field>
      </div>
      <Field
        id="guestsCount"
        name="guestsCount"
        label="Number of Guests"
        hint="Hint: Maximum 5 guests."
        format="n0"
        :component="'myTemplate'"
        :validator="guestsValidator"
      >
        <template #myTemplate="{ props }">
          <FormNumericTextBox
            v-bind="props"
            @change="props.onChange"
            @blur="props.onBlur"
            @focus="props.onFocus"
          />
        </template>
      </Field>
      <Field
        id="comments"
        name="comments"
        label="Comments"
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
      <span class="k-form-separator" />
      <Field
        id="terms"
        name="terms"
        label="I agree with terms and conditions"
        :component="'myTemplate'"
        :validator="termsValidator"
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
        <KButton
          theme-color="primary"
          type="submit"
          :disabled="!kendoForm.allowSubmit"
        >
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
import FormMaskedTextBox from "./FormMaskedTextBox.vue";
import FormDatePicker from "./FormDatePicker.vue";
import FormNumericTextBox from "./FormNumericTextBox.vue";
import FormTextArea from "./FormTextArea.vue";
import FormCheckbox from "./FormCheckbox.vue";
import { Button as KButton } from "@progress/kendo-vue-buttons";

import {
    termsValidator,
    emailValidator,
    nameValidator,
    phoneValidator,
    guestsValidator,
    nightsValidator,
    arrivalDateValidator,
} from "./validators";

const kendoForm = inject("kendoForm", {});
</script>
