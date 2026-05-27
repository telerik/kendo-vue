<template>
  <SvgIcon :icon="menuIcon" />
  <span class="k-flex-1"></span>
  <SvgIcon :icon="gearIcon" />
</template>

<script setup>
import { SvgIcon } from "@progress/kendo-vue-common";
import { menuIcon, gearIcon } from "@progress/kendo-svg-icons";
</script>
