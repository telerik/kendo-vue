<template>
 <div class="example-wrapper">
      <DateRangePicker
        :calendar-settings="calendarSettings"
      />
    </div>
</template>

<script>
import { DateRangePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
       DateRangePicker
    },
    data() {
      return {
        calendarSettings: {
          bottomView: "year",
          topView: "decade",
          views: 1,
        }
      };
    }
};
</script>

