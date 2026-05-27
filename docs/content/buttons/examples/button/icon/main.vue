<template>
  <div>
    <KButton :svg-icon="arrowRotateCwIcon">Kendo UI for Vue SVG icon</KButton>
    <KButton :image-url="snowboardingImage">Image icon</KButton>
  </div>
</template>

<script setup>
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { arrowRotateCwIcon } from "@progress/kendo-svg-icons";

const snowboardingImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") + "assets/buttons/button/snowboarding.png";
</script>

<style>
.k-button + .k-button {
  margin-left: 5px;
}
</style>
