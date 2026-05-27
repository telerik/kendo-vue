<template>
  <div>
    <div class="example-config">
      <p>Select a date range:</p>
      <DateRangePicker :min="min" :max="max" :default-value="defaultValue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const min = ref(new Date(2018, 8, 1));
const max = ref(new Date(2018, 9, 25));
const defaultValue = ref({
    start: new Date(2018, 8, 5),
    end: new Date(2018, 9, 13),
});
</script>
