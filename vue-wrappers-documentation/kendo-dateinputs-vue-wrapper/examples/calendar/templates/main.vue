<template>
     <kendo-calendar :value="new Date()"
	                    :week-number="true"
	                    :month="month">
	    </kendo-calendar>
</template>
<script>
import './styles.css';
import { Calendar } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-calendar': Calendar
  },
  data() {
    return {
        month: {
			      content: '<div class="custom">#=data.value#</div>',
            weekNumber: '<div class="italic">#= data.weekNumber #</div>'
        }
    };
  }
}
</script>
