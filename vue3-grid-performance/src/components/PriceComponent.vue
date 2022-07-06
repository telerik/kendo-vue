<template>
  <span :class="`fintech-icons ${currentTrends}`">
    <span>{{ formattedNumber }}</span>
    <span v-if="trends.positive" class="k-icon k-i-arrow-60-up" />
    <span v-if="trends.negative" class="k-icon k-i-arrow-60-down" />
  </span>
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
    trends() {
      return trends(this.dataItem)
    },
    formattedNumber: function () {
      return provideIntlService(this).formatNumber(
        this.dataItem[this.field],
        'n5'
      );
    },
  },
};
</script>
