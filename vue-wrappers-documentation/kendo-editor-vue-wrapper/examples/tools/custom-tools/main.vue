<template>
<div>
    <editor ref="editor" :value="htmlText">
        <editor-tool :name="'customTemplate'"
                           :template="customTemplate">
        </editor-tool>
        <editor-tool :name="'custom'"
                           :tooltip="'Insert a horizontal rule'"
                           :exec="exec">
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
       'editor-tool':EditorTool
    },
    data: function () {
        return {
            htmlText: "<p>Some sample text.</p>"
        }
    },
    mounted: function () {
        var that = this;

        kendo.jQuery('#templateTool').kendoDropDownList({
            change: function (e) {
                var editor = that.$refs.editor.kendoWidget();
                editor.body.style.backgroundColor = e.sender.value()
            }
        })
    },
    methods: {
        customTemplate () {
            return `<label for='templateTool' style='vertical-align:middle;'>Background:</label>
                    <select id='templateTool' style='width:90px'>
                    <option value=''>none</option>
                    <option value='#ff9'>yellow</option>
                    <option value='#dfd'>green</option>
                </select>`;
        },
        exec (e) {
            var editor = this.$refs.editor.kendoWidget();
            editor.exec('inserthtml', { value: '<hr />' });
        }
    }
}
</script>
