<template>
  <div>
    <KButton id="openActionSheetBttn" @click="openHandler">
      OPEN ACTION SHEET
    </KButton>
    <ActionSheet
      :expand="open"
      :title="title"
      :items="items"
      @close="handleClose"
      @itemselect="handleItemSelect"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ActionSheet } from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const items = [
    { title: "Edit Item", description: "Click to edit" },
    { title: "Add to Favorites" },
    { title: "Upload new", description: "Max size 50MB" },
];

const title = "Select an item";
const open = ref(false);

function openHandler() {
    open.value = true;
}

function handleClose() {
    open.value = false;
}

function handleItemSelect() {
    open.value = false;
}
</script>
