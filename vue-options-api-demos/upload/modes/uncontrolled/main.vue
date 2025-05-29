<template>
    <div>
      <upload
        :default-files="[
          {
            name: 'Picture1',
            extention: '.jpg',
            size: 4000,
            progress: 0,
            status: initial,
            uid: 'uidPicture1',
          },
        ]"
        :batch="false"
        :multiple="true"
        :with-credentials="false"
        :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
        :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"
      />
    </div>
  </template>
  <script>
  import { Upload, UploadFileStatus } from '@progress/kendo-vue-upload';
  
  export default {
    components: {
      upload: Upload,
    },
    data() {
      return {
        initial: UploadFileStatus.Initial,
      };
    },
  };
  </script>
  