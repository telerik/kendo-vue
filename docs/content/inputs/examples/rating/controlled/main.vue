<template>
  <Rating :value="value" @change="handleValueChange" />
</template>

<script setup>
import { ref } from "vue";
import { Rating } from "@progress/kendo-vue-inputs";

const value = ref(2);

function handleValueChange(event) {
    value.value = event.value;
}
</script>
