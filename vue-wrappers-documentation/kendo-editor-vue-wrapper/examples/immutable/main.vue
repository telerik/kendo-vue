<template>
<div>
	<editor :value="htmlText"
            style="height:750px"
            :immutables-serialization="serialization"
            :immutables-deserialization="deserialization"
            :tag="'div'">
        <editor-tool :name="'bold'"></editor-tool>
        <editor-tool :name="'italic'"></editor-tool>
        <editor-tool :name="'underline'"></editor-tool>
        <editor-tool :name="'fontName'"></editor-tool>
        <editor-tool :name="'fontSize'"></editor-tool>
        <editor-tool :name="'viewHtml'"></editor-tool>
	</editor>
</div>
</template>

<style>
	.k-editor *[contenteditable='false'] {
		opacity: 0.5 !important;
		cursor: default;
	}
</style>

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
            htmlText: `
                <div class="headerField" contenteditable="false" style="font-size:32px; color: #078e23; text-align:center;">
                    <p>Company Name</p>
                    <hr />
                </div>

                <div class="addressField" contenteditable="false" style="width: 100%; text-align:right;">
                    1010 Street,<br />
                    City,<br />
                    Country, <br />
                    +000 000 555 666<br />
                </div>

                <p><span contenteditable="false">Dear </span> Your Name,</p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel nunc velit. Proin dictum ac justo eu varius. Fusce vehicula, erat ac sagittis consequat, leo libero tristique dolor, et maximus eros ante quis quam. Aliquam erat volutpat. Cras nec mattis dui, sed rhoncus magna. Maecenas eget tristique nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec nisl elementum, rhoncus ligula at, fringilla odio. Curabitur semper ultricies tristique. Donec dapibus placerat dui nec fermentum. Nunc non cursus nibh. Nulla rhoncus vitae erat id facilisis.
                </p>
                <p>
                    Aenean lacinia eros eu interdum placerat. Pellentesque elit tellus, condimentum eu nulla quis, iaculis gravida sapien. Aliquam elementum dapibus eros sed pretium. Praesent porta odio magna, nec efficitur arcu pharetra a. Nulla lacus orci, pretium eu pellentesque id, ornare eget turpis. Quisque condimentum quam ante, ornare cursus nisl suscipit ac. Nulla non leo semper, finibus mauris eu, interdum ex.
                </p>

                <p contenteditable="false">Best regards,</p>
                <p>Your Name</p>
                <div class="addressField" contenteditable="false" style="width: 100%; text-align:left;">
                    1010 Street,<br />
                    City,<br />
                    Country, <br />
                    +000 000 555 666<br />
                </div>
            `
        }
    },
    methods: {
    serialization (node) {
        var tagName = node.tagName;
        return "<" + tagName + ">" + "</" + tagName + ">";
    },
    deserialization (node, immutable) {
        immutable.style.backgroundColor = "red";
    }
    }
}
</script>
