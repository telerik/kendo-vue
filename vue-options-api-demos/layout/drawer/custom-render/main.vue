<template>
  <div class="border-demo">
    <div class="custom-toolbar">
      <kbutton :svg-icon="menuIcon" :fill-mode="'flat'" @click="handleClick" />
      <span class="title">Weather Forecast in Europe</span>
    </div>
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :mini="true"
      :width="175"
      :items="
        items.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))
      "
      :item="'CustomItem'"
      @select="onSelect"
    >
      <template v-slot:CustomItem="{ props }">
        <DrawerItem
          v-bind="props"
          @click="props.onClick"
          v-if="!props.separator"
        >
          <span class="k-svg-icon">
            <img :src="props.flag" />
          </span>
          <div class="item-descr-wrap">
            <div>{{ props.text }}</div>
            <span class="item-descr">Capital of {{ props.country }}</span>
          </div>
        </DrawerItem>
        <li
          v-else
          class="k-drawer-item k-drawer-separator"
          role="separator"
          aria-label="ariaLabelSeparator"
        />
      </template>
      <DrawerContent>
        <router-view />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { Drawer, DrawerContent, DrawerItem } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';
import { menuIcon } from '@progress/kendo-svg-icons';

const franceFlag = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/france-flag.png';
const spainFlag = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/spain-flag.png';
const italyFlag = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/italy-flag.png';
const germanyFlag = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/drawer/germany-flag.png';

export default {
  name: 'App',
  components: { Drawer, DrawerItem, DrawerContent, kbutton: Button },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      menuIcon,
      items: [
        {
          text: 'Paris',
          selected: true,
          flag: franceFlag,
          country: 'France',
          data: { path: '/layout/drawer/custom-render/paris' },
        },
        {
          separator: true,
        },
        {
          text: 'Rome',
          flag: italyFlag,
          country: 'Italy',
          data: { path: '/layout/drawer/custom-render/rome' },
        },
        {
          separator: true,
        },
        {
          text: 'Berlin',
          flag: germanyFlag,
          country: 'Germany',
          data: { path: '/layout/drawer/custom-render/berlin' },
        },
        {
          separator: true,
        },
        {
          text: 'Madrid',
          flag: spainFlag,
          country: 'Spain',
          data: { path: '/layout/drawer/custom-render/madrid' },
        },
      ],
      expanded: true,
      selectedId: 0,
      position: 'start',
      mode: 'push',
    };
  },
  methods: {
    onSelect(e) {
      this.selectedId = e.itemIndex;
      this.$router.push(this.items[e.itemIndex].data);
    },
    handleClick() {
      this.expanded = !this.expanded;
    },
  },
};
</script>

<style scoped>
@import './styles.css';
</style>
