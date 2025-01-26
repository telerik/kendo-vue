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
</template>

<script>
import {ToolBar, ToolBarItem} from '@progress/kendo-buttons-vue-wrapper';

export default {
  name: 'App',
  components: {
    'toolbar': ToolBar,
    'toolbar-item': ToolBarItem
  }
}
</script>
