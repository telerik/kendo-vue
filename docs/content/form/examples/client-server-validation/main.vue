<template>
  <div :style="{ maxWidth: '800px', margin: '20px auto', padding: '20px' }">
    <Form
      :initial-values="initialFormValues"
      @submit="handleSubmit"
      :validator="formValidator"
      :errors="formErrors"
      :on-change="handleChange"
    >
      <FormContent :is-submitting="isSubmitting" />
    </Form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Form } from '@progress/kendo-vue-form';
import FormContent from './FormContent.vue';

const isSubmitting = ref(false);
const formErrors = ref({});

const EMAIL_REGEX = /\S+@\S+\.\S+/;

function formValidator(values) {
  const errors = {};
  const { username, email, password, confirmPassword } = values;

  if (username && username.length < 3) {
    errors.username = 'Username must be at least 3 characters (client validation)';
  }
  if (email && !EMAIL_REGEX.test(email)) {
    errors.email = 'Invalid email format (client validation)';
  }
  if (password && confirmPassword && password !== confirmPassword) {
    errors.confirmPassword = 'Passwords do not match (client validation)';
  }
  return Object.keys(errors).length > 0 ? errors : undefined;
}

function handleChange(fieldName) {
  if (formErrors.value[fieldName]) {
    const { [fieldName]: _removed, ...rest } = formErrors.value;
    formErrors.value = rest;
  }
}

async function simulateServerValidation(values) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const errors = {};
  if (values.username === 'admin') errors.username = 'Username "admin" is not allowed (server validation)';
  if (values.email === 'test@blocked.com') errors.email = 'Email domain is blocked (server validation)';
  return { errors };
}

async function handleSubmit(values) {
  isSubmitting.value = true;
  try {
    const { errors: serverErrors } = await simulateServerValidation(values);
    if (Object.keys(serverErrors).length > 0) {
      formErrors.value = serverErrors;
      return;
    }
    alert('Form submitted successfully!\n\n' + JSON.stringify(values, null, 2));
  } finally {
    isSubmitting.value = false;
  }
}

const initialFormValues = { username: '', email: '', password: '', confirmPassword: '' };
</script>

<style>
.mb-3 { margin-bottom: 12px; }
</style>
