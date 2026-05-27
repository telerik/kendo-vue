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
                <FontIcon :name="'palette'" :theme-color="theme" />
            </div>
        </div>
        <div style="margin-top: 10px">
            <p>Custom Inline</p>
            <FontIcon :name="'palette'" style="color: purple" />
            <p>Custom Class</p>
            <FontIcon :name="'palette'" class="my-color" />
        </div>
    </div>
</template>

<script setup>
import { FontIcon } from '@progress/kendo-vue-common';

const themeColors = ['inherit', 'primary', 'secondary', 'tertiary', 'info', 'success', 'warning', 'error', 'inverse'];
</script>

<style>
@import "https://unpkg.com/@progress/kendo-font-icons@5/dist/index.css";

.my-color {
    color: #ffaa45;
}
</style>
