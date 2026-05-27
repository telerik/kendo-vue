<template>
  <div class="border-demo">
    <div class="custom-toolbar">
      <KButton :svg-icon="menuIconRef" fill-mode="flat" @click="handleClick" />
      <span class="title">Drawer Events Demo</span>
    </div>
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :items="items.map((item, index) => ({
        ...item,
        selected: index === selectedId,
      }))"
      @select="handleSelect"
    >
      <DrawerContent>
        <Logger title="Events list" :events="events" />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import {
    menuIcon,
    inboxIcon,
    calendarIcon,
  envelopeLinkIcon,
    starIcon,
} from "@progress/kendo-svg-icons";
import Logger from "./Logger.vue";

const menuIconRef = menuIcon;
const expanded = ref(true);
const selectedId = ref(0);
const position = ref("start");
const mode = ref("push");
const events = ref([]);

const items = [
    { text: "Inbox", icon: "inbox", svgIcon: inboxIcon, selected: true },
    { text: "Calendar", icon: "calendar", svgIcon: calendarIcon },
    { text: "Attachments", icon: "hyperlink-email", svgIcon: envelopeLinkIcon },
    { text: "Favourites", icon: "star", svgIcon: starIcon },
];

const handleSelect = (e) => {
    events.value.unshift(`Drawer Item '${e.itemTarget.props.text}' was clicked`);
    selectedId.value = e.itemIndex;
};

const handleClick = () => {
    expanded.value = !expanded.value;
};
</script>
