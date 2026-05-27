<template>
  <KForm
    :initial-values="{ userCount: 20, ticketCount: 100 }"
    @submit="handleSubmit"
  >
    <FormContent />
  </KForm>
</template>

<script setup>
import { Form as KForm } from "@progress/kendo-vue-form";
import FormContent from './FormContent.vue';

function handleSubmit(dataItem) {
    alert(JSON.stringify(dataItem, null, 2));
}
</script>

