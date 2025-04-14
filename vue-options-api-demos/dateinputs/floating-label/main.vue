<template>
  <div class="example-wrapper row">
    <div class="col-xs-12 col-md-6 example-col">
      <p>DateInput</p>
      <dateinput :style="{ width: '230px' }"
        :id="dateInputID"
        :placeholder="''"
        :label="'Enter date:'"
        @change="onChangeDateInput"
      />
      <br />
      <br />
      <p>DatePicker</p>
      <datepicker :style="{ width: '230px' }"
        :id="datePickerID"
        :placeholder="''"
        :label="'Select date:'"
        @change="onChangeDatePicker"
        :value="datePickerValue"
      >
      </datepicker>
      <br />
      <br />
      <p>TimePicker</p>
      <timepicker :style="{ width: '230px' }"
        :id="timePickerID"
        :placeholder="''"
        :label="'Select time:'"
        @change="onChangeTimePicker"
        :value="timePickerValue"
      >
      </timepicker>
      <br />
      <br />
      <p>DateTimePicker</p>
      <datetimepicker :style="{ width: '230px' }"
        :id="dateTimePickerID"
        :placeholder="''"
        :label="'Select date and time:'"
        @change="onChangeDateTimePicker"
        :value="dateTimePickerValue"
      >
      </datetimepicker>
    </div>
  </div>
</template>

<script>
import {
  DateInput,
  DatePicker,
  TimePicker,
  DateTimePicker,
} from "@progress/kendo-vue-dateinputs";

export default {
  name: "App",
  components: {
    datepicker: DatePicker,
    datetimepicker: DateTimePicker,
    timepicker: TimePicker,
    dateinput: DateInput,
  },
  data: function () {
    return {
      dateInputID: "dateInputID",
      datePickerID: "datePickerID",
      timePickerID: "timePickerID",
      dateTimePickerID: "dateTimePickerID",
      dateInputValue: null,
      datePickerValue: null,
      timePickerValue: null,
      dateTimePickerValue: null,
    };
  },
  methods: {
    onChangeDateInput: function (e) {
      this.dateInputValue = e.value;
    },
    onChangeDatePicker: function (e) {
      this.datePickerValue = e.value;
    },
    onChangeDateTimePicker: function (e) {
      this.dateTimePickerValue = e.value;
    },
    onChangeTimePicker: function (e) {
      this.timePickerValue = e.value;
    },
  },
};
</script>