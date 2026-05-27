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
import { cartIcon, heartIcon, xIcon } from "@progress/kendo-svg-icons";

const items = [
    { title: "Add to Cart", svgIcon: cartIcon },
    { title: "Add to Favorites", svgIcon: heartIcon, iconColor: "#2CAF80" },
    { title: "Cancel", svgIcon: xIcon },
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
