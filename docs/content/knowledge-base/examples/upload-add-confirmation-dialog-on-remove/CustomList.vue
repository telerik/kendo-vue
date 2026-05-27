<template>
  <UploadListMultiItem
    :files="files"
    :async="async"
    :disabled="disabled"
    @cancel="onCancel"
    @remove="onRemove"
    @retry="onRetry"
  />
  <Dialog v-if="visibleDialog" title="Please confirm" @close="toggleDialog">
    <p :style="{ margin: '25px', textAlign: 'center' }">
      Are you sure you want to remove the file?
    </p>
    <DialogActionsBar>
      <KButton @click="toggleDialog">No</KButton>
      <KButton theme-color="primary" @click="confirmRemove">Yes</KButton>
    </DialogActionsBar>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue';
import { UploadListMultiItem } from '@progress/kendo-vue-upload';
import { Dialog, DialogActionsBar } from '@progress/kendo-vue-dialogs';
import { Button as KButton } from '@progress/kendo-vue-buttons';

defineProps({
    files: Array,
    disabled: Boolean,
    async: Object,
});

const emit = defineEmits(['retry', 'remove', 'cancel']);
const visibleDialog = ref(false);
const uid = ref();

function toggleDialog() {
    visibleDialog.value = false;
}

function onRetry(uid) {
    emit('retry', uid);
}

function onRemove(uid) {
    visibleDialog.value = true;
    uid.value = uid;
}

function confirmRemove() {
    emit('remove', uid.value);
}

function onCancel(uid) {
    emit('cancel', uid);
}
</script>
