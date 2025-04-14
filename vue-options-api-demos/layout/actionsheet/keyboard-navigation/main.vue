<template>
  <div>
    <KButton :id="'openActionSheetBttn'" @click="openHandler">
      OPEN ACTION SHEET
    </KButton>
    <ActionSheet
      :expand="open"
      :items="items"
      @close="handleClose"
      @itemselect="handleItemSelect"
    >
    </ActionSheet>
  </div>
</template>
<script>
import { ActionSheet } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';
const items = [
  {
    title: 'Edit Item',
  },
  {
    title: 'Add to Favorites',
  },
  {
    title: 'Cancel',
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
