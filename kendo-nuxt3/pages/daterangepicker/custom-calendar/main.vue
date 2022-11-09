<template>
    <DateRangePicker
      :calendar="'CustomCalendar'"
    >
        <template v-slot:CustomCalendar="{props}">
              <CustomCalendar v-bind="props" @change="(e) => props.onChange(e)" 
                  @focus="props.onFocus" @blur="props.onBlur" @keydown="props.onKeydown" />   
        </template>
    </DateRangePicker>
</template>

<script>
import { DateRangePicker } from '@progress/kendo-vue-dateinputs';
import CustomCalendar from "./customCalendar.vue";

export default {
    components: {
       DateRangePicker,
       CustomCalendar
    }
};
</script>

