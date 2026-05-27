<template>
  <div>
    <h4>Readonly Mode</h4>
    <Rating :defaultValue="3" :readonly="true" />
  </div>
</template>

<script setup>
import { Rating } from "@progress/kendo-vue-inputs";
</script>
