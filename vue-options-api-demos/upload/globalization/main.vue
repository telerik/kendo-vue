<template>
   <div>
        <localization :language="'bg-BG'">
            <intl :locale="'bg'" >
                <upload
                    :default-files="[]"
                    :batch="false"
                    :multiple="true"
                    :with-credentials="false"
                    :save-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/save'"
                    :remove-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'"       
                ></upload>
            </intl>
        </localization>
    </div>
</template>
<script>
import { Upload } from '@progress/kendo-vue-upload';
import { IntlProvider, LocalizationProvider, loadMessages } from '@progress/kendo-vue-intl';
const bgMessages = {
    "upload": {
        "cancel": "Отмени",
        "clearSelectedFiles": "Изчисти",
        "dropFilesHere": "Пусни фаиловете тук за качване",
        "headerStatusUploaded": "Готово",
        "headerStatusUploading": "Качване...",
        "invalidFileExtension": "Този тип фаил не е позволен.",
        "invalidFiles": "Невалидни файлове. Моля проверете изискванията за качване.",
        "invalidMaxFileSize": "Файлът е прекалено голям.",
        "invalidMinFileSize": "Файлът е прекалено малък.",
        "remove": "Премахни",
        "retry": "Опитай отново",
        "select": "Избери файлове...",
        "statusUploaded": "Файловете са успешно качени.",
        "statusUploadFailed": "Файловете не успяха да се качат.",
        "uploadSelectedFiles": "Качи",
        "total": "Общо",
        "files": "файлове"
    }
};
loadMessages(bgMessages, 'bg-BG');

export default {
    components: {
        upload: Upload,
        intl: IntlProvider,
        localization: LocalizationProvider
    }
}
</script>
