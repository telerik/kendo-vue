<template>
  <datepicker :style="{ width: '230px' }" 
        :focused-date="new Date(1997, 2, 20)"
    >
  </datepicker>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'datepicker': DatePicker
    }
};

</script>
