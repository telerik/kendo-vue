<template>
  <div id="vueapp" class="vue-app">
    <div class="example-config">
      <Calendar :disabled="true" />
    </div>
  </div>
</template>

<script setup>
import { Calendar } from '@progress/kendo-vue-dateinputs';
</script>
