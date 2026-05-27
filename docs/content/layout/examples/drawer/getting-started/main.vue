<template>
  <div class="border-demo">
    <div class="custom-toolbar">
      <KButton :svg-icon="menuIcon" fill-mode="flat" @click="handleClick" />
      <span class="title">Mail Box</span>
    </div>
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      mini
      :items="items.map((item, index) => ({
        ...item,
        selected: index === selectedId,
      }))"
      @select="onSelect"
    >
      <DrawerContent>
        <router-view />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import {
    menuIcon,
    inboxIcon,
    bellIcon,
    calendarIcon,
  envelopeLinkIcon,
    starIcon,
} from "@progress/kendo-svg-icons";
import { useRouter } from "vue-router";

const router = useRouter();
const expanded = ref(true);
const selectedId = ref(0);
const position = ref("start");
const mode = ref("push");

const items = [
    {
        text: "Inbox",
        svgIcon: inboxIcon,
        selected: true,
        data: { path: "/layout/drawer/overview/inbox" },
    },
    { separator: true },
    {
        text: "Notifications",
        svgIcon: bellIcon,
        data: { path: "/layout/drawer/overview/notifications" },
    },
    {
        text: "Calendar",
        svgIcon: calendarIcon,
        data: { path: "/layout/drawer/overview/calendar" },
    },
    { separator: true },
    {
        text: "Attachments",
        svgIcon: envelopeLinkIcon,
        data: { path: "/layout/drawer/overview/attachments" },
    },
    {
        text: "Favourites",
        svgIcon: starIcon,
        data: { path: "/layout/drawer/overview/favourites" },
    },
];

onMounted(() => {
    const selectedItem = items[selectedId.value];
    if (selectedItem) {
        router.push(selectedItem.data.path);
    }
});

const onSelect = (e) => {
    selectedId.value = e.itemIndex;
    router.push(items[e.itemIndex].data);
    expanded.value = !expanded.value;
};

const handleClick = () => {
    expanded.value = !expanded.value;
};
</script>

<style scoped>
@import "./styles.css";
</style>
