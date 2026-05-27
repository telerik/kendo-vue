<template>
  <div :style="{ display: 'flex', justifyContent: 'center' }">
    <KForm @submit="handleSubmit">
      <FormContent />
    </KForm>
  </div>
</template>

<script setup>
import { Form as KForm } from "@progress/kendo-vue-form";
import FormContent from "./FormContent.vue";

function handleSubmit(dataItem) {
    alert(JSON.stringify(dataItem, null, 2));
}
</script>
