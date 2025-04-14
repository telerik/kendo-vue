<template>
  <div class="border-demo">
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
  calendarIcon,
  envelopLinkIcon,
  starOutlineIcon,
} from "@progress/kendo-svg-icons";
import "./styles.css";

export default {
  name: "App",
  components: { Drawer, DrawerContent, kbutton: Button },
  data() {
    return {
      items: [
        {
          text: "Inbox",
          svgIcon: inboxIcon,
          selected: true,
        },
        {
          text: "Calendar",
          svgIcon: calendarIcon,
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
      selectedId: 0,
      position: "start",
      mode: "push",
    };
  },
  methods: {
    handleClick(e) {
      this.expanded = !this.expanded;
    },
    handleSelect(e) {
      this.selectedId = e.itemIndex;
    },
  },
};
</script>

<style></style>
