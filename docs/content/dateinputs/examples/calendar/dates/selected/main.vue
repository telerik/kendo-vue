<template>
  <div id="vueapp" class="vue-app">
    <div class="example-config">
      <Calendar :value="new Date(2010, 10, 10)" />
    </div>
  </div>
</template>

<script setup>
import { Calendar } from '@progress/kendo-vue-dateinputs';
</script>
