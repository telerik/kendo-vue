<template>
  <FormElement>
    <FormFieldSet legend="User Registration">
      <div class="mb-3">
        <Field :name="'username'" :label="'Username'" :placeholder="'Type \'admin\' then click Submit'" :disabled="isSubmitting" :component="'inputTemplate'">
          <template #inputTemplate="{ props }">
            <FormValidatedInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
          </template>
        </Field>
      </div>
      <div class="mb-3">
        <Field :name="'email'" :type="'email'" :label="'Email'" :placeholder="'Type \'test@blocked.com\' then click Submit'" :disabled="isSubmitting" :component="'inputTemplate'">
          <template #inputTemplate="{ props }">
            <FormValidatedInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
          </template>
        </Field>
      </div>
      <div class="mb-3">
        <Field :name="'password'" :type="'password'" :label="'Password'" :disabled="isSubmitting" :component="'inputTemplate'">
          <template #inputTemplate="{ props }">
            <FormValidatedInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
          </template>
        </Field>
      </div>
      <div class="mb-3">
        <Field :name="'confirmPassword'" :type="'password'" :label="'Confirm Password'" :disabled="isSubmitting" :component="'inputTemplate'">
          <template #inputTemplate="{ props }">
            <FormValidatedInput v-bind="props" @change="props.onChange" @blur="props.onBlur" @focus="props.onFocus" />
          </template>
        </Field>
      </div>
    </FormFieldSet>
    <div class="k-form-buttons">
      <KButton :disabled="!kendoForm.allowSubmit || isSubmitting" type="submit">
        <Loader v-if="isSubmitting" :type="'pulsing'" :size="'small'" />
        <span v-else>Submit</span>
      </KButton>
      <KButton :disabled="isSubmitting" type="button" @click="kendoForm.onFormReset()">
        Reset
      </KButton>
    </div>
  </FormElement>
</template>

<script setup>
import { inject } from 'vue';
import { FormElement, Field, FormFieldSet } from '@progress/kendo-vue-form';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Loader } from '@progress/kendo-vue-indicators';
import FormValidatedInput from './FormValidatedInput.vue';

defineProps({
  isSubmitting: Boolean
});

const kendoForm = inject('kendoForm', {});
</script>
