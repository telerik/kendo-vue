<template>
  <td>
    <span :style="getStyle"> {{ formatNumber(changeFieldValue, 'p2') }}</span>
  </td>
</template>
<script>
import { formatNumber } from '@progress/kendo-intl';

export default {
  props: {
    dataItem: Object,
  },
  data() {
    return {
      formatNumber,
    };
  },
  computed: {
    getStyle() {
      return this.changeFieldValue < 0 ? { color: 'red' } : undefined;
    },
    changeFieldValue() {
      return (
        (this.$props.dataItem.close - this.$props.dataItem.open) /
        this.$props.dataItem.open
      );
    },
  },
};
</script>
