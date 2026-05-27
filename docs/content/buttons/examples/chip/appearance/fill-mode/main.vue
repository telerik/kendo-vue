<template>
  <div>
    <span class="chip-wrapper">
      <Chip
        :text="'Solid'"
        :value="'solid'"
        :fill-mode="'solid'"
        :svg-icon="checkCircleIcon"
      />
    </span>
    <span class="chip-wrapper">
      <Chip
        :text="'Outline'"
        :value="'outline'"
        :fill-mode="'outline'"
        :svg-icon="checkCircleIcon"
      />
    </span>
  </div>
</template>

<script setup>
import { Chip } from "@progress/kendo-vue-buttons";
import { checkCircleIcon } from "@progress/kendo-svg-icons";
</script>

<style>
.chip-wrapper {
  padding: 20px;
}
</style>
