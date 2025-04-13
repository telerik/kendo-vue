<template>
  <div>
    <KButton :id="'openActionSheetBttn'" @click="openHandler">
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
<script>
import { ActionSheet } from "@progress/kendo-vue-layout";
import { Button } from "@progress/kendo-vue-buttons";
import { cartIcon, heartIcon, xIcon } from "@progress/kendo-svg-icons";
const items = [
  {
    title: "Add to Cart",
    svgIcon: cartIcon,
  },
  {
    title: "Add to Favorites",
    svgIcon: heartIcon,
    iconColor: "#2CAF80",
  },
  {
    title: "Cancel",
    svgIcon: xIcon,
  },
];

export default {
  components: {
    ActionSheet,
    KButton: Button,
  },
  data() {
    return {
      cartIcon,
      heartIcon,
      xIcon,
      items,
      title: "Select an item",
      open: false,
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
  },
};
</script>
