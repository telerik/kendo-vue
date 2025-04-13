<template>
    <div>
        <kbutton :style="{ marginBottom: '10px' }" @click="onClick">
       {{isDisabled ? 'Enable': 'Disable'}}
            </kbutton>
        <upload
            :disabled="isDisabled"
            :default-files="[]"
            :batch="false"
            :multiple="true"
            :with-credentials="false"
            :save-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/save'"
            :remove-url="'https://demos.telerik.com/kendo-ui/service-v4/upload/remove'"       
        />
    </div>
</template>
<script>
import { Upload } from '@progress/kendo-vue-upload';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        upload: Upload,
      'kbutton': Button
    },
    data: function () {
        return {
            isDisabled: true
        };
    },
    methods: {
        onClick () {
            this.isDisabled = !this.isDisabled;
        }
    }
}
</script>
