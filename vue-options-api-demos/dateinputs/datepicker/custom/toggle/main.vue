<template>
     <div :style="{ textAlign: 'center' }">
        <datepicker :style="{ width: '230px' }"
            :toggle-button="customToggleButton"
            >
        <template v-slot:myTemplate="{props}">
            <custom @click="(ev) => props.onClick(ev)" />
        </template>
        </datepicker>
    </div>
</template>
<script>
import { DatePicker } from '@progress/kendo-vue-dateinputs';
import ToggleButton from './CustomToggleButton.vue';

export default {
    components: {
      'datepicker': DatePicker,
      'custom': ToggleButton
    },
    data: function() {
        return {
            customToggleButton: 'myTemplate'
        };
    }
};

</script>
