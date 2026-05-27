<template>
  <div>
    <KButton @click="toggleDialog">{{ visible ? 'Close' : 'Open' }} Window</KButton>
    <input
      type="checkbox"
      id="dragChkBox"
      class="k-checkbox k-checkbox-md k-rounded-md"
      v-model="isDraggable"
    />
    <label class="k-checkbox-label" for="dragChkBox">Enable/Disable dragging</label>
    <Window v-if="visible" title="Drag me" :draggable="isDraggable" @close="toggleDialog">
      <span v-if="isDraggable">I can be dragged!</span>
      <span v-else>I cannot be dragged!</span>
    </Window>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Window } from '@progress/kendo-vue-dialogs'
import { Button as KButton } from "@progress/kendo-vue-buttons";

const visible = ref(true)
const isDraggable = ref(false)

const toggleDialog = () => {
    visible.value = !visible.value
}
</script>
