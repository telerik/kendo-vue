<template>
  <div class="row">
    <div class="col-md-6">
      <DateTimePicker
        :style="{ width: '260px' }"
        @change="handleChange"
        :value="value"
      />
    </div>
    <div class="col-md-6">
      <div class="example-config">
        <h5>{{ "DateTimePicker Events" }}</h5>
        <ul class="event-log" :style="{ maxHeight: '300px' }">
          <li v-for="(event, index) in logs" :key="index">{{ event }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';

const value = ref(new Date());
const logs = ref([]);

function handleChange(event) {
    logs.value.unshift("change: " + event.target.value);
    value.value = event.target.value;
}
</script>
