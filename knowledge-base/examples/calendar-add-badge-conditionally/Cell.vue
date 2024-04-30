<template>
    <calendar-cell
      :is-selected="isSelected"
      @click="handleClick"
      :style="cellStyle"
    >
      <span class="sent-items">
        {{ formattedValue }}
        <Badge
          v-if="shouldShowBadge"
          :theme-color="'tertiary'"
          :rounded="'full'"
          :size="'small'"
          >34</Badge
        >
      </span>
    </calendar-cell>
  </template>
  
  <script>
  import { CalendarCell } from '@progress/kendo-vue-dateinputs';
  import { BadgeContainer, Badge } from '@progress/kendo-vue-indicators';
  
  export default {
    name: 'CustomCalendarCell',
    props: CalendarCell.props,
    components: {
      'calendar-cell': CalendarCell,
      BadgeContainer,
      Badge,
    },
    emits: {
      click: null,
    },
    computed: {
      cellStyle: function () {
        return this.$props.isWeekend ? { opacity: '.7' } : { fontWeight: 'bold' };
      },
      shouldShowBadge() {
        const day = new Date(this.$props.value).getDate();
        return day <= 3 && !this.$props.isOtherMonth;
      },
    },
    methods: {
      handleClick: function (e) {
        this.$emit('click', this.$props.value, e);
      },
    },
  };
  </script>
  
  <style>
  .sent-items {
    position: relative;
    overflow: visible;
  }
  </style>
  