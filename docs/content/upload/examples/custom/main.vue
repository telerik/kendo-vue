<template>
  <div>
    <Upload
      :list="customListItemUI"
      :default-files="[]"
      :batch="false"
      :multiple="true"
      :with-credentials="false"
      :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
      :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"
    >
      <template #myTemplate="{ props }">
        <CustomList :files="props.files" />
      </template>
    </Upload>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Upload } from '@progress/kendo-vue-upload';
import CustomList from './CustomList.vue';

const customListItemUI = ref('myTemplate');
</script>
