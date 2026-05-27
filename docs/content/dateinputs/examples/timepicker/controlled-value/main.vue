<template>
  <div class="row">
    <div class="example-config col-xs-12 col-md-12 example-col">
      <p>The value is: {{ `${value}` }}</p>
    </div>
    <div class="col-xs-12 col-md-12 example-col">
      <p>Controlled TimePicker</p>
      <TimePicker
        :style="{ width: '230px' }"
        :value="value"
        @change="handleChange"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { TimePicker } from '@progress/kendo-vue-dateinputs';

const value = ref(new Date());

const handleChange = (event) => {
    value.value = event.target.value;
};
</script>
