<template>
  <div class="text-center">
    <div
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
      }"
    >
      <div v-for="orientation in orientations" :key="orientation">
        <p>{{ orientation }}</p>
        <FontIcon :name="'spell-checker'" :flip="orientation" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontIcon } from '@progress/kendo-vue-common';

const orientations = ['default', 'horizontal', 'vertical', 'both'];
</script>

<style>
@import "https://unpkg.com/@progress/kendo-font-icons@5/dist/index.css";
</style>
