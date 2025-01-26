<template>
<div>
    <h4>Upload PDF</h4>
    <upload ref="imageUpload"
                    name="pdfFiles"
                    :async-save-url="'custom-save-url'"
                    :async-remove-url="'custom-remove-url'"
                    :validation-allowed-extensions='[".pdf"]'>
    </upload>
    <div class="demo-hint">You can only upload <strong>PDF</strong> files.</div>

    <h4 style="margin-top: 2em;">Upload Image</h4>
    <upload ref="imageUpload"
                    name="imageFiles"
                    :async-save-url="'custom-save-url'"
                    :async-remove-url="'custom-remove-url'"
                    :validation-allowed-extensions='[".gif", ".jpg", ".png"]'>
    </upload>
    <div class="demo-hint">You can only upload <strong>GIF</strong>, <strong>JPG</strong>, <strong>PNG</strong> files.</div>
    
    <h4 style="margin-top: 2em;">Upload Documents</h4>
    <upload ref="documentsUpload"
                    name="documentFiles"
                    :async-save-url="'custom-save-url'"
                    :async-remove-url="'custom-remove-url'"
                    :validation-max-file-size="4194304">
    </upload>
    <div class="demo-hint">Maximum allowed file size is <strong>4MB</strong>.</div>
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

        var imageUpload = this.$refs.imageUpload.kendoWidget();
        imageUpload._module.postFormData = postFormData;
        imageUpload._submitRemove = submitRemove;

        var imageUpload = this.$refs.imageUpload.kendoWidget();
        imageUpload._module.postFormData = postFormData;
        imageUpload._submitRemove = submitRemove;

        var documentsUpload = this.$refs.documentsUpload.kendoWidget();
        documentsUpload._module.postFormData = postFormData;
        documentsUpload._submitRemove = submitRemove;
    }
}
</script>
