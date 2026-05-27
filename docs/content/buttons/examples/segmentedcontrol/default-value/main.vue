<template>
    <SegmentedControl
        :default-value="'grid'"
        :items="items"
        @change="handleChange"
    />
</template>

<script setup>
import { SegmentedControl } from '@progress/kendo-vue-buttons';
import { listUnorderedIcon, gridIcon } from '@progress/kendo-svg-icons';

const items = [
    { value: 'list', text: 'List View', svgIcon: listUnorderedIcon },
    { value: 'grid', text: 'Grid View', svgIcon: gridIcon }
];

const handleChange = (value) => {
    console.log('Selected:', value);
};
</script>
