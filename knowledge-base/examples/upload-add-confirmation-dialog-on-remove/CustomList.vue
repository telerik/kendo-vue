<template>
    <UploadListMultiItem
      :files="files"
      :async="async"
      :disabled="disabled"
      @cancel="onCancel"
      @remove="onRemove"
      @retry="onRetry"
    />
    <Dialog v-if="visibleDialog" :title="'Please confirm'" @close="toggleDialog">
      <p :style="{ margin: '25px', textAlign: 'center' }">
        Are you sure you want to remove the file?
      </p>
      <DialogActionsBar>
        <KButton @click="toggleDialog">No</KButton>
        <KButton :theme-color="'primary'" @click="confirmRemove">Yes</KButton>
      </DialogActionsBar>
    </Dialog>
  </template>
  <script>
  import { UploadListMultiItem } from '@progress/kendo-vue-upload';
  import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
  import { Button as KButton } from '@progress/kendo-vue-buttons';
  
  export default {
    components: {
      UploadListMultiItem,
      KButton,
      Dialog,
      DialogActionsBar,
    },
    props: {
      files: Array,
      disabled: Boolean,
      async: Object,
    },
    emits: ['retry', 'remove', 'cancel'],
    data() {
      return {
        visibleDialog: false,
        uid: undefined,
      };
    },
    methods: {
      toggleDialog() {
        this.visibleDialog = false;
      },
      onRetry(uid) {
        this.$emit('retry', uid);
      },
      onRemove(uid) {
        this.visibleDialog = true;
        this.uid = uid;
      },
      confirmRemove() {
        this.$emit('remove', this.uid);
      },
      onCancel(uid) {
        this.$emit('cancel', uid);
      },
    },
  };
  </script>
  