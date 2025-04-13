<template>
   <div class="example-config">
        <datepicker :style="{ width: '230px' }"  :week-number="true"  ></datepicker>
    </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'datepicker': DatePicker
    }
};

</script>
