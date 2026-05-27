<template>
  <Form :initial-values="initialValues" @submit="handleSubmit">
    <FormElement :style="{ maxWidth: '650px' }">
      <FormFieldSet>
        <FieldWrapper>
          <div class="k-form-field-wrap">
            <Field :name="'firstName'" :component="KInput" :label="'First name'" :label-class-name="'k-form-label'" />
          </div>
        </FieldWrapper>
        <FieldWrapper>
          <div class="k-form-field-wrap">
            <Field :name="'lastName'" :component="KInput" :label="'Last name'" :label-class-name="'k-form-label'" />
          </div>
        </FieldWrapper>
        <FieldWrapper>
          <div class="k-form-field-wrap">
            <Field :name="'email'" :type="'email'" :component="KInput" :label="'Email'" :label-class-name="'k-form-label'" />
          </div>
        </FieldWrapper>
      </FormFieldSet>
      <div class="k-form-buttons">
        <KButton type="submit">Submit</KButton>
      </div>
    </FormElement>
  </Form>
</template>

<script setup>
import { Form, FormElement, Field, FieldWrapper, FormFieldSet } from '@progress/kendo-vue-form';
import { Input as KInput } from '@progress/kendo-vue-inputs';
import { Button as KButton } from '@progress/kendo-vue-buttons';

function handleSubmit(dataItem) {
  alert(JSON.stringify(dataItem, null, 2));
}

const initialValues = {
  firstName: 'John',
  lastName: 'Peterson',
  email: 'johnpeterson@company.com'
};
</script>
