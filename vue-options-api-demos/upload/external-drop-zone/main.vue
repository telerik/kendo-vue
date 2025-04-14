<template>
     <div>
        <external
            :upload-ref="'upload'"
        >
        </external>
        <div :style="{height: '50px'}" ></div>
        <upload
            ref="upload"
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
import { Upload, ExternalDropZone } from '@progress/kendo-vue-upload';

export default {
    components: {
        upload: Upload,
        external: ExternalDropZone,
    }
}
</script>
