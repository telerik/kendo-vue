<template>
<div>
    <upload ref="upload"
            name="files"
            :async-save-url="'custom-save-url'"
            :async-remove-url="'custom-remove-url'">
    </upload>
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
        var upload = this.$refs.upload.kendoWidget();

        upload._module.postFormData = function (url, data, fileEntry, xhr) {
            var module = this;
            fileEntry.data("request", xhr);
            setTimeout(function () {
                var e = { target: { responseText: '', statusText: "OK", status: 200 } };
                module.onRequestSuccess.call(module, e, fileEntry);
            }, 1000);
        };

        upload._submitRemove = function (fileNames, eventArgs, onSuccess, onError) {
            onSuccess();
        };
    }
}
</script>
