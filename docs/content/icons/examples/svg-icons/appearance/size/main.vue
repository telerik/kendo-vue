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
        <SvgIcon :icon="globeIcon" :size="size" />
      </div>
    </div>
    <div style="margin-top: 10px">
      <p>Custom Inline</p>
      <SvgIcon :icon="globeIcon" style="width: 34px" />
      <p>Custom Class</p>
      <SvgIcon :icon="globeIcon" class="my-size" />
    </div>
  </div>
</template>

<script setup>
import { SvgIcon } from "@progress/kendo-vue-common";
import { globeIcon } from "@progress/kendo-svg-icons";

const sizes = ["default", "xsmall", "small", "medium", "large", "xlarge"];
</script>

<style>
.my-size {
  width: 58px;
  height: 58px;
}
</style>
