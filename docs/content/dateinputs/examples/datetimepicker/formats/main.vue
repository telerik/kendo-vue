<template>
  <div class="example-wrapper" :style="{ minHeight: '400px' }">
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Select a long time:</p>
      <DateTimePicker
        :style="{ width: '260px' }"
        :format="'dd-MM-yyyy hh:mm:ss a'"
        :default-value="defaultValue"
        :width="'300px'"
      />
    </div>

    <div class="col-xs-12 col-sm-6 example-col">
      <p>Select a short time:</p>
      <DateTimePicker
        :style="{ width: '260px' }"
        :format="'dd MMMM | HH:mm'"
        :default-value="defaultValue"
        :width="'300px'"
      />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Custom Skeleton:</p>
      <DateTimePicker
        :style="{ width: '260px' }"
        :format="{ skeleton: 'yMMMdEHmSs' }"
        :default-value="defaultValue"
        :width="'300px'"
      />
    </div>
    <div class="col-xs-12 col-sm-6 example-col">
      <p>Custom Format:</p>
      <DateTimePicker
        :style="{ width: '260px' }"
        :format="customFormat"
        :default-value="defaultValue"
        :width="'300px'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

const customFormat = {
    year: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
};
const defaultValue = ref(new Date(2000, 2, 10, 13, 30, 0));
</script>
