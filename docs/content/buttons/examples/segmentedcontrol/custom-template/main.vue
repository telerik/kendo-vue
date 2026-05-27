<template>
    <SegmentedControl
        :items="items"
        :item-template="'itemTemplate'"
        :default-value="'list'"
        @change="handleChange"
    >
        <template #itemTemplate="{ props }">
            <div :style="{ display: 'flex', alignItems: 'center', gap: '8px' }">
                <span v-if="props.item.svgIcon" class="icon">
                    <SvgIcon :icon="props.item.svgIcon" />
                </span>
                <span>{{ props.item.text }}</span>
                <span class="badge">New</span>
            </div>
        </template>
    </SegmentedControl>
</template>

<script setup>
import { SegmentedControl } from '@progress/kendo-vue-buttons';
import { SvgIcon } from '@progress/kendo-vue-common';
import { listUnorderedIcon, gridIcon } from '@progress/kendo-svg-icons';

const items = [
    { value: 'list', text: 'List View', svgIcon: listUnorderedIcon },
    { value: 'grid', text: 'Grid View', svgIcon: gridIcon }
];

const handleChange = (value) => {
    console.log('Selected:', value);
};
</script>
