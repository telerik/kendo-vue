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
    <br />
    <br />
    <Logger :title="'Events list'" :events="eventsList" />
  </div>
</template>

<script>
import { ActionSheet } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';
import Logger from './Logger.vue';

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
  ,
];

export default {
  components: {
    Logger,
    ActionSheet,
    KButton: Button,
  },
  computed: {
    eventsList() {
      return this.events;
    },
  },
  data: function () {
    return {
      events: [],
      items,
      open: false,
    };
  },
  methods: {
    openHandler() {
      this.open = true;
      this.events.unshift('ActionSheet was opened');
    },
    handleClose() {
      this.open = false;
      this.events.unshift('ActionSheet was closed');
    },
    handleItemSelect(e) {
      this.open = false;
      this.events.unshift("ActionSheet Item '" + e.title + "' was selected");
    },
  },
};
</script>
