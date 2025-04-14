<template>
  <div id="vueapp" class="vue-app">
    <div class="row example-wrapper" :styles="{ minHeight: 450 }">
      <div class="col-xs-12 col-md-6 example-col">
        <p>DateInput</p>
        <date-input v-model="value"></date-input>
        <p>
          (use <code>←</code> and <code>→</code> to navigate, <code>↑</code> and
          <code>↓</code> to update)
        </p>
        <p>DatePicker</p>
        <date-picker v-model="value"></date-picker>
        <p>
          (use Alt+<code>↓</code> to open the calendar, <code>←</code> and
          <code>→</code> to navigate, <code>↑</code> to increment and
          <code>↓</code> to decrement the value)
        </p>
        <p>DateTimePicker</p>
        <datetimepicker :style="{ width: '230px' }" :default-value="value" />
        <p>
          (use Alt+<code>↓</code> to open the calendar, <code>←</code> and
          <code>→</code> to navigate, <code>↑</code> to increment and
          <code>↓</code> to decrement the value)
        </p>
        <p>TimePicker</p>
        <timepicker :style="{ width: '230px' }" />
        <p>
          (use Alt+<code>↓</code> to open the time list, <code>↑</code> to
          increment and <code>↓</code> to decrement the value)
        </p>
        <p>DateRangePicker</p>
        <daterangepicker />
      </div>
      <div class="col-xs-12 col-md-6 example-col">
        <p>Calendar</p>
        <calendar v-model="value"></calendar>
        <p>MultiView Calendar</p>
        <calendar v-model="value" :views="2"></calendar>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Calendar,
  DateInput,
  DateRangePicker,
  DatePicker,
  DateTimePicker,
  TimePicker,
} from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    "date-picker": DatePicker,
    calendar: Calendar,
    "date-input": DateInput,
    datetimepicker: DateTimePicker,
    timepicker: TimePicker,
    daterangepicker: DateRangePicker,
  },
  data: function () {
    return {
      value: new Date(),
    };
  },
  methods: {
    changeDate({ value }) {
      this.value = value;
    },
  },
};
</script>
