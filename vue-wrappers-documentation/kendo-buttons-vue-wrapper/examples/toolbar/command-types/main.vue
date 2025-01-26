<template>
<div>
    <toolbar>
        <toolbar-item type="button" text="Button"></toolbar-item>
        <toolbar-item type="button" text="Toggle Button" :togglable="true"></toolbar-item>
        <toolbar-item type="splitButton" text="Insert" :menu-buttons="[
            { text: 'Insert above', icon: 'insert-up' },
            { text: 'Insert between', icon: 'insert-middle' },
            { text: 'Insert below', icon: 'insert-down' }]">
        </toolbar-item>
        <toolbar-item type="separator"></toolbar-item>
        <toolbar-item template="<label for='dropdown'>Format:</label>"></toolbar-item>
        <toolbar-item template="<input id='dropdown' style='width: 150px;' />" overflow="never"></toolbar-item>
        <toolbar-item type="separator"></toolbar-item>
        <toolbar-item type="buttonGroup" :buttons="[
            { icon: 'align-left', text: 'Left', togglable: true, group: 'text-align' },
            { icon: 'align-center', text: 'Center', togglable: true, group: 'text-align' },
            { icon: 'align-right', text: 'Right', togglable: true, group: 'text-align' }]">
        </toolbar-item>
        <toolbar-item type="buttonGroup" :buttons="[
            { icon: 'bold', togglable: true },
            { icon: 'italic', togglable: true },
            { icon: 'underline', togglable: true }]">
        </toolbar-item>
        <toolbar-item type="button" text="Action" overflow="always"></toolbar-item>
        <toolbar-item type="button" text="Another Action" overflow="always"></toolbar-item>
        <toolbar-item type="button" text="Something else here" overflow="always"></toolbar-item>
    </toolbar>
</div>
</template>

<script>
import {ToolBar, ToolBarItem} from '@progress/kendo-buttons-vue-wrapper';

export default {
  name: 'App',
  components: {
    'toolbar': ToolBar,
    'toolbar-item': ToolBarItem
  },
  mounted: function() {
        kendo.jQuery('#dropdown').kendoDropDownList({
            optionLabel: 'Paragraph',
            dataTextField: 'text',
            dataValueField: 'value',
            dataSource: [
                { text: 'Heading 1', value: 1 },
                { text: 'Heading 2', value: 2 },
                { text: 'Heading 3', value: 3 },
                { text: 'Title', value: 4 },
                { text: 'Subtitle', value: 5 }
            ]
        })
    }
}
</script>
