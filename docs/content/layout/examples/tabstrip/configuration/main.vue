<template>
  <TabStrip :selected="selected" @select="onSelect" :tabs="tabs">
    <template #Paris>
      Paris is the capital and most populous city of France.
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

const selected = ref(0);
const tabs = ref([
    { title: "Paris", content: "Paris" },
    { title: "NewYork", content: "NewYork" },
    { title: "Tallinn", content: "Tallin" },
]);

const onSelect = (e) => {
    selected.value = e.selected;
};
</script>
