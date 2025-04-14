<template>
        <datetimepicker :style="{ width: '260px' }"
            :calendar="customCalendar"
        >
            <template v-slot:myTemplate="{props}">
                <custom :value="props.value" @change="(ev) => props.onChange(ev)" />
            </template>
        </datetimepicker>
</template>
<script>
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';
import CustomCalendar from './CustomCalendar.vue';

export default {
    components: {
        'datetimepicker': DateTimePicker,
        'custom': CustomCalendar
    },
    data () {
        return {
            customCalendar: 'myTemplate'
        };
    }
};

</script>
