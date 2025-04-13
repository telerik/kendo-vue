<template>
  <div>
    <div class="example-config">
      <p>Select a date range:</p>
      <DateRangePicker :min="min" :max="max" :default-value="defaultValue" />
    </div>
  </div>
</template>

<script>
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    DateRangePicker,
  },
  data() {
    return {
      min: new Date(2018, 8, 1),
      max: new Date(2018, 9, 25),
      defaultValue: {
        start: new Date(2018, 8, 5),
        end: new Date(2018, 9, 13),
      },
    };
  },
};
</script>
