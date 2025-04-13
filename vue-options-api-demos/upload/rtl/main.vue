<template>
    <div class="k-rtl" dir="rtl">
        <upload
            :default-files="[]"
            :batch="false"
            :multiple="true"
            :with-credentials="false"
            :save-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/save'"
            :remove-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'"       
        ></upload>
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
