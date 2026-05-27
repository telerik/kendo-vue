<template>
    <div class="example-wrap">
        <span v-for="theme in themeColors" :key="theme">
            <FloatingActionButton :theme-color="theme" :svg-icon="checkIcon" :position-mode="'absolute'">
            </FloatingActionButton>
        </span>
    </div>
</template>

<script setup>
import { FloatingActionButton } from '@progress/kendo-vue-buttons';
import { checkIcon } from '@progress/kendo-svg-icons';

const themeColors = ['base', 'primary', 'secondary', 'tertiary'];
</script>

<style>
.example-wrap {
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
}
.example-wrap > span {
    position: relative;
    width: 80px;
    margin-top: 90px;
}
</style>
