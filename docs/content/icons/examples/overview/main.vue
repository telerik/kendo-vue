<template>
  <div class="wrapper">
    <div class="icon-wrapper">
      <span>Icon</span>
      <FontIcon :name="'globe'" :size="'large'" />
    </div>
    <div class="svg-icon-wrapper">
      <span>SVG Icon</span>
      <SvgIcon :icon="globeIcon" :size="'large'" />
    </div>
  </div>
</template>

<script setup>
import { FontIcon, SvgIcon } from "@progress/kendo-vue-common";
import { globeIcon } from "@progress/kendo-svg-icons";
</script>

<style>
@import "https://unpkg.com/@progress/kendo-font-icons@5/dist/index.css";

.wrapper,
.icon-wrapper,
.svg-icon-wrapper {
  display: flex;
}

.icon-wrapper,
.svg-icon-wrapper {
  flex-direction: column;
  min-width: 80px;
  align-items: center;
}
</style>
