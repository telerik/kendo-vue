<template>
   <Drawer :expanded="stateVisible" :position="'start'" :mode="'push'">
        <DrawerNavigation>
          <ul class="k-drawer-items">
            <li class="k-drawer-item k-state-selected">
              <span class="k-item-text">Home</span>
            </li>
            <li class="k-drawer-item">
              <span class="k-item-text">Products</span>
            </li>
            <li class="k-drawer-item">
              <span class="k-item-text">About</span>
            </li>
          </ul>
        </DrawerNavigation>
        <DrawerContent>
          <button class="k-button" @click="handleClick">Toggle the drawer state</button>
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
    data () {
      return {
        items: [
            { text: 'Inbox', icon: 'k-i-inbox', selected: true },
            { separator: true },
            { text: 'Notifications', icon: 'k-i-bell', disabled: true },
            { text: 'Calendar', icon: 'k-i-calendar' },
            { separator: true },
            { text: 'Attachments', icon: 'k-i-hyperlink-email' },
            { text: 'Favourites', icon: 'k-i-star-outline' }
        ],
        stateVisible: false
      }
    },
    methods: {
      handleClick () {
         this.stateVisible = !this.stateVisible;
      }
    }
};
</script>

