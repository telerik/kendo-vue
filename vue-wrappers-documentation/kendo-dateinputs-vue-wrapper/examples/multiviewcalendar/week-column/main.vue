<template>
    <kendo-multiviewcalendar :week-number="true"></kendo-multiviewcalendar>
</template>
<script>
import { MultiViewCalendar } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-multiviewcalendar': MultiViewCalendar
  }
}
</script>
