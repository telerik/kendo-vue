<template>
  <div>
    <Upload
      :restrictions="{ minFileSize: 500000 }"
      :default-files="[]"
      :with-credentials="false"
      :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
      :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"
    />
  </div>
</template>

<script setup>
import { Upload } from '@progress/kendo-vue-upload';
</script>
