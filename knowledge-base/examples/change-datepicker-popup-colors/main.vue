<template>
    <div :style="{ textAlign: 'center' }">
        <datepicker :popup="customPopup">
            <template v-slot:myTemplate="{ props }">
                <custom :show="props.show" />
            </template>
        </datepicker>
    </div>
</template>
<script>
import './styles.css';

import { DatePicker } from '@progress/kendo-vue-dateinputs';
import CustomPopup from './CustomPopup';

export default {
    components: {
        datepicker: DatePicker,
        custom: CustomPopup,
    },
    data: function () {
        return {
            customPopup: CustomPopup,
        };
    },
};
</script>

<style>
.k-datepicker {
    width: 15em;
}
</style>
