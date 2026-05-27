<template>
  <div id="vueapp" class="vue-app">
    <div class="row example-wrapper" :styles="{ minHeight: 450 }">
      <div class="col-xs-12 col-md-6 example-col">
        <p>DateInput</p>
        <DateInput v-model="value" />
        <p>
          (use <code>←</code> and <code>→</code> to navigate, <code>↑</code> and
          <code>↓</code> to update)
        </p>
        <p>DatePicker</p>
        <DatePicker v-model="value" />
        <p>
          (use Alt+<code>↓</code> to open the calendar, <code>←</code> and
          <code>→</code> to navigate, <code>↑</code> to increment and
          <code>↓</code> to decrement the value)
        </p>
        <p>DateTimePicker</p>
        <DateTimePicker :style="{ width: '230px' }" :default-value="value" />
        <p>
          (use Alt+<code>↓</code> to open the calendar, <code>←</code> and
          <code>→</code> to navigate, <code>↑</code> to increment and
          <code>↓</code> to decrement the value)
        </p>
        <p>TimePicker</p>
        <TimePicker :style="{ width: '230px' }" />
        <p>
          (use Alt+<code>↓</code> to open the time list, <code>↑</code> to
          increment and <code>↓</code> to decrement the value)
        </p>
        <p>DateRangePicker</p>
        <DateRangePicker />
      </div>
      <div class="col-xs-12 col-md-6 example-col">
        <p>Calendar</p>
        <Calendar v-model="value" />
        <p>MultiView Calendar</p>
        <Calendar v-model="value" :views="2" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
    Calendar,
    DateInput,
    DateRangePicker,
    DatePicker,
    DateTimePicker,
    TimePicker,
} from "@progress/kendo-vue-dateinputs";

const value = ref(new Date());
</script>
