<template>
  <div class="example-wrapper">
    <p>Christmas holiday:</p>
    <DateRangePicker :disabled="true" :value="value" :show="true" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const value = ref({
    start: new Date(2018, 11, 25),
    end: new Date(2018, 11, 27),
});
</script>
