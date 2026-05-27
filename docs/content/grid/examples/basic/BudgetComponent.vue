<template>
  <span :class="[dataItem.budget < 0 ? 'red text-bold' : '']">
    {{ formattedNumber }}
  </span>
</template>

<script setup>
import { computed } from 'vue';
import { provideIntlService } from '@progress/kendo-vue-intl';

const props = defineProps({
    dataItem: Object,
});

const formattedNumber = computed(() => {
    return provideIntlService({}).formatNumber(props.dataItem.budget, 'c');
});
</script>
