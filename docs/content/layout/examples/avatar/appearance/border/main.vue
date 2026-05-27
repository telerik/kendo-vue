<template>
  <div>
    <h5>Avatar Border</h5>
    <div style="display: flex; justify-content: space-evenly">
      <Avatar
        type="image"
        size="large"
        rounded="full"
        border
        fill-mode="outline"
      >
        <img :src="avatarImage" style="width: 64px; height: 64px" alt="Avatar Image" />
      </Avatar>
      <Avatar
        type="text"
        size="large"
        rounded="full"
        border
        fill-mode="outline"
      >
        <span>JS</span>
      </Avatar>
      <Avatar
        type="icon"
        size="large"
        rounded="full"
        border
        fill-mode="outline"
      >
        <SvgIcon :icon="userIcon" />
      </Avatar>
    </div>
  </div>
</template>

<script setup>
import { Avatar } from "@progress/kendo-vue-layout";
import { SvgIcon } from "@progress/kendo-vue-common";
import { userIcon } from "@progress/kendo-svg-icons";

const avatarImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';
</script>
