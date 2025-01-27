<template>
<div>
 <div class="col-xs-12 col-sm-12 example-col">
        <p>Button</p>
        <kendo-button @click="onButtonClick">Default</kendo-button>
        <kendo-button :disabled="true" @click="onButtonClick">Disabled</kendo-button>
    </div>

    <div class="col-xs-12 col-sm-12 example-col">
        <p>ButtonGroup</p>
        <buttongroup>
            <buttongroup-button>Option A</buttongroup-button>
            <buttongroup-button>Option B</buttongroup-button>
            <buttongroup-button>Option C</buttongroup-button>
        </buttongroup>
    </div>

    <div class="col-xs-12 col-sm-12 example-col">
        <p>ToolBar</p>
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
    </div>
</div>
</template>

<script>
import { Button, ButtonGroup, ToolBar, ToolBarItem, ButtonGroupButton } from '@progress/kendo-buttons-vue-wrapper';

export default {
  name: 'App',
  components: {
    'kendo-button': Button,
    'buttongroup': ButtonGroup,
    'buttongroup-button': ButtonGroupButton,
    'toolbar': ToolBar,
    'toolbar-item': ToolBarItem
  },
  methods: {
    onButtonClick: function (ev) {
        console.log("Button clicked!");
    }
}
}
</script>
