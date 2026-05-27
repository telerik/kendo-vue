<template>
  <div class="border-demo">
    <Drawer
      :expanded="expanded"
      :position="positionMode"
      mode="push"
      :items="items.map((item, index) => ({
        ...item,
        selected: index === selectedId,
      }))"
      @overlayclick="handleClick"
      @select="handleSelect"
    >
      <DrawerContent>
        <div class="k-form">
          <div class="k-form-field">
            <KButton @click="handleClick">Toggle the Drawer state</KButton>
          </div>
          <div class="k-form-field">
            <label for="expandedSwitch">Switch Drawer position &nbsp;</label>
            <Checkbox
              :checked="position"
              @change="handleChange"
              id="expandedSwitch"
            />
          </div>
          <div class="k-form-field">
            <p>Current drawer mode is <b>{{ positionMode }}</b></p>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Drawer, DrawerContent } from "@progress/kendo-vue-layout";
import { Checkbox } from "@progress/kendo-vue-inputs";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import {
    inboxIcon,
    bellIcon,
    calendarIcon,
  envelopeLinkIcon,
    starIcon,
} from "@progress/kendo-svg-icons";

const expanded = ref(true);
const selectedId = ref(null);
const position = ref(true);

const positionMode = computed(() => (position.value ? "start" : "end"));

const items = [
    { text: "Inbox", svgIcon: inboxIcon, selected: true },
    { separator: true },
    { text: "Notifications", svgIcon: bellIcon },
    { text: "Calendar", svgIcon: calendarIcon },
    { separator: true },
    { text: "Attachments", svgIcon: envelopeLinkIcon },
    { text: "Favourites", svgIcon: starIcon },
];

const handleClick = () => {
    expanded.value = !expanded.value;
};

const handleChange = () => {
    position.value = !position.value;
};

const handleSelect = (ev) => {
    selectedId.value = ev.itemIndex;
    expanded.value = false;
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
