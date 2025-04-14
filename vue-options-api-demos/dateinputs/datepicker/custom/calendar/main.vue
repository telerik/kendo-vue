<template>
     <datepicker :style="{ width: '230px' }"
        :calendar="customCalendar"
        :show="true"
     >
        <template v-slot:myTemplate="{props}">
            <custom :value="props.value" @change="(ev) => props.onChange(ev)" />
        </template>
    </datepicker>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import CustomCalendar from './CustomCalendar.vue';

export default {
    components: {
      'datepicker': DatePicker,
      'custom': CustomCalendar
    },
    data: function() {
        return {
            customCalendar: 'myTemplate'
        };
    }
};

</script>
