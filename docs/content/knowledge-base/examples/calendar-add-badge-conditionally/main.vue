<template>
  <div class="example-config">
    <Calendar :cell="customCell">
      <template #myTemplate="{ props }">
        <Cell v-bind="props" />
      </template>
    </Calendar>
  </div>
</template>

<script setup>
import { Calendar } from '@progress/kendo-vue-dateinputs';
import Cell from './Cell.vue';

const customCell = 'myTemplate';
</script>
