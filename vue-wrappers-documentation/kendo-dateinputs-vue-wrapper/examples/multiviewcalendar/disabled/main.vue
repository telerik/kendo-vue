<template>
   <kendo-multiviewcalendar :disable-dates="disableDates"></kendo-multiviewcalendar>
</template>
<script>
import { MultiViewCalendar } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-multiviewcalendar': MultiViewCalendar
  },
	methods: {
		disableDates: function (date) {
			var disabled = [1,8,15,22,29];
			if (date && disabled.indexOf(date.getDate()) > -1 ) {
				return true;
			} else {
				return false;
			}
		}
	}
}
</script>
