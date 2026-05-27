<template>
  <Form :initialValues="formValue" @submit="handleSubmit">
    <FormContent />
  </Form>
</template>

<script setup>
import { ref } from "vue";
import { Form } from "@progress/kendo-vue-form";
import FormContent from "./FormContent.vue";

const formValue = ref({ gender: "Male" });

const handleSubmit = (dataItem) => {
    alert(JSON.stringify(dataItem, null, 2));
};
</script>
