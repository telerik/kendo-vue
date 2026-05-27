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
    { title: "Add to Cart", class: "custom-font" },
    {
        title: "Add to Favorites",
        style: { textDecoration: "underline", color: "#fe7f76" },
    },
    { title: "Cancel", group: "bottom" },
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

<style>
.custom-font {
  color: #1174ab;
  font-weight: bold;
}
</style>
