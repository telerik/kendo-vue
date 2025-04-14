<template>
  <DateRangePicker
    ref="picker"
    :show="true"
    :focused-date="new Date(1997, 2, 20)"
  />
</template>

<script>
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    DateRangePicker,
  },
  mounted() {
    this.$nextTick(function () {
      this.$refs.picker.focusCalendarElement();
    });
  },
};
</script>
