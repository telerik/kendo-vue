<template>
  <div>
    <SplitButton :items="items" text="Enabled Button" />
    &nbsp;
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SplitButton } from '@progress/kendo-vue-buttons';

const items = ref(['Item1', 'Item2', 'Item3']);
</script>

<style>
.k-button-group > .k-button:first-child:not(:only-child) {
  pointer-events: none;
}
</style>
