<template>
    <div class="text-center">
        <div
            :style="{
                display: 'flex',
                justifyContent: 'space-between',
            }"
        >
            <div v-for="theme in themeColors" :key="theme">
                <p>{{ theme }}</p>
                <SvgIcon :icon="paletteIcon" :theme-color="theme" />
            </div>
        </div>
        <div style="margin-top: 10px">
            <p>Custom Inline</p>
            <SvgIcon :icon="paletteIcon" style="color: purple" />
            <p>Custom Class</p>
            <SvgIcon :icon="paletteIcon" class="my-color" />
        </div>
    </div>
</template>

<script setup>
import { SvgIcon } from '@progress/kendo-vue-common';
import { paletteIcon } from '@progress/kendo-svg-icons';

const themeColors = ['inherit', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'inverse'];
</script>

<style>
.my-color {
    color: #ffaa45;
}
</style>
