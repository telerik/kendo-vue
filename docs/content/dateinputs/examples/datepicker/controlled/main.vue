<template>
  <div class="row">
    <div class="example-config col-xs-12 col-md-12 example-col">
      <p>The value is: {{ value ? value.toDateString() : '' }}</p>
    </div>
    <div class="col-xs-12 col-md-12 example-col">
      <p>Controlled DatePicker</p>
      <DatePicker :style="{ width: '230px' }" :value="value" @change="handleChange" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DatePicker } from '@progress/kendo-vue-dateinputs';

const value = ref(new Date());

function handleChange(event) {
    value.value = event.target.value;
}
</script>
