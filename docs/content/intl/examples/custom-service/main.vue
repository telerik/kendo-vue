<template>
  <CustomFormatIntlProvider>
    <DateFormatter :date="date" />
  </CustomFormatIntlProvider>
</template>

<script setup>
import { ref } from "vue";
import { CustomFormatIntlProvider } from "./CustomFormatIntlProvider";
import DateFormatter from "./DateFormatter.vue";

const date = ref(new Date());
</script>
