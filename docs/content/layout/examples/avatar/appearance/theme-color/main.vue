<template>
    <div>
        <div v-for="(color, index) in themeColors" :key="index">
            <Avatar type="text" :theme-color="color" style="margin: 10px">
                {{ color.substr(0, 2) }}
            </Avatar>
            <span> - {{ color }}</span>
        </div>
    </div>
</template>

<script setup>
import { Avatar } from '@progress/kendo-vue-layout';

const themeColors = ['base', 'primary', 'secondary', 'tertiary'];
</script>
