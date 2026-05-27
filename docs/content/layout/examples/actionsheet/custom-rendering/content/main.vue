<template>
  <div>
    <KButton id="openActionSheetBttn" @click="openHandler">
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
      <template #content>
        <Avatar
          type="image"
          size="large"
          rounded="full"
          style="width: 128px; height: 128px"
        >
          <img :src="avatarUrl" />
        </Avatar>
      </template>
    </ActionSheet>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ActionSheet, Avatar } from "@progress/kendo-vue-layout";
import { Button as KButton } from "@progress/kendo-vue-buttons";

const avatarUrl =
  (import.meta.env.VITE_VUE_DEMOS_BASE_URL || "/") +
  "assets/layout/stacklayout/avatar2.webp";

const title = "My profile";
const subTitle = "Kendo UI for Vue Native";
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

<style>
.k-actionsheet-content {
  text-align-last: center;
  padding: 20px;
}
</style>
