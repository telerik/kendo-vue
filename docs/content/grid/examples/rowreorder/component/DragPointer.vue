<template>
  <div
    class="k-drop-hint k-drop-hint-h"
    :style="{
      position: 'absolute',
      zIndex: 20000,
      top: targetTopOffset + 'px',
      left: targetLeftOffset + 'px',
    }"
  >
    <div class="k-drop-hint-start"></div>
    <div class="k-drop-hint-line"></div>
  </div>
</template>

<script setup>
defineProps({
    targetLeftOffset: Number,
    targetTopOffset: Number,
});
</script>
