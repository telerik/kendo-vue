<template>
  <div>Custom item</div>
  <Rating :defaultValue="2" :item="'customItem'">
    <template #customItem="{ props }">
      <CustomItem :half="props.half" />
    </template>
  </Rating>
</template>

<script setup>
import { Rating } from "@progress/kendo-vue-inputs";
import CustomItem from "./CustomItem.vue";
</script>
