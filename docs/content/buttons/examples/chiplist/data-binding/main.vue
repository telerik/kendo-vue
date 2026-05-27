<template>
    <ChipList
      :selection="'multiple'"
      :data-items="months"
      :text-field="'month'"
      :value-field="'id'">
    </ChipList>
</template>

<script setup>
import { ChipList } from '@progress/kendo-vue-buttons';

const months = [
    {
        month: 'December',
        id: '1'
    },
    {
        month: 'January',
        id: '2'
    },
    {
        month: 'February',
        id: '3'
    },
    {
        month: 'June',
        id: '4'
    },
    {
        month: 'July',
        id: '5'
    },
    {
        month: 'August',
        id: '6'
    }
];
</script>
