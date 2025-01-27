<template>
<div>
	<editor :value="htmlText"
            style="height:280px"
            :paste-cleanup="pasteCleanup">
    </editor>
</div>
</template>

<script>
import { Editor } from '@progress/kendo-editor-vue-wrapper';

export default {
    name: 'App',
    components: {
       'editor': Editor
    },
	data: function() {
        return {
            htmlText: "<p>Some sample text.</p>",
            pasteCleanup: {
                all: false,
                css: false,
                keepNewLines: false,
                msAllFormatting: false,
                msConvertLists: true,
                msTags: true,
                none: false,
                span: false
            }
        }
    }
}
</script>
