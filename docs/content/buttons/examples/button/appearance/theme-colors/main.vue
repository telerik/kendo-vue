<template>
  <div>
    <span class="wrapper">
      <KButton :theme-color="'base'">base</KButton>
    </span>
    <span class="wrapper">
      <KButton :theme-color="'primary'">primary</KButton>
    </span>
    <span class="wrapper">
      <KButton :theme-color="'secondary'">secondary</KButton>
    </span>
    <span class="wrapper">
      <KButton :theme-color="'tertiary'">tertiary</KButton>
    </span>
    <br />
    <br />
    <span class="wrapper">
      <KButton :theme-color="'info'">info</KButton>
    </span>
    <span class="wrapper">
      <KButton :theme-color="'success'">success</KButton>
    </span>
    <span class="wrapper">
      <KButton :theme-color="'warning'">warning</KButton>
    </span>
    <span class="wrapper">
      <KButton :theme-color="'error'">error</KButton>
    </span>
    <br />
    <br />
    <span class="wrapper">
      <KButton :theme-color="'inverse'">inverse</KButton>
    </span>
    <span class="wrapper">
      <KButton :theme-color="null" :class="'custom-color'">custom</KButton>
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

.custom-color {
  background-color: green;
  color: orange;
}
</style>
