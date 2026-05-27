<template>
  <div>
    <ExternalDropZone :upload-ref="'upload'" />
    <div :style="{ height: '50px' }"></div>
    <Upload
      ref="upload"
      :default-files="[]"
      :batch="false"
      :multiple="true"
      :with-credentials="false"
      :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
      :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"
    />
  </div>
</template>

<script setup>
import { Upload, ExternalDropZone } from '@progress/kendo-vue-upload';
</script>
