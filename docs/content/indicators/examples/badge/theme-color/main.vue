<template>
    <div class="wrap">
        <span class="themes" v-for="(themeColor, index) in themeColors" :key="index">
            {{ themeColor.toUpperCase() }}
            <Badge :theme-color="themeColor">7</Badge>
        </span>
    </div>
</template>

<script setup>
import { Badge } from '@progress/kendo-vue-indicators';

const themeColors = ['base', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error'];
</script>

<style>
.k-badge-container {
    margin: 0 30px 20px 0;
}
.title {
    color: #6c757d;
    padding: 6px 8px;
}
.wrap {
    display: flex;
    margin-top: 25px;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 20px;
}
.themes {
    position: relative;
    overflow: visible;
}
</style>
