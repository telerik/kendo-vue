<template>
  <div class="border-demo">
    <div class="custom-toolbar">
      <kbutton :svg-icon="menuIcon" :fill-mode="'flat'" @click="handleClick" />
      <span class="title">Drawer Events Demo</span>
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
      @select="handleSelect"
    >
      <DrawerContent>
        <Logger :title="'Events list'" :events="eventsList" />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import {
  menuIcon,
  inboxIcon,
  calendarIcon,
  envelopLinkIcon,
  starOutlineIcon,
} from "@progress/kendo-svg-icons";
import Logger from "./Logger.vue";
import "./styles.css";

export default {
  components: {
    Drawer,
    DrawerContent,
    Logger,
    kbutton: Button,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data() {
    return {
      menuIcon,
      events: [],
      items: [
        {
          text: "Inbox",
          icon: "inbox",
          svgIcon: inboxIcon,
          selected: true,
        },
        {
          text: "Calendar",
          icon: "calendar",
          svgIcon: calendarIcon,
        },
        {
          text: "Attachments",
          icon: "hyperlink-email",
          svgIcon: envelopLinkIcon,
        },
        {
          text: "Favourites",
          icon: "star-outline",
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
    handleSelect(e) {
      this.events.unshift(
        "Drawer Item '" + e.itemTarget.props.text + "' was clicked"
      );
      this.selectedId = e.itemIndex;
    },
    handleClick() {
      this.expanded = !this.expanded;
    },
  },
};
</script>
