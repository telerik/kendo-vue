<template>
  <div class="border-demo">
    <AppBar>
      <AppBarSection>
        <KButton fill-mode="flat" @click="handleClick">
          <SvgIcon :icon="layoutIcon" />
        </KButton>
      </AppBarSection>

      <AppBarSection>
        <h1 class="title">AppBar expanding Drawer component</h1>
      </AppBarSection>

      <AppBarSpacer />

      <AppBarSection>
        <Avatar type="image" :style="{ backgroundColor: 'transparent' }">
          <img :src="kendokaAvatar" alt="Kendo Logo" />
        </Avatar>
      </AppBarSection>
    </AppBar>
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      mini
      :items="computedItems"
      @select="onSelect"
    >
      <DrawerContent>
        <div class="content-overview">
          <router-view />
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {
    Avatar,
    Drawer,
    DrawerContent,
    AppBar,
    AppBarSection,
    AppBarSpacer,
} from '@progress/kendo-vue-layout';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { SvgIcon } from '@progress/kendo-vue-common';
import {
    userIcon,
    moreHorizontalIcon,
    bringBackwardIcon,
    imageIcon,
    insertTopIcon,
    gridLayoutIcon,
    menuIcon,
    layoutSideBySideIcon,
    colResizeIcon,
    layoutStackedIcon,
    listOrderedIcon,
    layoutIcon,
    layout1By4Icon,
    thumbnailsUpIcon,
} from '@progress/kendo-svg-icons';
import './styles.css';
import { useRouter } from "vue-router";

const router = useRouter();
const kendokaAvatar = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/suite/kendoka-vue.webp';

const expanded = ref(true);
const selectedId = ref(0);
const position = ref('start');
const mode = ref('push');

const items = [
    { text: 'Avatar', svgIcon: userIcon, selected: true, data: { path: '/layout/overview/avatar' } },
    { separator: true },
    { text: 'BottomNavigation', svgIcon: moreHorizontalIcon, data: { path: '/layout/overview/bottomnavigation' } },
    { separator: true },
    { text: 'Breadcrumb', svgIcon: moreHorizontalIcon, data: { path: '/layout/overview/breadcrumb' } },
    { separator: true },
    { text: 'ContextMenu', svgIcon: bringBackwardIcon, data: { path: '/layout/overview/contextmenu' } },
    { separator: true },
    { text: 'Card', svgIcon: imageIcon, data: { path: '/layout/overview/card' } },
    { separator: true },
    { text: 'ExpansionPanel', svgIcon: insertTopIcon, data: { path: '/layout/overview/expansionpanel' } },
    { separator: true },
    { text: 'GridLayout', svgIcon: gridLayoutIcon, data: { path: '/layout/overview/gridlayout' } },
    { separator: true },
    { text: 'Menu', svgIcon: menuIcon, data: { path: '/layout/overview/menu' } },
    { separator: true },
    { text: 'PanelBar', svgIcon: layoutSideBySideIcon, data: { path: '/layout/overview/panelbar' } },
    { separator: true },
    { text: 'Splitter', svgIcon: colResizeIcon, data: { path: '/layout/overview/splitter' } },
    { separator: true },
    { text: 'StackLayout', svgIcon: layoutStackedIcon, data: { path: '/layout/overview/stacklayout' } },
    { separator: true },
    { text: 'Stepper', svgIcon: listOrderedIcon, data: { path: '/layout/overview/stepper' } },
    { separator: true },
    { text: 'TabStrip', svgIcon: layoutIcon, data: { path: '/layout/overview/tabstrip' } },
    { separator: true },
    { text: 'TileLayout', svgIcon: layout1By4Icon, data: { path: '/layout/overview/tilelayout' } },
    { separator: true },
    { text: 'Wizard', svgIcon: thumbnailsUpIcon, data: { path: '/layout/overview/wizard' } },
];

onMounted(() => {
    const selectedItem = items[selectedId.value];
    if (selectedItem) {
        router.push(selectedItem.data.path);
    }
});

const computedItems = computed(() =>
    items.map((item, index) => ({
        ...item,
        selected: index === selectedId.value,
    }))
);

function onSelect(e) {
    selectedId.value = e.itemIndex;
    router.push(items[e.itemIndex].data);
}

function handleClick() {
    expanded.value = !expanded.value;
}

</script>

<style scoped>
.info {
  font-weight: bold;
  font-size: 20px;
}

.weather {
    margin: 0 auto 30px;
    text-align: center;
}

.header {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
</style>
