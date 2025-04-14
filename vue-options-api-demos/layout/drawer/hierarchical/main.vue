<template>
  <div class="border-demo">
    <div class="custom-toolbar">
      <kbutton :svg-icon="menuIcon" :fill-mode="'flat'" @click="handleClick" />
      <span class="title">Categories</span>
    </div>
    <Drawer
      :animation="false"
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :mini="true"
      :width="175"
      :items="dataItems"
      :item="'CustomItem'"
      @select="onSelect"
    >
      <template v-slot:CustomItem="{ props }">
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

<script>
import { Drawer, DrawerContent, DrawerItem } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
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

export default {
    name: "App",
    components: { Drawer, DrawerItem, DrawerContent, kbutton: Button, SvgIcon },
    mounted() {
        this.$router.push(this.items[0].data);
    },
    computed: {
        dataItems() {
            const newItems = this.items.map((item) => {
                const { parentId, ...others } = item;
                if (parentId !== undefined) {
                    const parent = this.items.find((parent) => parent.id === parentId);
                    return { ...others, visible: parent["data-expanded"] };
                }
                return item;
            });
            return newItems;
        },
    },
    data() {
        return {
            menuIcon,
            chevronRightIcon,
            chevronDownIcon,
            items: [
                {
                    text: "Education",
                    svgIcon: pencilIcon,
                    id: 1,
                    selected: true,
                    data: {
                        path: "/layout/drawer/hierarchical/education",
                    },
                },
                {
                    separator: true,
                },
                {
                    text: "Food",
                    svgIcon: heartIcon,
                    id: 2,
                    ["data-expanded"]: true,
                    data: {
                        path: "/layout/drawer/hierarchical/food",
                    },
                },
                {
                    text: "Japanese Food",
                    svgIcon: minusIcon,
                    id: 4,
                    parentId: 2,
                    data: {
                        path: "/layout/drawer/hierarchical/food/japanese",
                    },
                },
                {
                    text: "Italian Food",
                    svgIcon: minusIcon,
                    id: 5,
                    parentId: 2,
                    data: {
                        path: "/layout/drawer/hierarchical/food/italian",
                    },
                },
                {
                    separator: true,
                },
                {
                    text: "Travel",
                    svgIcon: globeIcon,
                    ["data-expanded"]: true,
                    id: 3,
                    data: {
                        path: "/layout/drawer/hierarchical/travel",
                    },
                },
                {
                    text: "Europe",
                    svgIcon: minusIcon,
                    id: 6,
                    parentId: 3,
                    data: {
                        path: "/layout/drawer/hierarchical/travel/europe",
                    },
                },
                {
                    text: "North America",
                    svgIcon: minusIcon,
                    id: 7,
                    parentId: 3,
                    data: {
                        path: "/layout/drawer/hierarchical/travel/america",
                    },
                },
            ],
            expanded: true,
            position: "start",
            mode: "push",
        };
    },
    methods: {
        onSelect(ev) {
            const currentItem = ev.itemTarget.props;
            const isParent = currentItem["data-expanded"] !== undefined;
            const nextExpanded = !currentItem["data-expanded"];
            const newData = this.items.map((item) => {
                const {
                    selected,
                    ["data-expanded"]: currentExpanded,
                    id,
                    ...others
                } = item;
                const isCurrentItem = currentItem.id === id;
                return {
                    selected: isCurrentItem,
                    ["data-expanded"]:
            isCurrentItem && isParent ? nextExpanded : currentExpanded,
                    id,
                    ...others,
                };
            });
            this.$router.push(this.items[ev.itemIndex].data);

            this.items = newData;
        },
        handleClick() {
            this.expanded = !this.expanded;
        },
    },
};
</script>

<style scoped>
@import "./styles.css";
</style>
