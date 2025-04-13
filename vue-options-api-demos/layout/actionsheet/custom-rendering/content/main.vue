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
      :sub-title="subTitle"
      :content="'content'"
      @close="handleClose"
      @itemselect="handleItemSelect"
    >
      <template v-slot:content>
        <Avatar
          :type="'image'"
          :size="'large'"
          :rounded="'full'"
          style="width: 128px; height: 128px"
        >
          <img :src="avatarUrl" />
        </Avatar>
      </template>
    </ActionSheet>
  </div>
</template>
<script>
import { ActionSheet, Avatar } from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';

const avatar2Image = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/layout/stacklayout/avatar2.webp';

export default {
  components: {
    ActionSheet,
    Avatar,
    KButton: Button,
  },
  data() {
    return {
      title: 'My profile',
      subTitle: 'Kendo UI for Vue Native',
      avatarUrl: avatar2Image,
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
<style>
.k-actionsheet-content {
  text-align-last: center;
  padding: 20px;
}
</style>
