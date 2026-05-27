<template>
  <div>
    <h5>Confirm Your Reservation</h5>
    <Form @submit="handleSubmit">
      <FormContent />
    </Form>
  </div>
</template>

<script setup>
import { Form } from '@progress/kendo-vue-form';
import FormContent from './FormContent.vue';

function handleSubmit(dataItem) {
  alert(JSON.stringify(dataItem, null, 2));
}
</script>
