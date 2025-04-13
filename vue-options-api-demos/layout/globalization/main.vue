<template>
  <div class="border-demo">
    <AppBar :dir="'rtl'">
      <AppBarSection>
        <kbutton :svg-icon="layoutIcon" :fill-mode="'flat'" @click="handleClick" />
        <span class="title"
          >AppBar component from which the Drawer Component is controlled</span
        >
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
      :dir="'rtl'"
    >
      <DrawerContent>
        <div class="content">
          <router-view> </router-view>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { Drawer, DrawerContent } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';
import { AppBar, AppBarSection } from '@progress/kendo-vue-layout';
import {
    layoutIcon
} from "@progress/kendo-svg-icons";
import './styles.css';
import { userIcon, imageIcon, menuIcon, layoutSideBySideIcon, arrowsLeftRightIcon, layout1By4Icon, layoutStackedIcon } from '@progress/kendo-svg-icons';

export default {
    name: 'App',
    components: { Drawer, DrawerContent, kbutton: Button, AppBar, AppBarSection },
    mounted() {
        this.$router.push(this.items[0].data);
    },
    data() {
        return {
            layoutIcon,
            items: [
                {
                    text: 'Avatar',
                    svgIcon: userIcon,
                    selected: true,
                    data: {
                        path: '/layout/globalization/avatar',
                    },
                },
                {
                    separator: true,
                },
                {
                    text: 'Card',
                    svgIcon: imageIcon,
                    data: {
                        path: '/layout/globalization/card',
                    },
                },
                {
                    separator: true,
                },
                {
                    text: 'Menu',
                    svgIcon: menuIcon,
                    data: {
                        path: '/layout/globalization/menu',
                    },
                },
                {
                    separator: true,
                },
                {
                    text: 'PanelBar',
                    svgIcon: layoutSideBySideIcon,
                    data: {
                        path: '/layout/globalization/panelbar',
                    },
                },
                {
                    separator: true,
                },
                {
                    text: 'Splitter',
                    svgIcon: arrowsLeftRightIcon,
                    data: {
                        path: '/layout/globalization/splitter',
                    },
                },
                {
                    separator: true,
                },
                {
                    text: 'TabStrip',
                    svgIcon: layoutStackedIcon,
                    data: {
                        path: '/layout/globalization/tabstrip',
                    },
                },
                {
                    separator: true,
                },
                {
                    text: 'TileLayout',
                    svgIcon: layout1By4Icon,
                    data: {
                        path: '/layout/globalization/TileLayout',
                    },
                },
                {
                    separator: true,
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

<style>
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
