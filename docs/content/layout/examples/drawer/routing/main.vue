<template>
  <div class="border-demo">
    <div class="custom-toolbar">
      <KButton :svg-icon="menuIcon" fill-mode="flat" @click="handleClick" />
      <span class="title">Navigational drawer</span>
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
import { menuIcon } from "@progress/kendo-svg-icons";
import { useRouter } from "vue-router";

const router = useRouter();
const expanded = ref(true);
const selectedId = ref(0);
const position = ref("start");
const mode = ref("push");

const items = [
    {
        text: "Home",
        selected: true,
        data: { path: "/layout/drawer/routing/home" },
    },
    {
        text: "Products",
        data: { path: "/layout/drawer/routing/products" },
    },
    {
        text: "About",
        data: { path: "/layout/drawer/routing/about" },
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
};

const handleClick = () => {
    expanded.value = !expanded.value;
};
</script>
