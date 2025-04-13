<template>
  <div class="border-demo">
    <div class="custom-toolbar">
      <kbutton :svg-icon="menuIcon" :fill-mode="'flat'" @click="handleClick" />
      <span class="title">Mail Box</span>
    </div>
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
        <router-view />
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import { menuIcon } from "@progress/kendo-svg-icons";
import {
    inboxIcon,
    bellIcon,
    calendarIcon,
    envelopLinkIcon,
    starOutlineIcon,
} from "@progress/kendo-svg-icons";

export default {
    name: "App",
    components: { Drawer, DrawerContent, kbutton: Button },
    mounted() {
        this.$router.push(this.items[0].data);
    },
    data() {
        return {
            menuIcon,
            items: [
                {
                    text: "Inbox",
                    svgIcon: inboxIcon,
                    selected: true,
                    data: {
                        path: "/layout/drawer/overview/inbox",
                    },
                },
                {
                    separator: true,
                },
                {
                    text: "Notifications",
                    svgIcon: bellIcon,
                    data: {
                        path: "/layout/drawer/overview/notifications",
                    },
                },
                {
                    text: "Calendar",
                    svgIcon: calendarIcon,
                    data: {
                        path: "/layout/drawer/overview/calendar",
                    },
                },
                {
                    separator: true,
                },
                {
                    text: "Attachments",
                    svgIcon: envelopLinkIcon,
                    icon: "hyperlink-email",
                    data: {
                        path: "/layout/drawer/overview/attachments",
                    },
                },
                {
                    text: "Favourites",
                    svgIcon: starOutlineIcon,
                    data: {
                        path: "/layout/drawer/overview/favourites",
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
            this.expanded = !this.expanded;
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
