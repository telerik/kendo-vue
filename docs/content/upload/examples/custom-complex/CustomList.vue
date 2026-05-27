<template>
  Custom HTML 1
  <UploadListSingleItem
    :files="files"
    :async="async"
    :disabled="disabled"
    @cancel="onCancel"
    @remove="onRemove"
    @retry="onRetry"
  />
  Custom HTML 2
</template>

<script setup>
import { UploadListSingleItem } from '@progress/kendo-vue-upload';

defineProps({
    files: Array,
    disabled: Boolean,
    async: Object,
});

const emit = defineEmits(['retry', 'remove', 'cancel']);

function onRetry(uid) {
    emit('retry', uid);
}

function onRemove(uid) {
    emit('remove', uid);
}

function onCancel(uid) {
    emit('cancel', uid);
}
</script>
