<template>
  <div class="border-demo">
    <AppBar dir="rtl">
      <AppBarSection>
        <KButton :svg-icon="layoutIcon" fill-mode="flat" @click="handleClick" />
        <span class="title">
          AppBar component from which the Drawer Component is controlled
        </span>
      </AppBarSection>
    </AppBar>
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :mini="true"
      :items="drawerItems"
      @select="onSelect"
      dir="rtl"
    >
      <DrawerContent>
        <div class="content">
          <router-view />
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Drawer, DrawerContent } from '@progress/kendo-vue-layout';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { AppBar, AppBarSection } from '@progress/kendo-vue-layout';
import {
    layoutIcon,
    userIcon,
    imageIcon,
    menuIcon,
    layoutSideBySideIcon,
    arrowsLeftRightIcon,
    layout1By4Icon,
    layoutStackedIcon,
} from '@progress/kendo-svg-icons';

const router = useRouter();

const expanded = ref(true);
const selectedId = ref(0);
const position = ref('start');
const mode = ref('push');
const items = [
    { text: 'Avatar', svgIcon: userIcon, data: { path: '/layout/globalization/avatar' } },
    { separator: true },
    { text: 'Card', svgIcon: imageIcon, data: { path: '/layout/globalization/card' } },
    { separator: true },
    { text: 'Menu', svgIcon: menuIcon, data: { path: '/layout/globalization/menu' } },
    { separator: true },
    { text: 'PanelBar', svgIcon: layoutSideBySideIcon, data: { path: '/layout/globalization/panelbar' } },
    { separator: true },
    { text: 'Splitter', svgIcon: arrowsLeftRightIcon, data: { path: '/layout/globalization/splitter' } },
    { separator: true },
    { text: 'TabStrip', svgIcon: layoutStackedIcon, data: { path: '/layout/globalization/tabstrip' } },
    { separator: true },
    { text: 'TileLayout', svgIcon: layout1By4Icon, data: { path: '/layout/globalization/TileLayout' } },
    { separator: true },
];

const drawerItems = computed(()=> items.map((item, index) => ({
    ...item,
    selected: index === selectedId.value,
})));

onMounted(() => {
    const selectedItem = items[selectedId.value];
    if (selectedItem) {
        router.push(selectedItem.data.path);
    }
});

function onSelect(e) {
    selectedId.value = e.itemIndex;
    router.push(items[e.itemIndex].data.path);
}

function handleClick() {
    expanded.value = !expanded.value;
}
</script>

<style scoped>
@import './styles.css';
.header {
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}
#app {
  padding: 0px;
}
body {
  text-align: inherit;
}
</style>
