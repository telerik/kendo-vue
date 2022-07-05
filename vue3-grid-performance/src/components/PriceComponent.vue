<template>
  <span>{{ formattedNumber }} </span>
</template>

<script>
import { provideIntlService } from '@progress/kendo-vue-intl';

export default {
  inject: {
    kendoIntlService: { default: null },
  },
  props: {
    dataItem: Object,
    field: String,
  },
  computed: {
    formattedNumber: function () {
      return provideIntlService(this).formatNumber(
        this.dataItem[this.field],
        'n5'
      );
    },
  },
};
</script>
