<template>
  <FormElement :cols="2" :gutters="{ rows: 5, cols: 10 }" :style="{ maxWidth: '850px' }">
    <FormFieldSet legend="Personal Information" :cols="2" :col-span="1" :gutters="{ rows: 4, cols: 6 }">
      <Field :col-span="1" :name="'firstName'" :label="'First name'" :component="'myTemplate'" :placeholder="'John'" :validator="nameValidator">
        <template #myTemplate="{ props }">
          <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field :col-span="1" :name="'lastName'" :label="'Last name'" :component="'myTemplate'" :placeholder="'Doe'" :validator="nameValidator">
        <template #myTemplate="{ props }">
          <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field :col-span="1" :name="'email'" :type="'email'" :label="'Email'" :component="'myTemplate'" :validator="emailValidator" :placeholder="'johndoe@myemail.com'">
        <template #myTemplate="{ props }">
          <FormInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field :col-span="1" :name="'phoneNumber'" :label="'Phone number'" :component="'maskedTemplate'" :mask="'(999) 000-00-00-00'" :validator="phoneValidator">
        <template #maskedTemplate="{ props }">
          <FormMaskedTextBox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
    </FormFieldSet>
    <FormFieldSet legend="Reservation Details" :cols="2" :col-span="1" :gutters="{ rows: 4, cols: 6 }">
      <Field :col-span="2" :id="'arrivalDate'" :name="'arrivalDate'" :label="'Arrival Date'" :component="'dateTemplate'" :validator="arrivalDateValidator">
        <template #dateTemplate="{ props }">
          <FormDatePicker v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field :col-span="1" :id="'nightsCount'" :name="'nightsCount'" :label="'Number of Nights'" :format="'n0'" :component="'numericTemplate'" :validator="nightsValidator">
        <template #numericTemplate="{ props }">
          <FormNumericTextBox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field :col-span="1" :id="'guestsCount'" :name="'guestsCount'" :label="'Number of Guests'" :hint="'Hint: Maximum 5 guests.'" :format="'n0'" :component="'numericTemplate'" :validator="guestsValidator">
        <template #numericTemplate="{ props }">
          <FormNumericTextBox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
      <Field :id="'terms'" :name="'terms'" :label="'I agree with terms and conditions'" :component="'checkboxTemplate'" :validator="termsValidator">
        <template #checkboxTemplate="{ props }">
          <FormCheckbox v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
        </template>
      </Field>
    </FormFieldSet>
    <hr :style="{ gridColumn: 'span 2', margin: '8px 0' }" />
    <Field :col-span="2" :id="'comments'" :name="'comments'" :label="'Comments'" :optional="true" :component="'textareaTemplate'">
      <template #textareaTemplate="{ props }">
        <FormTextArea v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
      </template>
    </Field>
    <div class="k-form-buttons">
      <KButton :theme-color="'primary'" type="submit" :disabled="!kendoForm.allowSubmit">Send Reservation Request</KButton>
      <KButton type="button" @click="kendoForm.onFormReset">Clear</KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from 'vue';
import { FormElement, Field, FormFieldSet } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import FormInput from './FormInput.vue';
import FormMaskedTextBox from './FormMaskedTextBox.vue';
import FormDatePicker from './FormDatePicker.vue';
import FormNumericTextBox from './FormNumericTextBox.vue';
import FormCheckbox from './FormCheckbox.vue';
import FormTextArea from './FormTextArea.vue';
import {
  nameValidator,
  emailValidator,
  phoneValidator,
  arrivalDateValidator,
  nightsValidator,
  guestsValidator,
  termsValidator
} from './validators';

const kendoForm = inject('kendoForm', {});
</script>
