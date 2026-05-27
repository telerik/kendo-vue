<template>
  <div class="example-config">
    <Calendar :cell="'myTemplate'" :value="value" @change="changeHandler">
      <template #myTemplate="{ props }">
        <Cell
          :data-item="props.dataItem"
          :is-weekend="props.isWeekend"
          :is-focused="props.isFocused"
          :is-selected="props.isSelected"
          :value="props.value"
          :formatted-value="props.formattedValue"
          @click="changeHandler"
        />
      </template>
    </Calendar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Calendar } from '@progress/kendo-vue-dateinputs';
import Cell from './Cell.vue';

const value = ref(null);

function changeHandler(value) {
    const dayOfWeek = value.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        value.value = value;
    }
}
</script>
