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
      :items="items.map((item, index) => ({
        ...item,
        selected: index === selectedId,
      }))"
      @select="onSelect"
      navigation-header="headerTemplate"
      navigation-footer="footerTemplate"
    >
      <template #headerTemplate>
        <div class="custom-header">Header Content</div>
      </template>
      <template #footerTemplate>
        <div class="custom-footer">Footer Content</div>
      </template>
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
import { menuIcon } from "@progress/kendo-svg-icons";
import { useRouter } from "vue-router";

const router = useRouter();
const expanded = ref(false);
const selectedId = ref(0);
const position = ref("start");
const mode = ref("push");

onMounted(() => {
    expanded.value = true;
    const selectedItem = items[selectedId.value];
    if (selectedItem) {
        router.push(selectedItem.data.path);
    }
});

const items = [
    {
        text: "Inbox",
        selected: true,
        data: { path: "/layout/drawer/templates/header-footer/inbox" },
    },
    { separator: true },
    {
        text: "Notifications",
        data: { path: "/layout/drawer/templates/header-footer/notifications" },
    },
    {
        text: "Calendar",
        data: { path: "/layout/drawer/templates/header-footer/calendar" },
    },
    { separator: true },
    {
        text: "Attachments",
        data: { path: "/layout/drawer/templates/header-footer/attachments" },
    },
    {
        text: "Favourites",
        data: { path: "/layout/drawer/templates/header-footer/favourites" },
    },
];

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
