<template>
  <div>
    <span v-if="!visibleDialog && !visibleWindow">
      <KButton @click="toggleDialog">Open Dialog</KButton>
      <KButton @click="toggleWindow">Open Window</KButton>
    </span>
    <Dialog v-if="visibleDialog" title="Please confirm" @close="toggleDialog">
      <p :style="{ margin: '25px', textAlign: 'center' }">
        Are you sure you want to continue?
      </p>
      <DialogActionsBar>
        <KButton @click="toggleDialog">No</KButton>
        <KButton @click="toggleDialog">Yes</KButton>
      </DialogActionsBar>
    </Dialog>
    <Window v-if="visibleWindow" title="Status" @close="toggleWindow">
      Additional info - you can drag and resize me!
    </Window>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Dialog, DialogActionsBar, Window } from "@progress/kendo-vue-dialogs";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const visibleDialog = ref(false);
const visibleWindow = ref(false);

const toggleDialog = () => {
    visibleDialog.value = !visibleDialog.value;
};

const toggleWindow = () => {
    visibleWindow.value = !visibleWindow.value;
};
</script>
