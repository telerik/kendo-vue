<template>
  <div>
    <span ref="popupWrapper" id="popupWrapper" />
    <div ref="surface" />
    <Popup :anchor="'popupWrapper'" :show="show">
      <div>foo</div>
    </Popup>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Surface } from '@progress/kendo-drawing'
import { Popup } from '@progress/kendo-vue-popup'
import { drawScene } from './draw-scene'

const surface = ref()
const popupWrapper = ref()
const show = ref(false)
let _surface = null

const createSurface = () => {
    _surface = Surface.create(surface.value)

    _surface.bind("mouseenter", (args) => {
        const element = args.element
        if (element && element.options.tooltipContent) {
            show.value = true
        }
    })

    _surface.bind("mouseleave", () => {
        show.value = false
    })

    return _surface
}

onMounted(() => {
    drawScene(createSurface())

    const rectangle = document.getElementsByTagName("path")
    const boxCoordinates = rectangle[0].getBoundingClientRect()

    const wrapper = document.getElementById("popupWrapper")
    wrapper.setAttribute("style", `top: ${boxCoordinates.top}px; left: ${(boxCoordinates.left+boxCoordinates.right)/2}px; position: absolute`)
})

onBeforeUnmount(() => {
    _surface.destroy()
})
</script>
