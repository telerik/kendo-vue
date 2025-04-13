<template>
  <div class="border-demo">
    <div class="custom-toolbar">
      <kbutton :svg-icon="menuIcon" :fill-mode="'flat'" @click="handleClick" />
      <span class="title">Navigational drawer</span>
    </div>
    <Drawer
      :expanded="expanded"
      :position="position"
      :mode="mode"
      :items="
        items.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))
      "
      @select="onSelect"
    >
      <DrawerContent>
        <router-view />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import { menuIcon } from "@progress/kendo-svg-icons";

export default {
  components: { Drawer, DrawerContent, "kbutton": Button },
  mounted() {
    this.$router.push(this.items[0].data);
  },
  data() {
    return {
      menuIcon,
      items: [
        {
          text: "Home",
          selected: true,
          data: {
            path: "/layout/drawer/routing/home",
          },
        },
        {
          text: "Products",
          data: {
            path: "/layout/drawer/routing/products",
          },
        },
        {
          text: "About",
          data: {
            path: "/layout/drawer/routing/about",
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

<style></style>
