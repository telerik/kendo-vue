<template>
  <Upload
    :batch="false"
    :multiple="true"
    :files="files"
    @add="onAdd"
    @remove="onRemove"
    @progress="onProgress"
    @statuschange="onStatusChange"
    :with-credentials="false"
    :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
    :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Upload } from '@progress/kendo-vue-upload';

const files = ref([]);

function onAdd(event) {
    console.log('onAdd: ', event.affectedFiles);
    files.value = event.newState;
}

function onRemove(event) {
    console.log('onRemove: ', event.affectedFiles);
    files.value = event.newState;
}

function onProgress(event) {
    console.log('onProgress: ', event.affectedFiles, event.serverResponse);
    files.value = event.newState;
}

function onStatusChange(event) {
    console.log('onStatusChange: ', event.affectedFiles, event.serverResponse);
    files.value = event.newState;
}
</script>
