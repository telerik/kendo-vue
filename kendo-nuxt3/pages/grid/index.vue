<template>
<div>
   	<div id="nav">
        <NuxtLink to="/grid/overview/main">overview</NuxtLink> |
        <NuxtLink to="/grid/filtering/main">filtering</NuxtLink> |
        <NuxtLink to="/grid/grouping/main">grouping</NuxtLink> |
        <NuxtLink to="/grid/loading/main">loading</NuxtLink> |
        <NuxtLink to="/grid/all-pages/main">all-pages</NuxtLink> |
        <NuxtLink to="/grid/customCheckboxFilter/main">customCheckboxFilter</NuxtLink> |
        <NuxtLink to="/grid/header-cell/main">header-cell</NuxtLink> |
        <NuxtLink to="/grid/locked-expand/main">locked-expand</NuxtLink> |
        <NuxtLink to="/grid/locked-reorder/main">locked-reorder</NuxtLink> |
        <NuxtLink to="/grid/row-render/main">row-render</NuxtLink> |
    </div>

</div>
</template>

<style scoped>

</style>

<script setup lang="ts">
import { inject } from 'vue';
const visible = inject('visible')
</script>
