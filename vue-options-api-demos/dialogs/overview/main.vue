<template>
  <div>
    <span v-if="!visibleDialog && !visibleWindow">
      <KButton @click="toggleDialog">Open Dialog</KButton>
      <KButton @click="toggleWindow">Open Window</KButton>
    </span>
    <Dialog
      v-if="visibleDialog"
      :title="'Please confirm'"
      @close="toggleDialog"
    >
      <p :style="{ margin: '25px', textAlign: 'center' }">
        Are you sure you want to continue?
      </p>
      <DialogActionsBar>
        <KButton @click="toggleDialog">No</KButton>
        <KButton @click="toggleDialog">Yes</KButton>
      </DialogActionsBar>
    </Dialog>
    <KWindow v-if="visibleWindow" :title="'Status'" @close="toggleWindow">
      Additional info - you can drag and resize the me!
    </KWindow>
  </div>
</template>
<script>
import { Dialog, DialogActionsBar, Window } from "@progress/kendo-vue-dialogs";
import { Button } from "@progress/kendo-vue-buttons";

export default {
  components: {
    Dialog,
    KWindow: Window,
    DialogActionsBar,
    KButton: Button,
  },
  data: function () {
    return {
      visibleDialog: false,
      visibleWindow: false,
    };
  },
  methods: {
    toggleDialog() {
      this.visibleDialog = !this.visibleDialog;
    },
    toggleWindow() {
      this.visibleWindow = !this.visibleWindow;
    },
  },
};
</script>
