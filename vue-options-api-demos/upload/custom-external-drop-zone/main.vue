<template>
     <div>
        <external
            :upload-ref="'upload'"
            :custom-hint="hint"
            :custom-note="note"
            :inner-style="{backgroundColor: 'antiquewhite'}"
        >
         <template v-slot:myHintTemplate>
            <customhint />
         </template>
         <template v-slot:myNoteTemplate>
            <customnote />
         </template>
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
import CustomHint from './CustomHint.vue';
import CustomNote from './CustomNote.vue';

export default {
    components: {
        upload: Upload,
        external: ExternalDropZone,
        'customhint': CustomHint,
        'customnote': CustomNote,
    },
    data () {
        return {
            hint: 'myHintTemplate',
            note: 'myNoteTemplate'
        };
    }
}
</script>
