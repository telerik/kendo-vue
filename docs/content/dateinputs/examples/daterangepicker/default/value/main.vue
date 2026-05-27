<template>
  <div class="row">
    <div class="col-xs-12 col-md-12 example-col">
      <p>DateRangePicker with default value</p>
      <DateRangePicker :default-value="defaultValue" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const defaultValue = ref({
    start: new Date(2018, 8, 5),
    end: null,
});
</script>
