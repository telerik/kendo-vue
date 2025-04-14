<template>
 <div class="example-wrapper">
      <DateRangePicker
        :start-date-input-settings="startDateInputSettings"
        :end-date-input-settings="endDateInputSettings"
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
        startDateInputSettings: {
          spinners: true,
          label: "Holiday Start",
          format: "dd/M/yy",
        },
        endDateInputSettings: {
          steps: {
            day: 2,
          },
          label: "Holiday End",
          formatPlaceholder: "short",
        }
      }
    }
};
</script>

