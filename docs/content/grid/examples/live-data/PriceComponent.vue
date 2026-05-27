<template>
  <span>{{ formattedNumber }}</span>
</template>

<script setup>
import { computed } from 'vue';
import { provideIntlService } from '@progress/kendo-vue-intl';

const props = defineProps({
    dataItem: Object,
    field: String,
});

const formattedNumber = computed(() => {
    return provideIntlService({}).formatNumber(props.dataItem[props.field], 'n5');
});
</script>
