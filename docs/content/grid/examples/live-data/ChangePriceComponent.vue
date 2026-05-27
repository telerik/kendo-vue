<template>
  <span :class="[currentTrends.negative ? 'red' : 'green']">
    {{ formattedNumber }}
  </span>
</template>

<script setup>
import { computed } from 'vue';
import { provideIntlService } from '@progress/kendo-vue-intl';
import { trends } from './utils';

const props = defineProps({
    dataItem: Object,
    field: String,
});

const currentTrends = computed(() => trends(props.dataItem));

const formattedNumber = computed(() => {
    return provideIntlService({}).formatNumber(
        props.dataItem[props.field],
        props.dataItem[props.field] === 'Change' ? 'n5' : '0.##'
    );
});
</script>
