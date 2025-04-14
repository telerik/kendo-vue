<template>
  <div class="example-wrapper">
    <div class="example-config">
      <p>
        (use Alt+<code>↓</code> to open the calendar, Esc to close the calendar,
        <code>←</code> and <code>→</code> to navigate,{" "} <code>↑</code> to
        increment and <code>↓</code> to decrement the value)
      </p>
    </div>
    <DateRangePicker ref="picker" :default-show="true" :default-value="value" />
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
      value: {
        start: new Date(2000, 2, 10),
        end: new Date(2000, 3, 5),
      },
    };
  },
};
</script>