<template>
  <div>
    <Upload
      :default-files="[]"
      :batch="false"
      :multiple="true"
      :with-credentials="false"
      @beforeupload="onBeforeUpload"
      @beforeremove="onBeforeRemove"
      :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
      :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"
    />
  </div>
</template>

<script setup>
import { Upload } from '@progress/kendo-vue-upload';

function onBeforeUpload(event) {
    event.additionalData.description = 'File upload';
}

function onBeforeRemove(event) {
    event.additionalData.description = 'File remove';
}
</script>
