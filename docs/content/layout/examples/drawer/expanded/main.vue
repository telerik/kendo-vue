<template>
  <div class="border-demo">
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
    calendarIcon,
  envelopeLinkIcon,
    starIcon,
} from "@progress/kendo-svg-icons";

const expanded = ref(true);
const selectedId = ref(0);
const position = ref("start");
const mode = ref("push");

const items = [
    { text: "Inbox", svgIcon: inboxIcon, selected: true },
    { text: "Calendar", svgIcon: calendarIcon },
    { text: "Attachments", svgIcon: envelopeLinkIcon },
    { text: "Favourites", svgIcon: starIcon },
];

const handleClick = () => {
    expanded.value = !expanded.value;
};

const handleSelect = (e) => {
    selectedId.value = e.itemIndex;
};
</script>
