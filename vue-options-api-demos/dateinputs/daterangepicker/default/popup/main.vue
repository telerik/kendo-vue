<template>
  <div class="example-wrapper">
    <DateRangePicker />
    <p>
      (use Alt+<code>↓</code> to open the calendar, <code>←</code> and{{ " " }}
      <code>→</code> to navigate, <code>↑</code> to increment and{{ " " }}
      <code>↓</code> to decrement the value)
    </p>
  </div>
</template>

<script>
import { DateRangePicker } from "@progress/kendo-vue-dateinputs";

export default {
  components: {
    DateRangePicker,
  },
};
</script>
