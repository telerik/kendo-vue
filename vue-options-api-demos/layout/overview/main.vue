<template>
  <div class="border-demo">
    <AppBar>
      <AppBarSection>
        <KButton :fill-mode="'flat'" @click="handleClick">
          <SvgIcon :icon="layoutIcon" />
        </KButton>
      </AppBarSection>

      <AppBarSection>
        <h1 className="title">AppBar expanding Drawer component</h1>
      </AppBarSection>

      <AppBarSpacer />

      <AppBarSection>
        <Avatar :type="'image'">
          <img :src="kendokaAvatar" :alt="'Kendo Logo'" />
        </Avatar>
      </AppBarSection>
    </AppBar>
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :mini="true"
      :items="
        items.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))
      "
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

<script>
import {
  Avatar,
  Drawer,
  DrawerContent,
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import "./styles.css";
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
} from "@progress/kendo-svg-icons";
import { SvgIcon } from "@progress/kendo-vue-common";
let kendokaAvatar = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/suite/kendoka-vue.webp';


export default {
  name: "App",
  components: {
    Avatar,
    Drawer,
    DrawerContent,
    KButton: Button,
    AppBar,
    AppBarSection,
    AppBarSpacer,
    SvgIcon,
  },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      kendokaAvatar,
      userIcon,
      bringBackwardIcon,
      imageIcon,
      insertTopIcon,
      menuIcon,
      layoutSideBySideIcon,
      colResizeIcon,
      layoutStackedIcon,
      layoutIcon,
      items: [
        {
          text: "Avatar",
          svgIcon: userIcon,
          selected: true,
          data: {
            path: "/layout/overview/avatar",
          },
        },
        {
          separator: true,
        },
        {
          text: "BottomNavigation",
          svgIcon: moreHorizontalIcon,
          data: {
            path: "/layout/overview/bottomnavigation",
          },
        },
        {
          separator: true,
        },
        {
          text: "ContextMenu",
          svgIcon: bringBackwardIcon,
          data: {
            path: "/layout/overview/contextmenu",
          },
        },
        {
          separator: true,
        },
        {
          text: "Card",
          svgIcon: imageIcon,
          data: {
            path: "/layout/overview/card",
          },
        },
        {
          separator: true,
        },
        {
          text: "ExpansionPanel",
          svgIcon: insertTopIcon,
          data: {
            path: "/layout/overview/expansionpanel",
          },
        },
        {
          separator: true,
        },
        {
          text: "GridLayout",
          svgIcon: gridLayoutIcon,
          data: {
            path: "/layout/overview/gridlayout",
          },
        },
        {
          separator: true,
        },
        {
          text: "Menu",
          svgIcon: menuIcon,
          data: {
            path: "/layout/overview/menu",
          },
        },
        {
          separator: true,
        },
        {
          text: "PanelBar",
          svgIcon: layoutSideBySideIcon,
          data: {
            path: "/layout/overview/panelbar",
          },
        },
        {
          separator: true,
        },
        {
          text: "Splitter",
          svgIcon: colResizeIcon,
          data: {
            path: "/layout/overview/splitter",
          },
        },
        {
          separator: true,
        },
        {
          text: "StackLayout",
          svgIcon: layoutStackedIcon,
          data: {
            path: "/layout/overview/stacklayout",
          },
        },
        {
          separator: true,
        },
        {
          text: "Stepper",
          svgIcon: listOrderedIcon,
          data: {
            path: "/layout/overview/stepper",
          },
        },
        {
          separator: true,
        },
        {
          text: "TabStrip",
          svgIcon: layoutIcon,
          data: {
            path: "/layout/overview/tabstrip",
          },
        },
        {
          separator: true,
        },
        {
          text: "TileLayout",
          svgIcon: layout1By4Icon,
          data: {
            path: "/layout/overview/tilelayout",
          },
        },
        {
          separator: true,
        },
        {
          text: "Wizard",
          svgIcon: thumbnailsUpIcon,
          data: {
            path: "/layout/overview/wizard",
          },
        },
      ],
      expanded: true,
      selectedId: 0,
      position: "start",
      mode: "push",
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

<style>
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
