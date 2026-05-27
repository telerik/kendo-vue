<template>
  <div
    class="text-center social-icons"
    :style="{ display: 'flex', justifyContent: 'space-between' }"
  >
    <div class="column">
      <p>Default FontIcons</p>
      <div class="icon facebook">
        <FontIcon :name="'facebook'" />
      </div>
      <div class="icon twitter">
        <FontIcon :name="'twitter'" />
      </div>
      <div class="icon google">
        <FontIcon :name="'google'" />
      </div>
      <div class="icon linkedin">
        <FontIcon :name="'linkedin'" />
      </div>
      <div class="icon youtube">
        <FontIcon :name="'youtube'" />
      </div>
    </div>
    <div class="column">
      <p>FontIcons with Applied Theme Color</p>
      <div class="icon facebook">
        <FontIcon :name="'trash'" :theme-color="'primary'" />
      </div>
      <div class="icon twitter">
        <FontIcon :name="'trash'" :theme-color="'warning'" />
      </div>
      <div class="icon google">
        <FontIcon :name="'trash'" :theme-color="'info'" />
      </div>
      <div class="icon linkedin">
        <FontIcon :name="'trash'" :theme-color="'error'" />
      </div>
      <div class="icon youtube">
        <FontIcon :name="'trash'" :theme-color="'tertiary'" />
      </div>
    </div>
    <div class="column">
      <p>FontIcons with Different Sizes</p>
      <div class="icon facebook">
        <FontIcon :name="'camera'" :size="'small'" />
      </div>
      <div class="icon twitter">
        <FontIcon :name="'camera'" :size="'large'" />
      </div>
      <div class="icon google">
        <FontIcon :name="'camera'" :size="'xlarge'" />
      </div>
      <div class="icon linkedin">
        <FontIcon :name="'camera'" :size="'small'" />
      </div>
      <div class="icon youtube">
        <FontIcon :name="'camera'" :size="'medium'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { FontIcon } from '@progress/kendo-vue-common';
</script>

<style>
@import "https://unpkg.com/@progress/kendo-font-icons@5/dist/index.css";

.column {
  margin: 8px;
}
</style>
