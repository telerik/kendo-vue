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

<script setup>
import { computed } from 'vue';
import { trends } from './utils';

const props = defineProps({
    dataItem: Object,
    field: String,
});

const rating = computed(() => {
    const currentTrends = trends(props.dataItem);
    if (currentTrends.strongNegative) return 'Strong Sell';
    if (currentTrends.negative) return 'Sell';
    if (currentTrends.positive) return 'Buy';
    if (currentTrends.strongPositive) return 'Strong Buy';
    return 'Neutral';
});
</script>
