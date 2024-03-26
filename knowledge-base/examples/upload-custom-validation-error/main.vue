<template>
    <localization :language="'en-US'">
      <upload
        :batch="false"
        :multiple="true"
        :files="files"
        @add="onAdd"
        @remove="onRemove"
        @progress="onProgress"
        @statuschange="onStatusChange"
        :with-credentials="false"
        :save-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/save'"
        :remove-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'"
      />
    </localization>
  </template>
  <script>
  import { Upload } from '@progress/kendo-vue-upload';
  import {
    IntlProvider,
    LocalizationProvider,
    loadMessages,
  } from '@progress/kendo-vue-intl';
  
  const enMessages = {
    upload: {
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
      onAdd(event) {
        event.newState[0].validationErrors = ['customerror'];
        this.files = event.newState;
      },
      onRemove(event) {
        this.files = event.newState;
      },
      onProgress(event) {
        this.files = event.newState;
      },
      onStatusChange(event) {
        this.files = event.newState;
      },
    },
  };
  </script>
  