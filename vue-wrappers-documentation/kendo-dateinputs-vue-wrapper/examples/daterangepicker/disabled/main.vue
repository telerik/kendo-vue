<template>
       <div style="display:inline-flex">
        <div style="margin-right: 20px">
            <h4>Disable Weekend</h4>
            <kendo-daterangepicker id="weekend-date-picker"
                                   :range="currentRange"
                                   :disable-dates="disabled">
            </kendo-daterangepicker>
        </div>

       <div>
            <h4>Disable Holidays</h4>
            <kendo-daterangepicker id="holidays-date-picker"
                                   :range="currentRange"
                                   :disable-dates="disableDates">
            </kendo-daterangepicker>
        </div>
    </div>
</template>
<script>
import { DateRangePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-daterangepicker': DateRangePicker
  },
  data: function () {
    return {
        currentRange: {start: new Date(), end: new Date(new Date().setDate(new Date().getDate() + 2))},
        disabled: ["sa", "su"],
        disableDates: function (date) {
            var disabled = [13,14,20,21];

            if (date && disabled.indexOf(date.getDate()) > -1 ) {
                return true;
            } else {
                return false;
            }
        }
    };
  }
}
</script>
