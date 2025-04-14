<template>
  <div>
    <p>TimePicker</p>
    <timepicker :style="{ width: '230px' }"
      @change="onChangeTimePicker"
      :value="timePickerValue"
      :label="'Select time:'"
      :placeholder="''"
    >
    </timepicker>
  </div>
</template>
<script>
import { TimePicker } from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    timepicker: TimePicker,
  },
  data: function () {
    return {
      timePickerValue: undefined,
    };
  },
  methods: {
    onChangeTimePicker: function (e) {
      this.timePickerValue = e.value;
    },
  },
};
</script>