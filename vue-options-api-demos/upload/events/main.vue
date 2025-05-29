<template>
    <div>
        <upload
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
        ></upload>
        <div class='example-config' :style="{ marginTop: '20px' }">
            <ul class='event-log'>
                    <li v-for="event in events" :key="event">
                        {{event}}
                </li>
            </ul>
        </div>
        <div v-if="files.length" class='img-preview example-config'>
            <h3>Preview selected images</h3>
            <img v-for="fileKey in Object.keys(filePreviews)"
            :src="filePreviews[fileKey]"
            :key="fileKey"
            alt='image preview'
            :style="{ width: 200, margin: 10 }"
            />
        </div>
    </div>
</template>
<script>
import { Upload } from '@progress/kendo-vue-upload';

const fileStatuses = [
    'UploadFailed',
    'Initial',
    'Selected',
    'Uploading',
    'Uploaded',
    'RemoveFailed',
    'Removing'
];

export default {
    components: {
        upload: Upload
    },
    data: function () {
        return {
            files: [],
            events: [],
            filePreviews: {}
        };
    },
    methods: {
        onAdd(event) {
            const afterStateChange = () => {
                event.affectedFiles
                    .filter(file => !file.validationErrors)
                    .forEach(file => {
                        const reader = new FileReader();
    
                        reader.onloadend = (ev) => {
                            this.filePreviews[file.uid] = ev.target.result;
                        };
    
                        reader.readAsDataURL(file.getRawFile());
                    });
            };
    
            this.files = event.newState;
            this.events.push(`File selected: ${event.affectedFiles[0].name}`);
                afterStateChange();
        },
        onRemove(event) {
            const filePreviews = {
                ...this.filePreviews
            };
    
            event.affectedFiles.forEach(file => {
                delete filePreviews[file.uid];
            });
    
            this.files = event.newState;
            this.events.push(`File removed: ${event.affectedFiles[0].name}`);
            this.filePreviews = filePreviews;
        },
        onProgress (event) {
            this.files = event.newState;
            this.events.push( `On Progress: ${event.affectedFiles[0].progress} %`);
        },
        onStatusChange (event) {
            const file = event.affectedFiles[0];
    
            this.files = event.newState;
            this.events.push(`File '${file.name}' status changed to: ${fileStatuses[file.status]}`);
        }
    }
}
</script>
