<template>
<div>
    <div class="wrapper">
        <div id="products">
            <div class="product" v-for="item in initialFiles">
                <img :src="'https://demos.telerik.com/kendo-ui/content/web/foods/' + item.name"
                     :alt="item.name + 'image'" />
            </div>
        </div>
        <div class="dropZoneElement">
            <div class="textWrapper">
            <p><span>+</span>Add Image</p>
            <p class="dropImageHereText">Drop image here to upload</p>
        </div>
        </div>
    </div>
    <upload ref="upload"
            name="files"
            :async-save-url="'custom-save-url'"
            :async-remove-url="'custom-remove-url'"
            :validation-allowed-extensions="['.jpg', '.jpeg', '.png', '.bmp', '.gif']"
            :show-file-list="false"
            :drop-zone="'.dropZoneElement'"
            @success="onSuccess" >
    </upload>
</div>
</template>

<style>
    .dropZoneElement {
        position: relative;
        display: inline-block;
        background-color: #f8f8f8;
        border: 1px solid #c7c7c7;
        width: 230px;
        height: 110px;
        text-align: center;
    }

    .textWrapper {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        font-size: 24px;
        line-height: 1.2em;
        font-family: Arial,Helvetica,sans-serif;
        color: #000;
    }

    .dropImageHereText {
        color: #c7c7c7;
        text-transform: uppercase;
        font-size: 12px;
    }

    .product {
        float: left;
        position: relative;
        margin: 0 10px 10px 0;
        padding: 0;
    }
    .product img {
        width: 110px;
        height: 110px;
    }

    .wrapper:after {
        content: ".";
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
</style>

<script>
import { Upload } from '@progress/kendo-upload-vue-wrapper';

export default {
    name: 'App',
    components: {
       'upload': Upload
    },
    data: function () {
        return {
            initialFiles: [
                { name: "1.jpg" },
                { name: "2.jpg" },
                { name: "3.jpg" },
                { name: "4.jpg" },
                { name: "5.jpg" },
                { name: "6.jpg" }
                ]
        };
    },
    methods: {
        onSuccess: function (e) {
            if (e.operation == "upload") {
                for (var i = 0; i < e.files.length; i++) {
                    var file = e.files[i].rawFile;

                    if (file) {
                        var reader = new FileReader();

                        reader.onloadend = function () {
                            $("<div class='product'><img src=" + this.result + " /></div>").appendTo($("#products"));
                        };

                        reader.readAsDataURL(file);
                    }
                }
            }
        }
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
