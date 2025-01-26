<template>
<div>
	<editor :value="htmlText" style="height:280px">
		<editor-tool :name="'fontName'"></editor-tool>
        <editor-tool :name="'fontSize'"></editor-tool>
        <editor-tool :name="'formatting'"></editor-tool>
    </editor>
</div>
</template>

<script>
import { Editor, EditorTool } from '@progress/kendo-editor-vue-wrapper';

export default {
    name: 'App',
    components: {
       'editor': Editor,
       'editor-tool':EditorTool
    },
	data: function () {
		return {
			htmlText: "<p>Some sample text.</p>"
		}
    }
}
</script>
