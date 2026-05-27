<template>
  <div>
    <ExternalDropZone
      :upload-ref="'upload'"
      :custom-hint="hint"
      :custom-note="note"
      :inner-style="{ backgroundColor: 'antiquewhite' }"
    >
      <template #myHintTemplate>
        <CustomHint />
      </template>
      <template #myNoteTemplate>
        <CustomNote />
      </template>
    </ExternalDropZone>
    <div :style="{ height: '50px' }"></div>
    <Upload
      ref="upload"
      :default-files="[]"
      :batch="false"
      :multiple="true"
      :with-credentials="false"
      :save-url="'https://demos.telerik.com/service/v2/odata/upload/save'"
      :remove-url="'https://demos.telerik.com/service/v2/odata/upload/remove'"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Upload, ExternalDropZone } from '@progress/kendo-vue-upload';
import CustomHint from './CustomHint.vue';
import CustomNote from './CustomNote.vue';

const hint = ref('myHintTemplate');
const note = ref('myNoteTemplate');
</script>
