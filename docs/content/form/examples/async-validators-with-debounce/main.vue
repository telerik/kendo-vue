<template>
  <Form
    @submit="handleSubmit"
    :on-change="handleChange"
    :errors="formErrors"
  >
    <FormContent :validating="validating" />
  </Form>
</template>

<script setup>
import { ref, onUnmounted } from 'vue';
import { Form } from '@progress/kendo-vue-form';
import FormContent from './FormContent.vue';

const formErrors = ref({});
const validating = ref(false);
let timeoutId = null;

async function validateUsername(username) {
  await new Promise((resolve) => setTimeout(resolve, 800));
  if (!username) return 'Username is required';
  if (username.length < 3) return 'Username must be at least 3 characters';
  if (username === 'admin' || username === 'test') return 'Username already taken';
  return null;
}

function handleChange(fieldName, value) {
  if (fieldName !== 'username') return;

  validating.value = true;

  if (timeoutId) clearTimeout(timeoutId);

  timeoutId = window.setTimeout(async () => {
    const error = await validateUsername(value);
    formErrors.value = error ? { username: error } : {};
    validating.value = false;
  }, 500);
}

function handleSubmit(dataItem) {
  alert(JSON.stringify(dataItem, null, 2));
}

onUnmounted(() => {
  if (timeoutId) clearTimeout(timeoutId);
});
</script>
