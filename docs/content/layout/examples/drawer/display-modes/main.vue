<template>
  <div>
    <Drawer
      :expanded="expanded"
      position="start"
      :mode="expandMode"
      :animation="{ duration: 400 }"
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
            <label for="expandedSwitch">Switch Drawer expand mode &nbsp;</label>
            <Checkbox
              :checked="mode"
              @change="handleChange"
              id="expandedSwitch"
            />
          </div>
          <div class="k-form-field">
            <p>Current drawer mode is <b>{{ expandMode }}</b></p>
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
const mode = ref(true);

const expandMode = computed(() => (mode.value ? "overlay" : "push"));

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
    mode.value = !mode.value;
};

const handleSelect = (ev) => {
    selectedId.value = ev.itemIndex;
    expanded.value = false;
};
</script>

<style scoped>
#root {
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
