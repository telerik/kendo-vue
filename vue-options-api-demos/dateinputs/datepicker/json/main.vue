<template>
  <div class="example-config">
        <datepicker :style="{ width: '230px' }" :value="value" @change="onChange"  ></datepicker>
    </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import { provideIntlService } from '@progress/kendo-vue-intl';

export default {
    components: {
      'datepicker': DatePicker
    },
     mounted: function(){
          setTimeout(() => {
            const date = '2016-01-04';
            this.value = provideIntlService(this).parseDate(date);
        }, 1000);
    },
    methods: {
        onChange (event) {
            this.value = event.value;
        }
    }
};

</script>
