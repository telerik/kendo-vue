<template>
    <Breadcrumb :dataItems="items" />
</template>
<script setup>
import { Breadcrumb } from '@progress/kendo-vue-layout';
import { homeIcon, imageIcon, starIcon, globeIcon, handIcon } from '@progress/kendo-svg-icons';

const items = [
    {
        id: 'home',
        text: 'Home',
        svgIcon: homeIcon,
    },
    {
        id: 'user1',
        text: 'Favorites',
        svgIcon: starIcon,
    },
    {
        id: 'user2',
        svgIcon: imageIcon,
    },
    {
        id: 'user3',
        svgIcon: globeIcon,
    },
    {
        id: 'user4',
        svgIcon: handIcon,
    },
];
</script>
