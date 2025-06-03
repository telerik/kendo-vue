<template>
  <div>
    <upload
        :default-files="[]"
        :batch="false"
        :multiple="true"
        :with-credentials="false"
        :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
        :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"       
        />
    </div>
</template>
<script>
import { Upload } from '@progress/kendo-vue-upload';

export default {
    components: {
        upload: Upload
    }
}
</script>
