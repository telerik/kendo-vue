<template>
  <div>
    <p>DatePicker</p>
    <datepicker :style="{ width: '230px' }"
      :label="'Select date:'"
      @change="onChangeDatePicker"
      :value="datePickerValue"
      :placeholder="''"
    >
    </datepicker>
  </div>
</template>
<script>
import { DatePicker } from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    datepicker: DatePicker,
  },
  data: function () {
    return {
      datePickerValue: undefined,
    };
  },
  methods: {
    onChangeDatePicker: function (e) {
      this.datePickerValue = e.value;
    },
  },
};
</script>