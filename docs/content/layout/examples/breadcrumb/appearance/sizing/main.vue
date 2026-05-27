<template>
    <div style="display: flex; flex-direction: column; align-items: center">
        <p>Small</p>
        <Breadcrumb :dataItems="items" :size="'small'" />
        <br/>
        <p>Medium</p>
        <Breadcrumb :dataItems="items" :size="'medium'" />
        <br/>
        <p>Large</p>
        <Breadcrumb :dataItems="items" :size="'large'" />
        <br/>
    </div>
</template>
<script setup>
import { Breadcrumb } from '@progress/kendo-vue-layout';
import { homeIcon } from '@progress/kendo-svg-icons';

const items = [
    {
        id: 'home',
        text: 'Home',
        svgIcon: homeIcon
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
