<template>
  <td
    @click="clickHandler"
    :class="['k-calendar-td', cellClass]"
    :style="cellStyle"
  >
    <span class="k-link" :title="isWeekend && sometitle">
      {{ formattedValue }}
    </span>
  </td>
</template>
<script>
import { CalendarCell } from '@progress/kendo-vue-dateinputs';

export default {
  props: CalendarCell.props,
  emits: {
    click: null,
  },
  data: function () {
    return {
      sometitle: "We're closed on the weekends!",
    };
  },
  computed: {
    cellStyle: function () {
      return {
        cursor: 'pointer',
        opacity: this.$props.isWeekend ? 0.6 : 1,
      };
    },
    cellClass: function () {
      return {
        'k-state-selected': this.$props.isSelected,
        'k-state-focused': this.$props.isFocused,
      };
    },
  },
  methods: {
    clickHandler: function (e) {
      if (!this.$props.isWeekend) {
        this.$emit('click', this.$props.value, e);
      }
    },
  },
};
</script>
