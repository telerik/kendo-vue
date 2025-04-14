<template>
  <div
    :class="[
      rating === 'Buy' || rating === 'Strong Buy'
        ? 'green text-bold'
        : 'red text-bold',
    ]"
  >
    {{ rating }}
  </div>
</template>

<script>
import { trends } from './utils';

export default {
  props: {
    dataItem: Object,
    field: String,
  },
  computed: {
    rating() {
      const currentTrends = trends(this.$props.dataItem);
      let value = 'Neutral';
      return currentTrends.strongNegative
        ? (value = 'Strong Sell')
        : currentTrends.negative
        ? (value = 'Sell')
        : currentTrends.positive
        ? (value = 'Buy')
        : currentTrends.strongPositive
        ? (value = 'Strong Buy')
        : (value = 'Neutral');
    },
  },
};
</script>
