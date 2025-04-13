<template>
  <div class="border-demo">
    <Drawer
      :expanded="expanded"
      :position="positionMode"
      :mode="'push'"
      :items="
        items.map((item, index) => ({
          ...item,
          selected: index === selectedId,
        }))
      "
      @overlayclick="handleClick"
      @select="handleSelect"
    >
      <DrawerContent>
        <div class="k-form">
          <div class="k-form-field">
            <kbutton @click="handleClick"> Toggle the Drawer state </kbutton>
          </div>
          <div class="k-form-field">
            <label for="expandedSwitch"> Switch Drawer position &nbsp; </label>
            <Checkbox
              :checked="position"
              @change="handleChange"
              :id="'expandedSwitch'"
            />
          </div>
          <div class="k-form-field">
            <p>
              Current drawer mode is <b>{{ positionMode }}</b>
            </p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script>
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { Checkbox } from "@progress/kendo-vue-inputs";
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
    Checkbox,
    kbutton: Button,
  },
  computed: {
    positionMode() {
      return this.position ? "start" : "end";
    },
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
      position: true,
    };
  },
  methods: {
    handleClick() {
      this.expanded = !this.expanded;
    },
    handleChange() {
      this.position = !this.position;
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
