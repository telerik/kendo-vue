<template>
  <div id="vueapp" class="vue-app">
    <div class="example-config">
      <Calendar
        :mode="'multiple'"
        :value="[
          new Date(2010, 10, 10),
          new Date(2010, 10, 11),
          new Date(2010, 10, 12)
        ]"
      />
    </div>
  </div>
</template>

<script setup>
import { Calendar } from '@progress/kendo-vue-dateinputs';
</script>
