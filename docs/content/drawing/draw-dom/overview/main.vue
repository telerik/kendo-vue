<template>
  <div>
    <button @click="handleClick">Export PDF...</button>
    <div ref="surface">
      // ...existing code...
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { exportElement } from './export-elements'

const surface = ref()

const handleClick = () => {
    exportElement(surface.value)
}
</script>
