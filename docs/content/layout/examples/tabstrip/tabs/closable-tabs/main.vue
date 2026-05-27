<template>
  <TabStrip :selected="selected" @select="onSelect" :tabs="tabs">
    <template #Paris>
      Paris is the capital and most populous city of France.
    </template>
    <template #titleRender="{ props }">
      <Title :content="props.title" @tabRemove="(e) => onTabRemove(e)" />
    </template>
    <template #NewYork>
      The City of New York, often called New York City or simply New York, is
      the most populous city in the United States.
    </template>
    <template #Tallin>
      Tallinn is the capital and largest city of Estonia.
    </template>
  </TabStrip>
</template>

<script setup>
import { ref } from "vue";
import { TabStrip } from "@progress/kendo-vue-layout";
import Title from "./Title.vue";

const selected = ref(0);
const tabs = ref([
    { title: "Paris", content: "Paris", titleRender: "titleRender" },
    { title: "New York City", content: "NewYork", titleRender: "titleRender" },
    { title: "Tallinn", content: "Tallin", titleRender: "titleRender" },
]);

const onSelect = (e) => {
    selected.value = e.selected;
};

const onTabRemove = (tab) => {
    tabs.value = tabs.value.filter((item) => item.title !== tab);
};
</script>
