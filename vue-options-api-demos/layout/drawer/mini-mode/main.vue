<template>
  <div class="border-demo">
    <Drawer
      :expanded="expanded"
      :position="'start'"
      :mode="'push'"
      :mini="true"
      :items="
        items.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))
      "
      @select="handleSelect"
    >
      <DrawerContent>
        <kbutton @click="handleClick"> Toggle the drawer state </kbutton>
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import {
  inboxIcon,
  bellIcon,
  calendarIcon,
  envelopLinkIcon,
  starOutlineIcon,
} from "@progress/kendo-svg-icons";

export default {
  components: {
    Drawer,
    DrawerContent,
    kbutton: Button,
  },
  created() {
    this.selectedId = this.items.findIndex((x) => x.selected === true);
  },
  data() {
    return {
      items: [
        {
          text: "Inbox",
          svgIcon: inboxIcon,
          selected: true,
        },
        {
          separator: true,
        },
        {
          text: "Notifications",
          svgIcon: bellIcon,
        },
        {
          text: "Calendar",
          svgIcon: calendarIcon,
        },
        {
          separator: true,
        },
        {
          text: "Attachments",
          svgIcon: envelopLinkIcon,
        },
        {
          text: "Favourites",
          svgIcon: starOutlineIcon,
        },
      ],
      expanded: true,
      selectedId: null,
    };
  },
  methods: {
    handleClick() {
      this.expanded = !this.expanded;
    },
    handleSelect(ev) {
      this.selectedId = ev.itemIndex;
      this.expanded = false;
    },
  },
};
</script>
<style>
my-app {
  padding: 0 !important;
}
.k-drawer-content {
  padding: 20px;
}
.k-drawer-container {
  position: fixed;
  width: 100%;
  height: 100%;
}
.k-drawer-item {
  user-select: none;
}
</style>
