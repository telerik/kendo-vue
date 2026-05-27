<template>
  <div class="example-wrapper">
    <DateRangePicker
      :start-date-input-settings="startDateInputSettings"
      :end-date-input-settings="endDateInputSettings"
    />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const startDateInputSettings = reactive({
    spinners: true,
    label: "Holiday Start",
    format: "dd/M/yy",
});

const endDateInputSettings = reactive({
    steps: {
        day: 2,
    },
    label: "Holiday End",
    formatPlaceholder: "short",
});
</script>

