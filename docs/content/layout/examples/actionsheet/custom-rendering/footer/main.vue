<template>
  <div>
    <KButton id="openActionSheetBttn" @click="openHandler">
      OPEN ACTION SHEET
    </KButton>
    <ActionSheet
      :expand="open"
      :items="items"
      :title="title"
      :sub-title="subTitle"
      :footer="'footer'"
      @close="handleClose"
      @itemselect="handleItemSelect"
    >
      <template #footer>
        <KButton
          :style="{ width: '100%' }"
          fillMode="flat"
          themeColor="primary"
          :svgIcon="cancelIcon"
          @click="cancel"
        >
          Cancel
        </KButton>
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
    { title: "Upload New", svgIcon: uploadIcon, disabled: true, group: "top" },
];

const title = "Select an item";
const subTitle = "Choose an action";
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

function cancel() {
    open.value = false;
}
</script>
