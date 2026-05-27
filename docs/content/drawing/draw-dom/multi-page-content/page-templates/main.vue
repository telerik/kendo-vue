<template>
  <div>
    <button @click="handleClick">Export PDF...</button>
    <div ref="surface">
      <h3>Page 1</h3>
      <h3 class="page-break">Page 2</h3>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { exportElement } from './export-element'

const surface = ref()

const handleClick = () => {
    exportElement(surface.value, {
        forcePageBreak: '.page-break',
        template: (data) => `<span>Page ${data.pageNum} of ${data.totalPages}</span>`
    })
}
</script>
