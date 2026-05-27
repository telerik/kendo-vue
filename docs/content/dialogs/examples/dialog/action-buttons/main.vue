<template>
  <div>
    <span v-if="!visibleDialog">
      <KButton @click="toggleDialog">Open Dialog</KButton>
    </span>
    <Dialog v-if="visibleDialog" title="Delete Data" @close="toggleDialog">
      <p :style="{ margin: '25px', textAlign: 'center' }">This action cannot be undone.</p>
      <DialogActionsBar>
        <KButton @click="toggleDialog">Cancel</KButton>
        <KButton @click="onDeleteData">Delete</KButton>
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

const onDeleteData = () => {
    alert("Data deleted.")
    visibleDialog.value = !visibleDialog.value
}
</script>
