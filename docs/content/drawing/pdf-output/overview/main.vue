<template>
  <div>
    <button @click="handleClick">Export PDF...</button>
  </div>
</template>

<script setup>
import { exportScene } from './export-scene'

const handleClick = () => {
    exportScene()
}
</script>
