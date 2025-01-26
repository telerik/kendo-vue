<template>
<div>
    <toolbar @click="onClick"
                    @close="onClose"
                    @open="onOpen"
                    @toggle="onToggle"
                    @overflowClose="onOverflowClose"
                    @overflowOpen="onOverflowOpen">
        <toolbar-item type="button" text="Button"></toolbar-item>
        <toolbar-item type="button" text="Toggle Button" :togglable="true"></toolbar-item>
        <toolbar-item type="splitButton" text="Insert" :menu-buttons="[
            { text: 'Insert above', icon: 'insert-up' },
            { text: 'Insert between', icon: 'insert-middle' },
            { text: 'Insert below', icon: 'insert-down' }]">
        </toolbar-item>
        <toolbar-item type="button" text="Action" overflow="always"></toolbar-item>
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
  methods: {
      onClick: function (e) {
          console.log("Event :: click");
      },
      onClose: function (e) {
          console.log("Event :: close");
      },
      onOpen: function (e) {
          console.log("Event :: open");
      },
      onToggle: function (e) {
          console.log("Event :: toggle");
      },
      onOverflowClose: function (e) {
          console.log("Event :: overflow close");
      },
      onOverflowOpen: function (e) {
          console.log("Event :: overflow open");
      }
  }
}
</script>
