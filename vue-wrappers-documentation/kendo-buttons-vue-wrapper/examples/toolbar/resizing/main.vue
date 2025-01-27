<template>
<div>
    <k-button ref="buttonRef" style="display:none" @kendoclick="onClick">Click here to open the window</k-button>

    <window ref="windowRef"
                  :width="'790px'"
                  :height="'150px'"
                  @close="onWindowClose"
                  @open="onWindowOpen"
                  :title="'This is Window'">
        <toolbar>
            <toolbar-item type="button" text="Button"></toolbar-item>
            <toolbar-item type="button" text="Toggle Button" :togglable="true"></toolbar-item>
            <toolbar-item type="splitButton" text="Insert" :menu-buttons="[
                { text: 'Insert above', icon: 'insert-up' },
                { text: 'Insert between', icon: 'insert-middle' },
                { text: 'Insert below', icon: 'insert-down' }]">
            </toolbar-item>
            <toolbar-item type="separator"></toolbar-item>
            <toolbar-item type="buttonGroup" :buttons="[
                { icon: 'align-left', text: 'Left', togglable: true, group: 'text-align' },
                { icon: 'align-center', text: 'Center', togglable: true, group: 'text-align' },
                { icon: 'align-right', text: 'Right', togglable: true, group: 'text-align' }]">
            </toolbar-item>
            <toolbar-item type="button" text="Action" overflow="always"></toolbar-item>
            <toolbar-item type="button" text="Another Action" overflow="always"></toolbar-item>
            <toolbar-item type="button" text="Something else here" overflow="always"></toolbar-item>
        </toolbar>
    </window>
</div>
</template>

<script>
import {Button, ToolBar, ToolBarItem} from '@progress/kendo-buttons-vue-wrapper';
import { Window } from '@progress/kendo-window-vue-wrapper';

export default {
    name: 'App',
    components: {
        'toolbar': ToolBar,
        'toolbar-item': ToolBarItem,
        'k-button': Button,
        'window': Window
    },
    mounted: function() {
        kendo.jQuery("#contacts").kendoDropDownList({
            optionLabel: "Ann Devon",
            dataTextField: "text",
            dataValueField: "value",
            dataSource: [
                { text: "Ana Trujillo", value: 1 },
                { text: "Antonio Moreno", value: 2 },
                { text: "Christina Berglund", value: 3 },
                { text: "Felipe Izquierdo", value: 4 }
            ]
        });
        kendo.jQuery('#labels').kendoDropDownList({
            optionLabel: "Forums",
            dataTextField: "text",
            dataValueField: "value",
            dataSource: [
                { text: "Follow up", value: 1 },
                { text: "Misc", value: 2 },
                { text: "Priority", value: 3 },
                { text: "Deleted Messages", value: 4 }
            ]
        })
    },
    methods: {
        onClick (e) {
            var window = this.$refs.windowRef.kendoWidget();
            window.center().open();
        },
        onWindowClose (e){
            var button = this.$refs.buttonRef.kendoWidget();
            button.element.show();       
        },
        onWindowOpen (e){
            e.sender.center()
            var button = this.$refs.buttonRef.kendoWidget();        
            button.element.hide();      
        }
    }
}
</script>
