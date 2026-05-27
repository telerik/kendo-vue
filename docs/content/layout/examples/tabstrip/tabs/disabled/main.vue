<template>
  <TabStrip :selected="selected" @select="onSelect" :tabs="tabs">
    <template #TabOne>
      <p>Tab 1 Content</p>
    </template>
    <template #TabTwo>
      <p>Tab 2 Content</p>
    </template>
    <template #TabThree>
      <p>Tab 3 Content</p>
    </template>
  </TabStrip>
</template>

<script setup>
import { ref } from "vue";
import { TabStrip } from "@progress/kendo-vue-layout";

const selected = ref(0);
const tabs = ref([
    { title: "Tab 1 Title", content: "TabOne" },
    { title: "Tab 2 Title", content: "TabTwo" },
    { title: "Tab 3 Title", content: "TabThree", disabled: true },
]);

const onSelect = (e) => {
    selected.value = e.selected;
};
</script>
