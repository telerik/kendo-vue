<template>
  <div>
    <KButton :id="'openActionSheetBttn'" @click="openHandler">
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
      <template v-slot:footer>
        <KButton
          :style="{
            width: '100%',
          }"
          :fillMode="'flat'"
          :themeColor="'primary'"
          :svgIcon="cancelIcon"
          @click="cancel"
        >
          Cancel
        </KButton>
      </template>
    </ActionSheet>
  </div>
</template>
<script>
import { ActionSheet } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import {
  cancelIcon,
  heartIcon,
  pencilIcon,
  uploadIcon,
} from "@progress/kendo-svg-icons";
const items = [
  {
    title: "Edit Item",
    svgIcon: pencilIcon,
    description: "Click to edit",
  },
  {
    title: "Add to Favorites",
    svgIcon: heartIcon,
  },
  {
    title: "Upload New",
    svgIcon: uploadIcon,
    disabled: true,
    group: "top",
  },
];

export default {
  components: {
    ActionSheet,
    KButton: Button,
  },
  data() {
    return {
      items,
      open: false,
      cancelIcon,
    };
  },
  methods: {
    openHandler() {
      this.open = true;
    },
    handleClose() {
      this.open = false;
    },
    handleItemSelect() {
      this.open = false;
    },
    cancel() {
      this.open = false;
    },
  },
};
</script>
