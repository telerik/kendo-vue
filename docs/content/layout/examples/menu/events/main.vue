<template>
  <div>
    <kendo-menu :items="items" @select="onMenuSelect" />
    <br />
    <br />
    <Logger :title="'Events list'" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Menu as KendoMenu } from "@progress/kendo-vue-layout";
import Logger from "./Logger.vue";

const events = ref([]);
const items = ref([
    { text: "First item" },
    {
        text: "Second item",
        items: [{ text: "Second item child item" }],
    },
]);

const onMenuSelect = (e) => {
    events.value.unshift(`Menu Item '${e.item.text}' was selected`);
};
</script>

