<template>
  <div id="vueapp" class="vue-app">
    <div class="example-config">
      <Calendar
        :min="new Date(2010, 10, 10)"
        :max="new Date(2010, 10, 20)"
      />
    </div>
  </div>
</template>

<script setup>
import { Calendar } from '@progress/kendo-vue-dateinputs';
</script>
