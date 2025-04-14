<template>
  <span :class="[currentTrends.negative ? 'red' : 'green']">
    {{ formattedNumber }}
  </span>
</template>

<script>
import { provideIntlService } from '@progress/kendo-vue-intl';
import { trends } from './utils';

export default {
  inject: {
    kendoIntlService: { default: null },
  },
  props: {
    dataItem: Object,
    field: String,
  },
  computed: {
    currentTrends() {
      return trends(this.dataItem);
    },
    formattedNumber: function () {
      return provideIntlService(this).formatNumber(
        this.dataItem[this.field],
        this.dataItem[this.field] === 'Change' ? 'n5' : '0.##'
      );
    },
  },
};
</script>
