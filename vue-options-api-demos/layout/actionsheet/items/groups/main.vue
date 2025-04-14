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
import { heartIcon } from '@progress/kendo-svg-icons';
const items = [
  {
    title: 'Add to Cart',
    group: 'top',
  },
  {
    title: 'Add to Favorites',
    group: 'top',
  },
  {
    title: 'Report an Issue',
    group: 'bottom',
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
