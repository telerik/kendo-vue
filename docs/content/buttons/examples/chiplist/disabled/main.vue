<template>
    <ChipList
      :rounded="'full'"
      :default-data-items="fruitsData"
      :disabled="true"
      :chip="chip">
      <template #myTemplate="{ props }">
        <CustomChip
          :data-item="props.dataItem"
          :value="props.value"
          :text="props.text"/>
      </template>
    </ChipList>
</template>

<script setup>
import { ChipList } from '@progress/kendo-vue-buttons';
import CustomChip from './CustomChip.vue';

const fruitsData = [
    {
        text: 'Berry',
        value: 'berry',
        disabled: true
    },
    {
        text: 'Apple',
        value: 'apple',
        disabled: true
    },
    {
        text: 'Strawberry',
        value: 'strawberry',
        disabled: true
    },
    {
        text: 'Banana',
        value: 'banana',
        disabled: true
    },
    {
        text: 'Kiwi',
        value: 'kiwi',
        disabled: true
    }
];

const chip = 'myTemplate';
</script>
