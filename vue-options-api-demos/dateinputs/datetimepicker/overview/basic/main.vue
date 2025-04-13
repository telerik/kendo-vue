<template>
    <div class="example-wrapper">
          <datetimepicker :style="{ width: '260px' }" />
      </div>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
      'datetimepicker': DateTimePicker
    }
};

</script>
