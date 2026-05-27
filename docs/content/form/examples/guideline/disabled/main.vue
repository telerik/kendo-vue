<template>
  <KForm
    :initial-values="{
      ownerName: 'Chuck Norris',
      phoneNumber: '(359) 884-12-33-21',
    }"
    @submit="handleSubmit"
  >
    <FormContent />
  </KForm>
</template>

<script setup>
import { Form as KForm } from "@progress/kendo-vue-form";
import FormContent from "./FormContent.vue";

function handleSubmit(dataItem) {
    alert(JSON.stringify(dataItem, null, 2));
}
</script>
