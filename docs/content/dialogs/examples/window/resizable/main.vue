<template>
  <div>
    <KButton @click="toggleDialog">{{ visible ? 'Close' : 'Open' }} Window</KButton>
    <input
      type="checkbox"
      id="resizeChkBox"
      class="k-checkbox k-checkbox-md k-rounded-md"
      v-model="isResizable"
    />
    <label class="k-checkbox-label" for="resizeChkBox">Enable/Disable resizing</label>
    <Window v-if="visible" title="Resize me" :resizable="isResizable" @close="toggleDialog">
      <span v-if="isResizable">I can be resized!</span>
      <span v-else>I cannot be resized!</span>
    </Window>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Window } from '@progress/kendo-vue-dialogs'
import { Button as KButton } from "@progress/kendo-vue-buttons";

const visible = ref(true)
const isResizable = ref(false)

const toggleDialog = () => {
    visible.value = !visible.value
}
</script>
