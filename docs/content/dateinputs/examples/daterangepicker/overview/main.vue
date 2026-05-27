<template>
  <div class="row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>DateRangePicker with default shown state</p>
      <DateRangePicker :default-show="defaultShow" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const defaultShow = ref(true);
</script>
