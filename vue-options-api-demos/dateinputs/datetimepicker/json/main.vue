<template>
    <div>
            <div class="example-config">
                <p>TimePicker value: {{`${departureTime}`}}</p>
            </div>
            <label>
                Select Birthdate:
                <datetimepicker :style="{ width: '260px' }"
                    :value="departureTime"
                    @change="handleChange"
                />
            </label>
        </div>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
import { provideIntlService } from '@progress/kendo-vue-intl';

export default {
    components: {
      'datetimepicker': DateTimePicker
    },
    mounted: function(){
        setTimeout(() => {
          const date = '2017-06-27 14:30';
          // @ts-ignore
          this.departureTime = provideIntlService(this).parseDate(date, 'yyyy-MM-dd HH:mm');
        }, 1000);
   },
    data () {
        return {
           departureTime: null
        };
    },
    methods: {
        handleChange (event) {
            this.departureTime= event.target.value;
        }
    }
};

</script>
