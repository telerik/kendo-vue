<template>
        <datetimepicker :style="{ width: '260px' }"
                :date-input="customDateInput"
                :default-value="new Date()"
                :width="'270px'"

        >
        <template v-slot:myTemplate="{props}">
            <custom :value="props.value" @change="(e) => props.onChange(e)" />
        </template>
        </datetimepicker>
</template>
<script>
import CustomDateInput from './CustomDateInput.vue';
import { DateTimePicker } from '@progress/kendo-vue-dateinputs';

export default {
    components: {
        'datetimepicker': DateTimePicker,
        'custom': CustomDateInput

    },
    data () {
        return {
            customDateInput: 'myTemplate'
        };
    }
};

</script>
