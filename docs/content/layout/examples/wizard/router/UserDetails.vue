<template>
  <div style="display: flex; justify-content: center;">
    <div style="flex-direction: column;">
      <Form ref="form" class="form-element" :initial-values="initialValues">
        <FormContent />
      </Form>
    </div>
  </div>
</template>

<script setup>
import { Form } from '@progress/kendo-vue-form';
import FormContent from './FormContent.vue';

const initialValues = {
    firstName: '',
    lastName: '',
};
</script>
