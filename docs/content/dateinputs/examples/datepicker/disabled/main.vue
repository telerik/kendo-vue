<template>
  <div class="row">
    <div class="col-xs-12 col-md-12 example-col">
      <p>Today's date:</p>
      <DatePicker
        :style="{ width: '230px' }"
        :disabled="true"
        :value="defaultValue"
        :show="true"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DatePicker } from '@progress/kendo-vue-dateinputs';

const defaultValue = ref(new Date());
</script>
