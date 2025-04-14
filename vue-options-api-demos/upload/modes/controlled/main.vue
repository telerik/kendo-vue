<template>
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
</template>
<script>
import { Upload } from '@progress/kendo-vue-upload';

export default {
    components: {
        upload: Upload
    },
    data: function () {
        return {
            files: []
        };
    },
    methods: {
        onAdd (event) {
            console.log('onAdd: ', event.affectedFiles);
            this.files= event.newState;
        },
        onRemove(event) {
            console.log('onRemove: ', event.affectedFiles);
            this.files= event.newState;
        },
        onProgress(event) {
            console.log('onProgress: ', event.affectedFiles, event.serverResponse);
            this.files= event.newState;
        },
        onStatusChange(event) {
            console.log('onStatusChange: ', event.affectedFiles, event.serverResponse);
            this.files= event.newState;
        }
    }
}
</script>
