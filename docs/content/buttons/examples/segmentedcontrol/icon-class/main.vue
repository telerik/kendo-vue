<template>
    <div>
        <p :style="{ marginBottom: '8px' }">
            Select an item to see the <code>iconClassName</code> applied to the active icon.
        </p>
        <SegmentedControl
            :value="selectedValue"
            @change="(val) => selectedValue = val"
            :items="items"
        />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { SegmentedControl } from '@progress/kendo-vue-buttons';
import { boldIcon, italicIcon, underlineIcon } from '@progress/kendo-svg-icons';
import './styles.css';

const selectedValue = ref('bold');

const items = [
    { value: 'bold', text: 'Bold', svgIcon: boldIcon, iconClassName: 'icon-active' },
    { value: 'italic', text: 'Italic', svgIcon: italicIcon, iconClassName: 'icon-active' },
    { value: 'underline', text: 'Underline', svgIcon: underlineIcon, iconClassName: 'icon-active' }
];
</script>
