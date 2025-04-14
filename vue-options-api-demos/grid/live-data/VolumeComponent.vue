<template>
  <span> {{ formattedNumber }} </span>
</template>

<script>
import { provideIntlService } from '@progress/kendo-vue-intl';
import { nFormatter, trends } from './utils';

export default {
  inject: {
    kendoIntlService: { default: null },
  },
  props: {
    dataItem: Object,
  },
  computed: {
    formattedNumber: function () {
      return provideIntlService(this).formatNumber(this.dataItem.Price, 'n5');
    },
  },
  props: {
    dataItem: Object,
    field: String,
  },
  computed: {
    formattedNumber: function () {
      return nFormatter(this.dataItem[this.field]);
    },
  },
};
</script>
