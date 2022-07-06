<template>
  <span :class="currentTrends"> {{ formattedNumber }}</span>
</template>

<script>
import { provideIntlService } from '@progress/kendo-vue-intl';
import { classNames } from '@progress/kendo-vue-common';
import { trends } from '../data-service/utils';

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
      return classNames(trends(this.dataItem));
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
