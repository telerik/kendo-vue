<template>
  <Rating
    :defaultValue="2"
    :svgIcon="heartIcon"
    :svgIconOutline="heartIcon"
  />
</template>

<script setup>
import { Rating } from "@progress/kendo-vue-inputs";
import { heartIcon } from "@progress/kendo-svg-icons";
</script>
