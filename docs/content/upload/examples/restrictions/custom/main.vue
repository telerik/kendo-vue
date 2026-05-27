<template>
  <LocalizationProvider :language="'en-US'">
    <Upload
      :validate-file="validateFile"
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
  </LocalizationProvider>
</template>

<script setup>
import { ref } from 'vue';
import { Upload, messages } from '@progress/kendo-vue-upload';
import { LocalizationProvider, loadMessages } from '@progress/kendo-vue-intl';

const files = ref([]);

const enMessages = {
    upload: {
        ...messages,
        customerror: 'Custom Error',
    },
};
loadMessages(enMessages, 'en-US');

function validateFile(file) {
    file.validationErrors = file.validationErrors || [];
    if (file.name.indexOf('a') !== -1) {
        if (file.validationErrors.indexOf('customerror') < 0) {
            file.validationErrors.push('customerror');
        }
    }
}

function onAdd(event) {
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
