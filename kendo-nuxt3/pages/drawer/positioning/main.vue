<template>
 <div>
      <Drawer
        :expanded="expanded"
        :position="positionMode"
        :mode="'push'"
        :items="items.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))"
        @overlayclick="handleClick"
        @select="handleSelect"
      >
        <DrawerContent>
          <div class="k-form">
            <div class="k-form-field">
              <button class="k-button" @click="handleClick">
                Toggle the Drawer state
              </button>
            </div>
            <div class="k-form-field">
              <label for="expandedSwitch">
                Switch Drawer expand mode &nbsp;
              </label>
              <Checkbox
                :checked="position"
                @change="handleChange"
                :id="'expandedSwitch'"
              />
            </div>
            <div class="k-form-field">
              <p>
                Current drawer mode is <b>{{positionMode}}</b>
              </p>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
</template>

<script>

import {
 Drawer, DrawerContent
    } from '@progress/kendo-vue-layout';
import { Checkbox } from "@progress/kendo-vue-inputs";


export default {
    components: {
       Drawer, DrawerContent, Checkbox,
    },
    computed: {
      positionMode (){
        return this.position ? "start" : "end";
      }
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
        position: true
      }
    },
   methods: {
      handleClick () {
        this.expanded = !this.expanded;
      },
      handleChange() {
        this.position = !this.position;
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

