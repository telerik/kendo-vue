<template>
  <div id="vueapp" class="vue-app">
    <div class="example-wrapper">
      <div class="example-config">
        <p>
          The value is: <br />
          start: {{ value.start ? value.start.toDateString() : '' }} <br />
          end: {{ value.end ? value.end.toDateString() : '' }}
        </p>
      </div>
      <Calendar
        :allow-reverse="true"
        @change="handleChange"
        :mode="'range'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Calendar } from '@progress/kendo-vue-dateinputs';

const value = ref({
    start: null,
    end: null,
});

function handleChange(event) {
    value.value = event.target.value;
}
</script>
