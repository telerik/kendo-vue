<template>
  <DateRangePicker :calendar="'CustomCalendar'">
    <template #CustomCalendar="{ props }">
      <CustomCalendar
        v-bind="props"
        @change="(e) => props.onChange(e)"
        @focus="props.onFocus"
        @blur="props.onBlur"
        @keydown="props.onKeydown"
      />
    </template>
  </DateRangePicker>
</template>

<script setup>
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";
import CustomCalendar from "./CustomCalendar.vue";
</script>
