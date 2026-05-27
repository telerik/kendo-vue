<template>
  <KForm :validator="firstOrLastNameValidator" @submit="handleSubmit">
    <FormContent />
  </KForm>
</template>

<script setup>
import { Form as KForm } from "@progress/kendo-vue-form";
import FormContent from "./FormContent.vue";

function firstOrLastNameValidator(values) {
    if (values["user.firstName"] || values["user.lastName"]) {
        return;
    }

    return {
        VALIDATION_SUMMARY: "Please fill at least one of the following fields.",
        ["user.firstName"]:
      "Please check the validation summary for more information.",
        ["user.lastName"]:
      "Please check the validation summary for more information.",
    };
}

function handleSubmit(dataItem) {
    alert(JSON.stringify(dataItem, null, 2));
}
</script>
