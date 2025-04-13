<template>
  <div>
    <KButton
      :id="'openActionSheetBttn'"
      @click="openHandler"
    >
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
import { ActionSheet } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';
const items = [
  {
    title: 'Add to Cart',
    class: 'custom-font',
  },
  {
    title: 'Add to Favorites',
    style: {
      textDecoration: 'underline',
      color: '#fe7f76',
    },
  },
  {
    title: 'Cancel',
    group: 'bottom',
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
      title: 'Select an item',
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
<style>
.custom-font {
  color: #1174ab;
  font-weight: bold;
}
</style>
