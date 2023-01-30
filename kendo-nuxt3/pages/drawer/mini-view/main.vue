<template>
   <div>
      <Drawer
        :expanded="expanded"
        :position="'start'"
        :mode="'push'"
        :mini="true"
        :items="items.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))"
        @select="handleSelect"
      >
        <DrawerContent>
          <button class="k-button" @click="handleClick">
            Toggle the drawer state
          </button>
        </DrawerContent>
      </Drawer>
    </div>
</template>

<script>

import {
 Drawer, DrawerContent
    } from '@progress/kendo-vue-layout';

export default {
    components: {
       Drawer, DrawerContent,
    },
    created () {
      this.selectedId = this.items.findIndex((x) => x.selected === true);
    },
    data () {
      return {
        items: [
          {
            text: "Inbox",
            icon: "k-i-inbox",
            selected: true,
          },
          {
            separator: true,
          },
          {
            text: "Notifications",
            icon: "k-i-bell",
          },
          {
            text: "Calendar",
            icon: "k-i-calendar",
          },
          {
            separator: true,
          },
          {
            text: "Attachments",
            icon: "k-i-hyperlink-email",
          },
          {
            text: "Favourites",
            icon: "k-i-star-outline",
          },
        ],
        expanded: true,
        selectedId: null,
      }
    },
    methods: {
      handleClick () {
        this.expanded = !this.expanded;
      },
      handleSelect (ev) {
        this.selectedId = ev.itemIndex;
        this.expanded = false;
      }
    }
};
</script>
<style scoped>
my-app { padding: 0 !important; }

.k-drawer-content { padding: 20px; }

.k-drawer-container {
    position: fixed;
    width: 100%;
    height: 100%;
}
.k-drawer-item {
    user-select: none;
}
</style>
