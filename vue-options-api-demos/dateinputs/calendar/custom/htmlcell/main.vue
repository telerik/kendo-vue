<template>
  <div class="example-config">
    <Calendar :cell="'myTemplate'" :value="value" @change="changeHandler">
      <template v-slot:myTemplate="{ props }">
        <custom
          :data-item="props.dataItem"
          :is-weekend="props.isWeekend"
          :is-focused="props.isFocused"
          :is-selected="props.isSelected"
          :value="props.value"
          :formatted-value="props.formattedValue"
          @click="changeHandler"
        />
      </template>
    </Calendar>
  </div>
</template>
<script>
import { Calendar } from '@progress/kendo-vue-dateinputs';
import Cell from './Cell.vue';

export default {
  components: {
    Calendar,
    custom: Cell,
  },
  data: function () {
    return {
      value: null,
    };
  },
  methods: {
    changeHandler: function (value) {
      const dayOfWeek = value.getDay();
      // 0 = Sunday, 6 = Saturday
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        this.value = value;
      }
    },
  },
};
</script>
