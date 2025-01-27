<template>
<div class="k-rtl">
	<editor :value="htmlText"
            style="height:280px">
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
            htmlText: "<p>Some sample text.</p>"
        }
    }
}
</script>
