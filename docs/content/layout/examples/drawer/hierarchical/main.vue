<template>
  <div class="border-demo">
    <div class="custom-toolbar">
      <KButton :svg-icon="menuIcon" fill-mode="flat" @click="handleClick" />
      <span class="title">Categories</span>
    </div>
    <Drawer
      :animation="false"
      :expanded="expanded"
      :position="position"
      :mode="mode"
      mini
      :width="175"
      :items="dataItems"
      item="CustomItem"
      @select="onSelect"
    >
      <template #CustomItem="{ props }">
        <DrawerItem
          v-if="props.visible !== false"
          v-bind="props"
          @click="props.onClick"
        >
          <span><SvgIcon :icon="props.svgIcon" /></span>
          <span class="k-item-text">{{ props.text }}</span>
          <span
            v-if="props['data-expanded'] !== undefined"
            :style="{
              position: 'absolute',
              right: '10px',
              visibility: expanded ? '' : 'hidden',
            }"
          >
            <SvgIcon
              :icon="
                props['data-expanded'] ? chevronDownIcon : chevronRightIcon
              "
            />
          </span>
        </DrawerItem>
      </template>
      <DrawerContent>
        <router-view />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Drawer, DrawerContent, DrawerItem } from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { SvgIcon } from "@progress/kendo-vue-common";
import {
    menuIcon,
    pencilIcon,
    heartIcon,
    minusIcon,
    globeIcon,
    chevronRightIcon,
    chevronDownIcon,
} from "@progress/kendo-svg-icons";
import { useRouter } from "vue-router";

const router = useRouter();
const expanded = ref(true);
const position = ref("start");
const mode = ref("push");

const items = [
    {
        text: "Education",
        svgIcon: pencilIcon,
        id: 1,
        selected: true,
        data: { path: "/layout/drawer/hierarchical/education" },
    },
    { separator: true },
    {
        text: "Food",
        svgIcon: heartIcon,
        id: 2,
        ["data-expanded"]: true,
        data: { path: "/layout/drawer/hierarchical/food" },
    },
    {
        text: "Japanese Food",
        svgIcon: minusIcon,
        id: 4,
        parentId: 2,
        data: { path: "/layout/drawer/hierarchical/food/japanese" },
    },
    {
        text: "Italian Food",
        svgIcon: minusIcon,
        id: 5,
        parentId: 2,
        data: { path: "/layout/drawer/hierarchical/food/italian" },
    },
    { separator: true },
    {
        text: "Travel",
        svgIcon: globeIcon,
        ["data-expanded"]: true,
        id: 3,
        data: { path: "/layout/drawer/hierarchical/travel" },
    },
    {
        text: "Europe",
        svgIcon: minusIcon,
        id: 6,
        parentId: 3,
        data: { path: "/layout/drawer/hierarchical/travel/europe" },
    },
    {
        text: "North America",
        svgIcon: minusIcon,
        id: 7,
        parentId: 3,
        data: { path: "/layout/drawer/hierarchical/travel/america" },
    },
];

onMounted(() => {
    const selectedItem = items.find((item) => item.selected);
    if (selectedItem) {
        router.push(selectedItem.data.path);
    }
});

const dataItems = computed(() =>
    items.map((item) => {
        const { parentId, ...others } = item;
        if (parentId !== undefined) {
            const parent = items.find((parent) => parent.id === parentId);
            return { ...others, visible: parent["data-expanded"] };
        }
        return item;
    })
);

const onSelect = (ev) => {
    const currentItem = ev.itemTarget.props;
    const isParent = currentItem["data-expanded"] !== undefined;
    const nextExpanded = !currentItem["data-expanded"];
    items.forEach((item) => {
        if (item.id === currentItem.id) {
            item.selected = true;
            if (isParent) item["data-expanded"] = nextExpanded;
        } else {
            item.selected = false;
        }
    });
    router.push(currentItem.data);
};

const handleClick = () => {
    expanded.value = !expanded.value;
};
</script>

<style scoped>
@import "./styles.css";
</style>
