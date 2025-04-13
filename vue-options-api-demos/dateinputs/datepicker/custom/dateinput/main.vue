<template>
  <datepicker
    :style="{ width: '260px' }"
    :date-input="customDateInput"
    :default-value="new Date()"
    :width="'270px'"
    :show="true"
  >
    <template v-slot:myTemplate="{ props }">
      <custom :value="props.value" @change="(e) => props.onChange(e)" />
    </template>
  </datepicker>
</template>
<script>
import CustomDateInput from './CustomDateInput.vue';
import { DatePicker } from '@progress/kendo-vue-dateinputs';

export default {
  components: {
    datepicker: DatePicker,
    custom: CustomDateInput,
  },
  data() {
    return {
      customDateInput: 'myTemplate',
    };
  },
};
</script>
