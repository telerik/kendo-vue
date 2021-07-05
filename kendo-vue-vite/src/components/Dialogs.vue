<template>
 <div class="example-wrapper">
    <span v-if="!visibleDialog && !visibleWindow">
      <button class="k-button" @click="toggleDialog">Open Dialog</button>
      <button class="k-button" @click="toggleWindow">Open Window</button>
    </span>
    <k-dialog
      v-if="visibleDialog"
      :title="'Please confirm'"
      @close="toggleDialog"
    >
      <p :style="{ margin: '25px', textAlign: 'center' }">
        Are you sure you want to continue?
      </p>
      <dialog-actions-bar>
        <button class="k-button" @click="toggleDialog">No</button>
        <button class="k-button" @click="toggleDialog">Yes</button>
      </dialog-actions-bar>
    </k-dialog>
    <window v-if="visibleWindow" :title="'Status'" @close="toggleWindow">
      Additional info - you can drag and resize the me!
    </window>
  </div>
</template>
<script>
import { Dialog, DialogActionsBar, Window } from "@progress/kendo-vue-dialogs";

export default {
  components: {
    "k-dialog": Dialog,
    window: Window,
    "dialog-actions-bar": DialogActionsBar
  },
  data: function() {
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
