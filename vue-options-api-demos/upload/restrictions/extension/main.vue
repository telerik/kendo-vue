<template>
    <div>
        <upload
            :restrictions="{
                allowedExtensions: [ '.jpg', '.png' ]
            }"
            :default-files="[]"
            :with-credentials="false"
            :save-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/save'"
            :remove-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'"       
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
