<template>
  <div>
    <div ref="surface" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Surface } from '@progress/kendo-drawing'
import { drawScene } from './draw-scene'

const surface = ref()
let _surface = null

const createSurface = () => {
    _surface = Surface.create(surface.value)
    return _surface
}

onMounted(() => {
    drawScene(createSurface())
})
</script>
