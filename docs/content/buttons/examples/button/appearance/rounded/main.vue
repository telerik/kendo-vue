<template>
  <div>
    <span class="wrapper">
      <KButton :rounded="'none'">None roundness</KButton>
    </span>
    <span class="wrapper">
      <KButton :rounded="'small'">Small roundness</KButton>
    </span>
    <span class="wrapper">
      <KButton :rounded="'medium'">Medium roundness</KButton>
    </span>
    <br />
    <br />
    <span class="wrapper">
      <KButton :rounded="'large'">Large roundness</KButton>
    </span>
    <span class="wrapper">
      <KButton :rounded="'full'">Full roundness</KButton>
    </span>
    <span class="wrapper">
      <KButton :rounded="'none'" :class="'custom-roundness'">Custom roundness</KButton>
    </span>
  </div>
</template>

<script setup>
import { Button as KButton } from '@progress/kendo-vue-buttons';
</script>

<style>
.custom-roundness.k-button {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

.wrapper {
  padding: 20px;
}
</style>
