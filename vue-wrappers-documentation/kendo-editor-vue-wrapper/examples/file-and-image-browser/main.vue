<template>
<div>
	<editor :value="htmlText"
            style="height:280px"
            :image-browser="imageBrowser"
            :file-browser="fileBrowser">
        <editor-tool :name="'insertImage'"></editor-tool>
        <editor-tool :name="'insertFile'"></editor-tool>
    </editor>
</div>
</template>

<script>
import { Editor, EditorTool } from '@progress/kendo-editor-vue-wrapper';

export default {
    name: 'App',
    components: {
       'editor': Editor,
       'editor-tool': EditorTool
    },
	data: function() {
        return {
            htmlText: "<p>Some sample text.</p>",
            imageBrowser: {
                transport: {
                    read: "https://demos.telerik.com/kendo-ui/service/ImageBrowser/Read",
                    destroy: {
                        url: "https://demos.telerik.com/kendo-ui/service/ImageBrowser/Destroy",
                        type: "POST"
                    },
                    create: {
                        url: "https://demos.telerik.com/kendo-ui/service/ImageBrowser/Create",
                        type: "POST"
                    },
                    thumbnailUrl: "https://demos.telerik.com/kendo-ui/service/ImageBrowser/Thumbnail",
                    uploadUrl: "https://demos.telerik.com/kendo-ui/service/ImageBrowser/Upload",
                    imageUrl: "https://demos.telerik.com/kendo-ui/service/ImageBrowser/Image?path={0}"
                }
            },
            fileBrowser: {
                transport: {
                    read: "https://demos.telerik.com/kendo-ui/service/FileBrowser/Read",
                    destroy: {
                        url: "https://demos.telerik.com/kendo-ui/service/FileBrowser/Destroy",
                        type: "POST"
                    },
                    create: {
                        url: "https://demos.telerik.com/kendo-ui/service/FileBrowser/Create",
                        type: "POST"
                    },
                    uploadUrl: "https://demos.telerik.com/kendo-ui/service/FileBrowser/Upload",
                    fileUrl: "https://demos.telerik.com/kendo-ui/service/FileBrowser/File?fileName={0}"
                }
            }
        }
    }
}
</script>
