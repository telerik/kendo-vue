<template>
  <div>
    <KButton id="openActionSheetBttn" @click="openHandler">
      OPEN ACTION SHEET
    </KButton>
    <ActionSheet
      :expand="open"
      :items="items"
      :header="'header'"
      @close="handleClose"
      @itemselect="handleItemSelect"
    >
      <template #header>
        <span class="custom-header">
          {{ title }} <span class="k-icon k-i-hyperlink-open"></span>
        </span>
      </template>
    </ActionSheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ActionSheet } from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { pencilIcon, heartIcon, uploadIcon, cancelIcon } from "@progress/kendo-svg-icons";

const items = [
    { title: "Edit Item", svgIcon: pencilIcon, description: "Click to edit" },
    { title: "Add to Favorites", svgIcon: heartIcon },
    { title: "Upload New", svgIcon: uploadIcon, disabled: true },
    { title: "Cancel", svgIcon: cancelIcon },
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
