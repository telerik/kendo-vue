<template>
  Custom HTML 1
  <single
    :files="files"
    :async="async"
    :disabled="disabled"
    @cancel="onCancel"
    @remove="onRemove"
    @retry="onRetry"
  />
  Custom HTML 2
</template>
<script>
import {
  UploadListSingleItem,
  // UploadListMultiItem
} from '@progress/kendo-vue-upload';

export default {
  components: {
    single: UploadListSingleItem,
    // multi: UploadListMultiItem
  },
  props: {
    files: Array,
    disabled: Boolean,
    async: Object,
  },
  methods: {
    onRetry(uid) {
      this.$emit('retry', uid);
    },
    onRemove(uid) {
      this.$emit('remove', uid);
    },
    onCancel(uid) {
      this.$emit('cancel', uid);
    },
  },
};
</script>
