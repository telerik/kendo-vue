<template>
  <div class="example-wrapper">
    <DateRangePicker :calendar-settings="calendarSettings" />
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const calendarSettings = reactive({
    bottomView: "year",
    topView: "decade",
    views: 1,
});
</script>

