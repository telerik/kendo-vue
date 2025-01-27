<template>
<div>
	<editor :value="htmlText"
            style="height:280px"
            :stylesheets="stylesheets">
		<editor-tool :name="'formatting'"
                    :items="items">
		</editor-tool>
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
            stylesheets: ['https://demos.telerik.com/kendo-ui/content/web/editor/editorStyles.css'],
            items: [{
                "text": "Error",
                "value": ".hlError"
            }, {
                "text": "OK",
                "value": ".hlOK"
            }, {
                "text": "Inline Code",
                "value": ".inlineCode"
            }]
        }
    }
}
</script>
