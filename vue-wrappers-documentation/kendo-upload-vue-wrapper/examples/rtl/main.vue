<template>
<div class="k-rtl">
    <div class="demo-section k-content">
        <upload ref="upload"
                name="files"
                :async-save-url="'custom-save-url'"
                :async-remove-url="'custom-remove-url'">
        </upload>
    </div>
</div>
</template>


<script>
import { Upload } from '@progress/kendo-upload-vue-wrapper';

export default {
    name: 'App',
    components: {
       'upload': Upload
    },
    mounted: function () {
        /*
            The code in this function is only added to simulate a successful upload request for this demo.
            Do not use the code in other cases when working with the Upload component.
        */

        var postFormData = function (url, data, fileEntry, xhr) {
            var module = this;
            fileEntry.data("request", xhr);
            setTimeout(function () {
                var e = { target: { responseText: '', statusText: "OK", status: 200 } };
                module.onRequestSuccess.call(module, e, fileEntry);
            }, 1000);
        };
        var submitRemove = function (fileNames, eventArgs, onSuccess, onError) {
            onSuccess();
        };
        var upload = this.$refs.upload.kendoWidget();
        upload._module.postFormData = postFormData;
        upload._submitRemove = submitRemove;
    }
}
</script>
