<template>
    <ChipList
        :rounded="'full'"
        :default-data-items="fruits"
        :selection="'single'"
        :chip="chip">
        <template #myTemplate="{props}">
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

const fruits = [
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
];

const chip = 'myTemplate';
</script>
