<template>
  <div>
    <div :style="{ margin: '15px' }">
      <h4>Continues Selection Mode</h4>
      <Rating :selection="'continues'" />
    </div>
    <div :style="{ margin: '15px' }">
      <h4>Single Selection Mode</h4>
      <Rating :selection="'single'" />
    </div>
  </div>
</template>

<script setup>
import { Rating } from "@progress/kendo-vue-inputs";
</script>
