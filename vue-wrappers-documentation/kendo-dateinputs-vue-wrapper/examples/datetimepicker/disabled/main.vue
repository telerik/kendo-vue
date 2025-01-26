<template>
      <div style="display:inline-flex">
        <div style="margin-right:20px">
            <h4>Weekend</h4>
            <kendo-datetimepicker id="weekend-datetime-picker"
                :value="new Date()"
                :disable-dates="disabled"></kendo-datetimepicker>
        </div>

        <div>
            <h4>Holidays</h4>
              <kendo-datetimepicker id="holidays-datetime-picker"
                :value="new Date()"
                :dates="dates"
                :disable-dates="disableDates"></kendo-datetimepicker>
        </div>    
    </div>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-datetimepicker': DateTimePicker
  },
  data: function () {
    return {
        disabled: ["sa", "su"],
        dates: [
            new Date("1/1/2018"),
            new Date("1/19/2018"),
            new Date("2/16/2018"),
            new Date("4/16/2018"),
            new Date("5/10/2018"),
            new Date("5/25/2018"),
            new Date("6/21/2018"),
            new Date("7/3/2018"),
            new Date("8/17/2018"),
            new Date("9/7/2018"),
            new Date("10/12/2018"),
            new Date("11/11/2018"),
            new Date("11/26/2018"),
            new Date("11/27/2018"),
            new Date("12/25/2018")
        ],
        disableDates: function (date) {
            var dates = $("#holidays-datetime-picker").data("kendoDateTimePicker").options.dates;

            function compareDates(currentDate, dates) {
                for (var i = 0; i < dates.length; i++) {
                    if (dates[i].getDate() == currentDate.getDate() &&
                        dates[i].getMonth() == currentDate.getMonth() &&
                        dates[i].getYear() == currentDate.getYear()) {
                        return true
                    }
                }
            }
            if (date && compareDates(date, dates)) {
                return true;
            } else {
                return false;
            }
        }
    };
  }
}
</script>
