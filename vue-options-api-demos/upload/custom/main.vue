<template>
    <div>
        <upload
            :list="customListItemUI"
            :default-files="[]"
            :batch="false"
            :multiple="true"
            :with-credentials="false"
            :save-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/save'"
            :remove-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'"
        >
         <template v-slot:myTemplate="{props}">
            <custom
                :files="props.files" />
        </template>
        </upload>
        </div>
</template>
<script>
import { Upload } from '@progress/kendo-vue-upload';
import CustomList from './CustomList.vue';

export default {
    components: {
        upload: Upload,
        'custom': CustomList
    },
    data () {
        return {
            customListItemUI: 'myTemplate'
        };
    }
}
</script>
