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
      :items="items"
      :header="'header'"
      @close="handleClose"
      @itemselect="handleItemSelect"
    >
      <template v-slot:header>
        <span class="custom-header">
          {{ title }} <span class="k-icon k-i-hyperlink-open"></span>
        </span>
      </template>
    </ActionSheet>
  </div>
</template>
<script>
import { ActionSheet, Avatar } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';
import {
  heartIcon,
  cancelIcon,
  pencilIcon,
  uploadIcon,
} from '@progress/kendo-svg-icons';
const items = [
  {
    title: 'Edit Item',
    svgIcon: pencilIcon,
    description: 'Click to edit',
  },
  {
    title: 'Add to Favorites',
    svgIcon: heartIcon,
  },
  {
    title: 'Upload New',
    svgIcon: uploadIcon,
    disabled: true,
  },
  {
    title: 'Cancel',
    svgIcon: cancelIcon,
  },
];

export default {
  components: {
    ActionSheet,
    Avatar,
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
    cancel() {
      this.open = false;
    },
  },
};
</script>
