<template>
  <div>
    <span v-if="!visibleDialog">
      <KButton @click="toggleDialog">Open Dialog</KButton>
    </span>
    <Dialog v-if="visibleDialog" :title="'Please confirm'" @close="toggleDialog">
      <p :style="{ margin: '25px', textAlign: 'center' }">Are you sure you want to continue?</p>
      <DialogActionsBar>
        <KButton @click="toggleDialog">No</KButton>
        <KButton @click="toggleDialog">Yes</KButton>
      </DialogActionsBar>
    </Dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs'
import { Button as KButton } from "@progress/kendo-vue-buttons";

const visibleDialog = ref(false)

const toggleDialog = () => {
    visibleDialog.value = !visibleDialog.value
}
</script>
