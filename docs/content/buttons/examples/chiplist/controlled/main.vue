<template>
    <ChipList
      :rounded="'full'"
      :data-items="fruits"
      :selection="'multiple'"
      @datachange="handleDataChange"
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
import { ref } from 'vue';

const fruits = ref([
    {
        text: 'Berry',
        value: 'berry'
    },
    {
        text: 'Apple',
        value: 'apple'
    },
    {
        text: 'Strawberry',
        value: 'strawberry'
    },
    {
        text: 'Banana',
        value: 'banana'
    },
    {
        text: 'Kiwi',
        value: 'kiwi'
    }
]);

const chip = 'myTemplate';

function handleDataChange(event) {
    fruits.value = event.value;
}
</script>
