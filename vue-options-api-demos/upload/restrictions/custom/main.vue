<template>
    <localization :language="'en-US'">
      <upload
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
    </localization>
  </template>
  <script>
  import { Upload, messages } from '@progress/kendo-vue-upload';
  import {
    IntlProvider,
    LocalizationProvider,
    loadMessages,
  } from '@progress/kendo-vue-intl';
  
  const enMessages = {
    upload: {
      ...messages,
      customerror: 'Custom Error',
    },
  };
  loadMessages(enMessages, 'en-US');
  
  export default {
    components: {
      upload: Upload,
      localization: LocalizationProvider,
    },
    data: function () {
      return {
        files: [],
      };
    },
    methods: {
      validateFile(file) {
        file.validationErrors = file.validationErrors || [];
        if (file.name.indexOf('a') !== -1) {
          if (file.validationErrors.indexOf('customerror') < 0) {
            file.validationErrors.push('customerror');
          }
        }
      },
      onAdd(event) {
        this.files = event.newState;
      },
      onRemove(event) {
        console.log('onRemove: ', event.affectedFiles);
        this.files = event.newState;
      },
      onProgress(event) {
        console.log('onProgress: ', event.affectedFiles, event.serverResponse);
        this.files = event.newState;
      },
      onStatusChange(event) {
        console.log(
          'onStatusChange: ',
          event.affectedFiles,
          event.serverResponse
        );
        this.files = event.newState;
      },
    },
  };
  </script>
  