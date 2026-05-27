<template>
    <SegmentedControl
        :default-value="'left'"
        :items="items"
    />
</template>

<script setup>
import { SegmentedControl } from '@progress/kendo-vue-buttons';
import { alignLeftIcon, alignCenterIcon, alignRightIcon, alignJustifyIcon } from '@progress/kendo-svg-icons';

const items = [
    { value: 'left', text: 'Left', svgIcon: alignLeftIcon },
    { value: 'center', text: 'Center', svgIcon: alignCenterIcon },
    { value: 'right', text: 'Right', svgIcon: alignRightIcon },
    { value: 'justify', text: 'Justify', svgIcon: alignJustifyIcon, disabled: true }
];
</script>
