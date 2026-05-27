<template>
  <DateRangePicker
    ref="picker"
    :show="true"
    :focused-date="new Date(1997, 2, 20)"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

const picker = ref(null);

onMounted(() => {
    picker.value.focusCalendarElement();
});
</script>
