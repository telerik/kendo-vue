<template>
  <div class="border-demo">
    <Drawer
      :expanded="expanded"
      position="start"
      mode="push"
      mini
      :items="items.map((item, index) => ({
        ...item,
        selected: index === selectedId,
      }))"
      @select="handleSelect"
    >
      <DrawerContent>
        <KButton @click="handleClick">Toggle the drawer state</KButton>
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import {
    inboxIcon,
    bellIcon,
    calendarIcon,
  envelopeLinkIcon,
    starIcon,
} from "@progress/kendo-svg-icons";

const expanded = ref(true);
const selectedId = ref(null);

const items = [
    { text: "Inbox", svgIcon: inboxIcon, selected: true },
    { separator: true },
    { text: "Notifications", svgIcon: bellIcon },
    { text: "Calendar", svgIcon: calendarIcon },
    { separator: true },
    { text: "Attachments", svgIcon: envelopeLinkIcon },
    { text: "Favourites", svgIcon: starIcon },
];

const handleClick = () => {
    expanded.value = !expanded.value;
};

const handleSelect = (ev) => {
    selectedId.value = ev.itemIndex;
    expanded.value = false;
};
</script>

<style>
my-app {
  padding: 0 !important;
}
.k-drawer-content {
  padding: 20px;
}
.k-drawer-container {
  position: fixed;
  width: 100%;
  height: 100%;
}
.k-drawer-item {
  user-select: none;
}
</style>
