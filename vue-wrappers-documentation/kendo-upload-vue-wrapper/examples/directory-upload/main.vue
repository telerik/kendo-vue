<template>
<div>
    <upload ref="upload"
            name="files"
            :async-save-url="'custom-save-url'"
            :async-remove-url="'custom-remove-url'"
            :async-chunk-size="11000"
            :directory="true"
            :directory-drop="true">
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
            var counter = 0;
            var uid = fileEntry.data("files")[0].uid;
            var refreshIntervalId = setInterval(function () {
                if (counter > 100) {
                    clearInterval(refreshIntervalId);
                    var e = { target: { responseText: '{"uploaded":true,"fileUid":"' + uid + '"}', statusText: "OK", status: 200 } };
                    module.onRequestSuccess.call(module, e, fileEntry);
                    return;
                }
                module.upload._onFileProgress({ target: $(fileEntry, module.upload.wrapper) }, counter);
                counter += 10;
            }, 100);
        };

        upload._submitRemove = function (fileNames, eventArgs, onSuccess, onError) {
            onSuccess();
        };
        upload._module.stopUploadRequest= function(fileEntry) {};
    }
}
</script>
