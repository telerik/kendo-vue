<template>
   	<kendo-calendar :disable-dates="disableDates"></kendo-calendar>
</template>
<script>
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-calendar': Calendar
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
