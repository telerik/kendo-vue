<template>
      <div class="row k-rtl" >
            <div class="col-xs-12 col-sm-6 col-md-4">
                <h5>Pick a day:</h5>
                <kendo-multiviewcalendar :value="new Date()"
				    :min="new Date(2017, 0, 1)"
				    :max="new Date(2018, 11, 31)">
                </kendo-multiviewcalendar>
            </div>
        </div>
</template>
<script>
import { MultiViewCalendar } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-multiviewcalendar': MultiViewCalendar
  }
}
</script>
