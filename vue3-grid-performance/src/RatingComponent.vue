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
      return currentTrends.strongNegative
        ? 'Strong Sell'
        : currentTrends.negative
        ? 'Sell'
        : currentTrends.positive
        ? 'Buy'
        : currentTrends.strongPositive
        ? 'Strong Buy'
        : 'Neutral';
    },
  },
};
</script>
