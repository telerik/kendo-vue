<template>
     <div class="row">
        <div class="col-xs-12 col-sm-6 example-col">
            <p>DateInput</p>
            <kendo-dateinput v-model="date"></kendo-dateinput>
            <p>(Use <code>←</code> and <code>→</code> to navigate, <code>↑</code> and <code>↓</code> to update.)</p>
            <p>DatePicker</p>
            <kendo-datepicker v-model="date"></kendo-datepicker>
            <p>(Use <code>Alt</code>+<code>↓</code> to open the Calendar.)</p>
            <p>DateRangePicker</p>
            <kendo-daterangepicker v-model="date"></kendo-daterangepicker>
            <p>(Use <code>Alt</code>+<code>↓</code> to open the Calendar.)</p>
            <p>DateTimePicker</p>
            <kendo-datetimepicker v-model="date"></kendo-datetimepicker>
            <p>(Use <code>Alt</code>+<code>↓</code> to open the time list, <code>Tab</code> to move to the next time section in the popup, <code>↑</code> to increment and <code>↓</code> to decrement the value.)</p>
            <p>TimePicker</p>
            <kendo-timepicker v-model="date"></kendo-timepicker>
            <p>(Use <code>Alt</code>+<code>↓</code> to open the time list, <code>Tab</code> to move to the next time section in the popup, <code>↑</code> to increment and <code>↓</code> to decrement the value.)</p>
        </div>
        <div class="col-xs-12 col-sm-6 example-col">
            <p>Calendar</p>
            <kendo-calendar :value="new Date()"></kendo-calendar>
            <p>MultiViewCalendar</p>
            <kendo-multiviewcalendar :value="new Date()"></kendo-multiviewcalendar>
        </div>
    </div>
</template>
<script>
import { Calendar, DateInput, DatePicker, DateRangePicker, DateTimePicker, TimePicker, MultiViewCalendar } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-dateinput': DateInput,
    'kendo-datepicker': DatePicker,
    'kendo-daterangepicker': DateRangePicker,
    'kendo-datetimepicker': DateTimePicker,
    'kendo-timepicker': TimePicker,
    'kendo-calendar': Calendar,
    'kendo-multiviewcalendar': MultiViewCalendar
  },
  data: function () {
    return {
      date: null
    };
  }
}
</script>
