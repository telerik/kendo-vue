<template>
  <div class="example-wrapper">
    <span v-if="!visibleDialog && !visibleWindow">
      <KButton @click="toggleDialog">Open Dialog</KButton>
      <KButton @click="toggleWindow">Open Window</KButton>
    </span>
    <k-dialog v-if="visibleDialog" :title="'Please confirm'" @close="toggleDialog">
      <p :style="{ margin: '25px', textAlign: 'center' }">
        Are you sure you want to continue?
      </p>
      <dialog-actions-bar>
        <KButton @click="toggleDialog">No</KButton>
        <KButton @click="toggleDialog">Yes</KButton>
      </dialog-actions-bar>
    </k-dialog>
    <window v-if="visibleWindow" :title="'Status'" @close="toggleWindow">
      Additional info - you can drag and resize the me!
    </window>
  </div>
</template>
<script>
import { Dialog, DialogActionsBar, Window } from "@progress/kendo-vue-dialogs";
import { Button } from "@progress/kendo-vue-buttons";

export default {
  components: {
    "k-dialog": Dialog,
    window: Window,
    "dialog-actions-bar": DialogActionsBar,
    KButton: Button
  },
  data: function () {
    return {
      visibleDialog: false,
      visibleWindow: false
    };
  },
  methods: {
    toggleDialog() {
      this.visibleDialog = !this.visibleDialog;
    },
    toggleWindow() {
      this.visibleWindow = !this.visibleWindow;
    }
  }
};
</script>
