<template>
  <div class="row">
    <div class="col-xs-12 col-md-12 example-col">
      <p>DateTimePicker with default value</p>
      <DateTimePicker
        :style="{ width: '260px' }"
        :default-value="defaultValue"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';

const defaultValue = ref(new Date());
</script>
