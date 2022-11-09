<template>
    <DateRangePicker
      :start-date-input="'CustomStartDateInput'"
      :end-date-input="'CustomEndDateInput'"
    >
      <template v-slot:CustomStartDateInput="{props}">
           <CustomStartDateInput v-bind="props" />
        </template>
        <template v-slot:CustomEndDateInput="{props}">
           <CustomEndDateInput v-bind="props" />
        </template>
    </DateRangePicker>
</template>

<script>
import { DateRangePicker } from '@progress/kendo-vue-dateinputs';
import CustomStartDateInput from "./customStartDateInput.vue";
import CustomEndDateInput from "./customEndDateInput.vue";

export default {
    components: {
       DateRangePicker,
       CustomStartDateInput,
       CustomEndDateInput
    }
};
</script>

