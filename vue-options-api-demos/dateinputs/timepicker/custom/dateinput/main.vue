<template>
        <timepicker :style="{ width: '230px' }"
                :date-input="customDateInput"
                :default-value="new Date()"
                :width="'180px'"
        >
        <template v-slot:myTemplate="{props}">
            <custom :value="props.value" @change="(e) => props.onChange(e)" />
        </template>
        </timepicker>
</template>
<script>
import { TimePicker } from '@progress/kendo-vue-dateinputs';
import CustomDateInput from './CustomDateInput.vue';

export default {
     components: {
        'timepicker': TimePicker,
        'custom': CustomDateInput

    },
    data () {
        return {
            customDateInput: 'myTemplate'
        };
    }
};

</script>
