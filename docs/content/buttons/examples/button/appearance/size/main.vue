<template>
  <div>
    <span class="wrapper">
      <KButton :size="'xs'">XSmall Size</KButton>
    </span>
    <span class="wrapper">
      <KButton :size="'small'">Small Size</KButton>
    </span>
    <span class="wrapper">
      <KButton :size="'medium'">Medium Size</KButton>
    </span>
    <span class="wrapper">
      <KButton :size="'large'">Large Size</KButton>
    </span>
    <span class="wrapper">
      <KButton :size="null" :class="'custom-size'">Custom Size</KButton>
    </span>
  </div>
</template>

<script setup>
import { Button as KButton } from '@progress/kendo-vue-buttons';
</script>

<style>
.custom-size.k-button {
  padding: 20px 20px;
}
.wrapper {
  padding: 20px;
}
</style>
