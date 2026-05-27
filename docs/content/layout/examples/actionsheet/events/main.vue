<template>
  <div>
    <KButton id="openActionSheetBttn" @click="openHandler">
      OPEN ACTION SHEET
    </KButton>
    <ActionSheet
      :expand="open"
      :items="items"
      @close="handleClose"
      @itemselect="handleItemSelect"
    />
    <br />
    <br />
    <Logger title="Events list" :events="events" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ActionSheet } from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import Logger from "./Logger.vue";

const items = [
    { title: "Edit Item" },
    { title: "Add to Favorites" },
    { title: "Cancel" },
];

const events = ref([]);
const open = ref(false);

function openHandler() {
    open.value = true;
    events.value.unshift("ActionSheet was opened");
}

function handleClose() {
    open.value = false;
    events.value.unshift("ActionSheet was closed");
}

function handleItemSelect(e) {
    open.value = false;
    events.value.unshift(`ActionSheet Item '${e.title}' was selected`);
}
</script>
