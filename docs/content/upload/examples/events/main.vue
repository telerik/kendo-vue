<template>
  <div>
    <Upload
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
    <div class="example-config" :style="{ marginTop: '20px' }">
      <ul class="event-log">
        <li v-for="event in events" :key="event">
          {{ event }}
        </li>
      </ul>
    </div>
    <div v-if="files.length" class="img-preview example-config">
      <h3>Preview selected images</h3>
      <img
        v-for="fileKey in Object.keys(filePreviews)"
        :src="filePreviews[fileKey]"
        :key="fileKey"
        alt="image preview"
        :style="{ width: 200, margin: 10 }"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Upload } from '@progress/kendo-vue-upload';

const files = ref([]);
const events = ref([]);
const filePreviews = ref({});

const fileStatuses = [
    'UploadFailed',
    'Initial',
    'Selected',
    'Uploading',
    'Uploaded',
    'RemoveFailed',
    'Removing',
];

function onAdd(event) {
    const afterStateChange = () => {
        event.affectedFiles
            .filter((file) => !file.validationErrors)
            .forEach((file) => {
                const reader = new FileReader();

                reader.onloadend = (ev) => {
                    filePreviews.value[file.uid] = ev.target.result;
                };

                reader.readAsDataURL(file.getRawFile());
            });
    };

    files.value = event.newState;
    events.value.push(`File selected: ${event.affectedFiles[0].name}`);
    afterStateChange();
}

function onRemove(event) {
    const updatedPreviews = { ...filePreviews.value };

    event.affectedFiles.forEach((file) => {
        delete updatedPreviews[file.uid];
    });

    files.value = event.newState;
    events.value.push(`File removed: ${event.affectedFiles[0].name}`);
    filePreviews.value = updatedPreviews;
}

function onProgress(event) {
    files.value = event.newState;
    events.value.push(`On Progress: ${event.affectedFiles[0].progress} %`);
}

function onStatusChange(event) {
    const file = event.affectedFiles[0];

    files.value = event.newState;
    events.value.push(
        `File '${file.name}' status changed to: ${fileStatuses[file.status]}`
    );
}
</script>
