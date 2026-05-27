<template>
  <div>
    <span class="wrapper">
      <KButton :fill-mode="'solid'">Solid</KButton>
    </span>
    <span class="wrapper">
      <KButton :fill-mode="'flat'">Flat</KButton>
    </span>
    <span class="wrapper">
      <KButton :fill-mode="'outline'">Outline</KButton>
    </span>
    <span class="wrapper">
      <KButton :fill-mode="'clear'">Clear</KButton>
    </span>
    <span class="wrapper">
      <KButton :fill-mode="'link'">Link</KButton>
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
