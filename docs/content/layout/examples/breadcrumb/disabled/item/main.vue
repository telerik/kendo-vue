<template>
    <div style="display: flex; flex-direction: column; align-items: center">
        <Breadcrumb :dataItems="items" />
    </div>
</template>
<script setup>

import { Breadcrumb } from '@progress/kendo-vue-layout';
import { homeIcon } from '@progress/kendo-svg-icons';

const items = [
    { id: 'home', text: 'Home', svgIcon: homeIcon },
    { id: 'products', text: 'Products' },
    { id: 'computer', text: 'Computer', disabled: true },
    { id: 'gaming', text: 'Gaming', disabled: true },
    { id: 'keyboard', text: 'Keyboard' },
];
</script>
