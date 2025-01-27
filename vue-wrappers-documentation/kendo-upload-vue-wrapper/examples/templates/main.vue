<template>
<div>
    <div class="demo-section k-content">
        <upload ref="upload"
                name="files"
                :async-save-url="'custom-save-url'"
                :async-remove-url="'custom-remove-url'"
                :async-auto-upload="false"
                :multiple="true"
                :template="template"
                :validation-allowed-extensions='[".gif", ".jpg", ".png"]'>
        </upload>
    </div>
</div>
</template>

 <style>
    .file-icon {
        display: inline-block;
        float: left;
        width: 48px;
        height: 48px;
        margin-left: 10px;
        margin-top: 13.5px;
    }

    .img-file { background-image: url(https://demos.telerik.com/kendo-ui/content/web/upload/jpg.png) }

    .file-heading {
        font-family: Arial;
        font-size: 1.1em;
        display: inline-block;
        float: left;
        width: 60%;
        margin: 0 0 0 20px;
        height: 25px;
        -ms-text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow:hidden;
        white-space:nowrap;
    }

    .file-name-heading {
        font-weight: bold;
        margin-top: 20px;
    }

    .file-size-heading {
        font-weight: normal;
        font-style: italic;
    }

    li.k-file div.file-wrapper {
        position: relative;
        height: 75px;
    }
</style>

<script>
import { Upload } from '@progress/kendo-upload-vue-wrapper';

export default {
    name: 'App',
    components: {
       'upload': Upload
    },
    data: function (){
        return {
            template: "<span class='k-progress'></span>" +
                "<div class='file-wrapper'>" +
                    "<span class='file-icon img-file'></span>" +
                    "<h4 class='file-heading file-name-heading'>Name: #=name#</h4>" +
                    "<h4 class='file-heading file-size-heading'>Size: #=size# bytes</h4>" +
                    "<strong class='k-upload-status'>" +
                        "<button type='button' " + "class='k-upload-action'></button>" +
                        "<button type='button' class='k-upload-action'></button>" +
                    "</strong>" +
                "</div>"
        };
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
