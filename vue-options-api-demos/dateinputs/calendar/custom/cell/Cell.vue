<template>
<calendar-cell :is-selected="isSelected" @click="handleClick" :style="cellStyle">
   {{formattedValue}}
</calendar-cell>
</template>
<script>
import { CalendarCell } from '@progress/kendo-vue-dateinputs';

export default {
    name: 'CustomCalendarCell',
    props: CalendarCell.props,
    components: {
        'calendar-cell': CalendarCell
    },
    emits:{
        click:null
    },
    computed: {
        cellStyle: function(){
            return this.$props.isWeekend ? { opacity: '.7' } : { fontWeight: 'bold' }
        }
    },
    methods: {
        handleClick: function(e){
            this.$emit('click', this.$props.value, e);
        }
    }
}
</script>
