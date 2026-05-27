<template>
    <div :style="{ display: 'flex', flexDirection: 'column', gap: '16px' }">
        <div>
            <p :style="{ marginBottom: '8px' }">XSmall</p>
            <SegmentedControl :size="'xs'" :items="items" :default-value="'bold'" />
        </div>
        <div>
            <p :style="{ marginBottom: '8px' }">Small</p>
            <SegmentedControl :size="'small'" :items="items" :default-value="'bold'" />
        </div>
        <div>
            <p :style="{ marginBottom: '8px' }">Medium (default)</p>
            <SegmentedControl :size="'medium'" :items="items" :default-value="'bold'" />
        </div>
        <div>
            <p :style="{ marginBottom: '8px' }">Large</p>
            <SegmentedControl :size="'large'" :items="items" :default-value="'bold'" />
        </div>
    </div>
</template>

<script setup>
import { SegmentedControl } from '@progress/kendo-vue-buttons';
import { boldIcon, italicIcon, underlineIcon } from '@progress/kendo-svg-icons';

const items = [
    { value: 'bold', text: 'Bold', svgIcon: boldIcon },
    { value: 'italic', text: 'Italic', svgIcon: italicIcon },
    { value: 'underline', text: 'Underline', svgIcon: underlineIcon }
];
</script>
