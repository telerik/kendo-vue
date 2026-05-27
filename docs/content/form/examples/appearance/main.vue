<template>
  <div class="example-wrapper">
    <Form @submit="handleSubmit">
      <FormElement :style="{ maxWidth: '650px' }" :size="'small'">
        <FormFieldSet legend="Small" :style="{ marginBottom: '16px' }">
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
              <Field :name="'email'" :component="KInput" :label="'Email'" :label-class-name="'k-form-label'" />
            </div>
          </FieldWrapper>
        </FormFieldSet>
      </FormElement>
    </Form>

    <Form @submit="handleSubmit">
      <FormElement :style="{ maxWidth: '650px' }" :size="'medium'">
        <FormFieldSet legend="Medium" :style="{ marginBottom: '16px' }">
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
              <Field :name="'email'" :component="KInput" :label="'Email'" :label-class-name="'k-form-label'" />
            </div>
          </FieldWrapper>
        </FormFieldSet>
      </FormElement>
    </Form>

    <Form @submit="handleSubmit">
      <FormElement :style="{ maxWidth: '650px' }" :size="'large'">
        <FormFieldSet legend="Large">
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
              <Field :name="'email'" :component="KInput" :label="'Email'" :label-class-name="'k-form-label'" />
            </div>
          </FieldWrapper>
        </FormFieldSet>
      </FormElement>
    </Form>
  </div>
</template>

<script setup>
import { Form, FormElement, Field, FieldWrapper, FormFieldSet } from '@progress/kendo-vue-form';
import { Input as KInput } from '@progress/kendo-vue-inputs';

function handleSubmit(dataItem) {
  alert(JSON.stringify(dataItem, null, 2));
}
</script>

<style>
.example-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}
.example-wrapper > * {
  flex: 1 1 28%;
  background: rgba(60, 60, 60, 0.08);
  padding: 16px;
  border-radius: 8px;
}
</style>
