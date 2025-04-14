<template>
    <div :style="{ textAlign: 'center' }">
        <timepicker :style="{ width: '230px' }"
            ref="datepicker"
            :popup="CustomPopup"
        >
        </timepicker>
    </div>
</template>
<script>
import { TimePicker } from '@progress/kendo-vue-dateinputs';
import CustomPopup from './CustomPopup.vue';

export default {
    components: {
        'timepicker': TimePicker
    },
    data () {
        return {
            CustomPopup: CustomPopup
        };
    }
};

</script>
