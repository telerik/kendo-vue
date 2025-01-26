<template>
    <kendo-multiviewcalendar :month="month" :week-number="true"></kendo-multiviewcalendar>
</template>
<style>
    .italic{
        font-style: italic;
    }
    .custom{
         font-weight: bold !important;
    }
</style>
<script>
import { MultiViewCalendar } from '@progress/kendo-dateinputs-vue-wrapper';
export default {
  components: {
    'kendo-multiviewcalendar': MultiViewCalendar
  },
  data(){
    return {
       month: {
            content: '<div class="custom">#=data.value#</div>',
            weekNumber: '<div class="italic">#= data.weekNumber #</div>'
        }
    };
  }
}
</script>
