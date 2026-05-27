<template>
  <span> {{ formattedNumber }} </span>
</template>

<script setup>
import { computed } from 'vue';
import { nFormatter } from './utils';

const props = defineProps({
    dataItem: Object,
    field: String,
});

const formattedNumber = computed(() => nFormatter(props.dataItem[props.field]));
</script>
