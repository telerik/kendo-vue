<template>
  <div>
    <button @click="handleClick">Export PDF...</button>
    <div ref="surface">
      This is <a href="http://www.telerik.com/kendo-vue-ui/">a non-clickable link</a>.
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { exportElement } from './export-element'

const surface = ref()

const handleClick = () => {
    exportElement(surface.value, {
        avoidLinks: true
    })
}
</script>
