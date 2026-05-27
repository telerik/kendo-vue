<template>
    <SegmentedControl
        :value="selectedValue"
        :items="items"
        @change="handleChange"
        :size="'large'"
        :layout-mode="'stretch'"
    />
</template>

<script setup>
import { ref } from 'vue';
import { SegmentedControl } from '@progress/kendo-vue-buttons';
import { listUnorderedIcon, gridIcon, menuIcon } from '@progress/kendo-svg-icons';

const selectedValue = ref('list');

const items = [
    { value: 'list', text: 'List View', svgIcon: listUnorderedIcon },
    { value: 'grid', text: 'Grid View', svgIcon: gridIcon },
    { value: 'details', text: 'Details View', svgIcon: menuIcon }
];

const handleChange = (value) => {
    selectedValue.value = value;
    console.log(`Switched to: ${value}`);
};
</script>
