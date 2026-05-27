<template>
  <div id="vueapp" class="vue-app">
    <div>
      <div class="example-config">
        Selected date is: <b>{{ value ? value.toDateString() : '' }}</b>
      </div>
      <Calendar
        :bottom-view="'year'"
        :top-view="'decade'"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Calendar } from '@progress/kendo-vue-dateinputs';

const value = ref(null);

function handleChange(event) {
    value.value = event.value;
}
</script>
