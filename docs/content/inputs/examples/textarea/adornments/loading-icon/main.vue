<template>
  <div>
    <TextArea :style="{ width: '230px' }" :show-loading-icon="true" :rows="4" />
  </div>
</template>

<script setup>
import { TextArea } from "@progress/kendo-vue-inputs";
</script>
