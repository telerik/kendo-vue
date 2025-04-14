<template>
  <div>
                  <span v-if="!visibleDialog">
                      <kbutton @click="toggleDialog">Open Dialog</kbutton>
                  </span>
              <k-dialog v-if="visibleDialog" :title="'Delete Data'" @close="toggleDialog">
                  <p :style="{ margin: '25px', textAlign: 'center' }">This action cannot be undone.</p>
                  <dialog-actions-bar>
                      <kbutton @click='toggleDialog'>Cancel</kbutton>
                      <kbutton @click='onDeleteData'>Delete</kbutton>
                  </dialog-actions-bar>
              </k-dialog>
          </div>
</template>
<script>
import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
      'k-dialog': Dialog,
      'dialog-actions-bar': DialogActionsBar,
      'kbutton': Button
    },
    data: function () {
        return {
            visibleDialog: false
        };
    },
    methods: {
      toggleDialog() {
          this.visibleDialog = !this.visibleDialog;
      },
      onDeleteData() {
            alert("Data deleted.");
            this.visibleDialog = !this.visibleDialog;
      }
    }
};

</script>
