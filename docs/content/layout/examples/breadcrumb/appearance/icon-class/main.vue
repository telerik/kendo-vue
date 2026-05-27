<template>
    <div style="display: flex; flex-direction: column; align-items: center">
        <Breadcrumb :dataItems="items" />
    </div>
</template>
<script setup>
import { Breadcrumb } from '@progress/kendo-vue-layout';
import { homeIcon } from '@progress/kendo-svg-icons';

const items = [
    {
        id: 'home',
        svgIcon: homeIcon,
    },
    {
        id: 'products',
        text: 'Products',
    },
    {
        id: 'computer',
        text: 'Computer',
    },
    {
        id: 'gaming',
        text: 'Gaming',
    },
    {
        id: 'keyboard',
        text: 'Keyboard',
    },
];
</script>
