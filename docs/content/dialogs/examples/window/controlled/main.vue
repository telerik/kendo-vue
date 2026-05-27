<template>
  <div>
    <KButton @click="toggleDialog">{{ visible ? 'Close' : 'Open' }} Window</KButton>&nbsp;
    <KButton @click="handleSetWidth200">Set width to 200</KButton>&nbsp;
    <KButton @click="handleSetWidth500">Set width to 500</KButton>
    <Window
      v-if="visible"
      title="Status"
      :left="left"
      :top="top"
      :width="width"
      :height="height"
      @move="handleMove"
      @resize="handleResize"
      @close="toggleDialog"
    >
      Controlled mode
    </Window>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Window } from '@progress/kendo-vue-dialogs'
import { Button as KButton } from "@progress/kendo-vue-buttons";

const left = ref(300)
const top = ref(100)
const width = ref(200)
const height = ref(200)
const visible = ref(true)

const handleMove = (event) => {
    left.value = event.left
    top.value = event.top
}

const handleResize = (event) => {
    left.value = event.left
    top.value = event.top
    width.value = event.width
    height.value = event.height
}

const handleSetWidth200 = () => {
    width.value = 200
}

const handleSetWidth500 = () => {
    width.value = 300
}

const toggleDialog = () => {
    visible.value = !visible.value
}
</script>
