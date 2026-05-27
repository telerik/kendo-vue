<template>
    <div style="display: flex; flex-direction: column; align-items: center">
        <Breadcrumb :dataItems="items" />
    </div>
</template>
<script setup>
import { Breadcrumb } from '@progress/kendo-vue-layout';
import { heartIcon, homeIcon, sparklesIcon } from '@progress/kendo-svg-icons';

const items = [
    {
        id: 'home',
        text: 'Home',
        svgIcon: homeIcon,
    },
    {
        id: 'kendo-vue',
        text: 'Kendo UI for Vue',
        svgIcon: sparklesIcon,
    },
    {
        id: 'breadcrumb',
        text: 'Breadcrumb',
        svgIcon: heartIcon,
    },
];
</script>
