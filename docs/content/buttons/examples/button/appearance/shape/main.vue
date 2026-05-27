<template>
  <div>
    <span class="wrapper">
      <KButton :shape="'rectangle'">Rectangle shape</KButton>
    </span>
    <span class="wrapper">
      <KButton :shape="'square'">Square shape</KButton>
    </span>
  </div>
</template>

<script setup>
import { Button as KButton } from '@progress/kendo-vue-buttons';
</script>

<style>
.wrapper {
  padding: 20px;
}
</style>
