<template>
  <div id="vueapp" class="vue-app">
    <div class="example-config">
      <Calendar
        :mode="'range'"
        :value="{
          start: new Date(2010, 10, 10),
          end: new Date(2010, 10, 20)
        }"
      />
    </div>
  </div>
</template>

<script setup>
import { Calendar } from '@progress/kendo-vue-dateinputs';
</script>
