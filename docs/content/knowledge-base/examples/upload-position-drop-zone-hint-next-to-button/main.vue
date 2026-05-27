<template>
  <div class="example-wrapper">
    <Upload
      :batch="false"
      :multiple="true"
      :with-credentials="false"
      save-url="https://demos.telerik.com/kendo-ui/service/upload/save"
      remove-url="https://demos.telerik.com/kendo-ui/service/upload/remove"
    />
  </div>
</template>

<script setup lang="ts">
import { Upload } from '@progress/kendo-vue-upload';
import '@progress/kendo-theme-default/dist/all.css';
import './style.css';
</script>
