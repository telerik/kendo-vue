<template>
  <div :style="{ margin: '15px' }">
    <h4>Half Precision Mode First-item Full</h4>
    <Rating :min="1" :max="3" :precision="'half'" />
  </div>
</template>

<script setup>
import { Rating } from "@progress/kendo-vue-inputs";
</script>
