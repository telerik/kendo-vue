<template>
  <div>
    <p>DateTimePicker</p>
    <datetimepicker :style="{ width: '260px' }"
      :label="'Select date and time:'"
      @change="onChangeDateTimePicker"
      :value="dateTimePickerValue"
      :placeholder="''"
    >
    </datetimepicker>
  </div>
</template>
<script>
import { DateTimePicker } from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    datetimepicker: DateTimePicker,
  },
  data: function () {
    return {
      dateTimePickerValue: undefined,
    };
  },
  methods: {
    onChangeDateTimePicker: function (e) {
      this.dateTimePickerValue = e.value;
    },
  },
};
</script>