<template>
  <div class="text-center">
    <div
      :style="{
        display: 'flex',
        justifyContent: 'space-between',
      }"
    >
      <div v-for="size in sizes" :key="size">
        <p>{{ size }}</p>
        <FontIcon :name="'globe-outline'" :size="size" />
      </div>
    </div>
    <div style="margin-top: 10px">
      <p>Custom Inline</p>
      <FontIcon :name="'globe-outline'" style="font-size: 34px" />
      <p>Custom Class</p>
      <FontIcon :name="'globe-outline'" class="my-size" />
    </div>
  </div>
</template>

<script setup>
import { FontIcon } from '@progress/kendo-vue-common';

const sizes = ['default', 'xsmall', 'small', 'medium', 'large', 'xlarge'];
</script>

<style>
@import "https://unpkg.com/@progress/kendo-font-icons@5/dist/index.css";

.my-size {
  font-size: 58px;
}
</style>
