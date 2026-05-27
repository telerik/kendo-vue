<template>
  <div class="example-wrapper row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>DateInput</p>
      <DateInput
        :style="{ width: '230px' }"
        :id="dateInputID"
        :placeholder="''"
        :label="'Enter date:'"
        @change="onChangeDateInput"
      />
      <br />
      <br />
      <p>DatePicker</p>
      <DatePicker
        :style="{ width: '230px' }"
        :id="datePickerID"
        :placeholder="''"
        :label="'Select date:'"
        @change="onChangeDatePicker"
        :value="datePickerValue"
      />
      <br />
      <br />
      <p>TimePicker</p>
      <TimePicker
        :style="{ width: '230px' }"
        :id="timePickerID"
        :placeholder="''"
        :label="'Select time:'"
        @change="onChangeTimePicker"
        :value="timePickerValue"
      />
      <br />
      <br />
      <p>DateTimePicker</p>
      <DateTimePicker
        :style="{ width: '230px' }"
        :id="dateTimePickerID"
        :placeholder="''"
        :label="'Select date and time:'"
        @change="onChangeDateTimePicker"
        :value="dateTimePickerValue"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import {
    DateInput,
    DatePicker,
    TimePicker,
    DateTimePicker,
} from "@progress/kendo-vue-dateinputs";

const dateInputID = "dateInputID";
const datePickerID = "datePickerID";
const timePickerID = "timePickerID";
const dateTimePickerID = "dateTimePickerID";

const dateInputValue = ref(null);
const datePickerValue = ref(null);
const timePickerValue = ref(null);
const dateTimePickerValue = ref(null);

function onChangeDateInput(e) {
    dateInputValue.value = e.value;
}

function onChangeDatePicker(e) {
    datePickerValue.value = e.value;
}

function onChangeTimePicker(e) {
    timePickerValue.value = e.value;
}

function onChangeDateTimePicker(e) {
    dateTimePickerValue.value = e.value;
}
</script>
