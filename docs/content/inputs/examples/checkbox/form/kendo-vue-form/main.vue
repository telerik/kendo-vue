<template>
  <Form @submit="handleSubmit">
    <FormContent />
  </Form>
</template>

<script setup>
import { Form } from "@progress/kendo-vue-form";
import FormContent from "./FormContent.vue";

function handleSubmit(dataItem) {
    alert(JSON.stringify(dataItem, null, 2));
}
</script>
