<template>
      <div style="display:inline-flex">
        <div style="margin-right: 20px">
            <h4>Disable Weekend</h4>
            <kendo-datepicker id="weekend-date-picker"
            :value="new Date()"
            :disable-dates="disabled"></kendo-datepicker>
        </div>

       <div>
            <h4>Disable Holidays</h4>
            <kendo-datepicker id="holidays-date-picker"
            :value="new Date()"
            :disable-dates="disableDates"></kendo-datepicker>
        </div>
    </div>  
</template>
<script>
import { DatePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-datepicker': DatePicker
  },
  data: function () {
    return {
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
