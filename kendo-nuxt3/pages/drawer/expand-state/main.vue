<template>
  <Drawer
      :expanded="expanded"
      :position="'start'"
      :mode="'push'"
      @select="handleSelect"
      :items="items.map((item, index) => ({
        ...item,
        selected: index === selectedId,
      }))"
    >
      <DrawerContent>
        <button class="k-button" @click="handleClick">
          Toggle the drawer state
        </button>
      </DrawerContent>
    </Drawer>
</template>

<script>

import {
 Drawer, DrawerContent, DrawerNavigation
    } from '@progress/kendo-vue-layout';

export default {
    components: {
       Drawer, DrawerContent, DrawerNavigation,
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
            text: "Calendar",
            icon: "k-i-calendar",
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
        selectedId: null
      };
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

