<template>
  <Form @submit="handleSubmit">
    <FormContent @image-upload="handleImageUpload" />
  </Form>
</template>

<script setup>
import { Form } from '@progress/kendo-vue-form';
import FormContent from './FormContent.vue';

function handleImageUpload(src) {
  // handled inside FormContent
}

function handleSubmit(dataItem) {
  alert(JSON.stringify(dataItem, null, 2));
}
</script>
