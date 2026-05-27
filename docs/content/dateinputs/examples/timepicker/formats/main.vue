<template>
  <div class="example-wrapper">
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Select a long time:</p>
      <TimePicker
        :style="{ width: '230px' }"
        :format="'HH:mm:ss'"
        :default-value="defaultValue"
      />
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
      <p>Select a short time:</p>
      <TimePicker
        :style="{ width: '230px' }"
        :format="'hh:mm a'"
        :default-value="defaultValue"
      />
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
      <p>Custom Skeleton:</p>
      <TimePicker
        :style="{ width: '230px' }"
        :format="{ skeleton: 'EHmSs' }"
        :default-value="defaultValue"
      />
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
      <p>Custom Format:</p>
      <TimePicker
        :style="{ width: '230px' }"
        :format="customFormat"
        :default-value="defaultValue"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { TimePicker } from '@progress/kendo-vue-dateinputs';

const customFormat = ref({
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
});

const defaultValue = ref(new Date(2000, 2, 10, 13, 30, 0));
</script>
