<template>
  <ChipList
    :rounded="'full'"
    :default-data-items="types"
    :selection="'multiple'"
    :chip="chip"
  >
    <template #myChipTemplate="{ props }">
      <CustomChip
        :data-item="props.dataItem"
        :value="props.value"
        :text="props.text"
      />
    </template>
  </ChipList>
</template>

<script setup>
import { ChipList } from '@progress/kendo-vue-buttons';
import CustomChip from './CustomChip.vue';

const types = [
    {
        text: 'Base',
        value: 'base',
        type: 'base',
    },
    {
        text: 'Warning',
        value: 'warning',
        type: 'warning',
    },
    {
        text: 'Error',
        value: 'error',
        type: 'error',
    },
    {
        text: 'Info',
        value: 'info',
        type: 'info',
    },
    {
        text: 'Success',
        value: 'success',
        type: 'success',
    },
    {
        text: 'Custom',
        value: 'custom',
        type: null,
    },
];

const chip = 'myChipTemplate';
</script>
