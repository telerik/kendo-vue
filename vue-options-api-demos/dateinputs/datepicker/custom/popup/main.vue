<template>
     <div :style="{ textAlign: 'center' }">
        <datepicker :style="{ width: '230px' }"
            ref="datepicker"
            :popup="customPopup"
            >
        <template v-slot:myTemplate="{props}">
            <custom :show="props.show" />
        </template>
        </datepicker>
    </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import CustomPopup from './CustomPopup.vue';

export default {
    components: {
      'datepicker': DatePicker,
      'custom': CustomPopup
    },
    data: function() {
       return {
            customPopup: CustomPopup
        };
    }
};

</script>
