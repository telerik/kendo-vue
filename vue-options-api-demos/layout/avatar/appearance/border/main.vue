<template>
  <div>
    <h5>Avatar Border</h5>
    <div :style="{ display: 'flex', justifyContent: 'space-evenly' }">
      <Avatar
        :type="'image'"
        :size="'large'"
        :rounded="'full'"
        :border="true"
        :fill-mode="'outline'"
        ><img
          :src="avatarImage"
          :style="{ width: 64, height: 64 }"
          :alt="'Avatar Image'"
      /></Avatar>
      <Avatar
        :type="'text'"
        :size="'large'"
        :rounded="'full'"
        :border="true"
        :fill-mode="'outline'"
        ><span>JS</span></Avatar
      >
      <Avatar
        :type="'icon'"
        :size="'large'"
        :rounded="'full'"
        :border="true"
        :fill-mode="'outline'"
      >
        <SvgIcon :icon="userIcon" />
      </Avatar>
    </div>
  </div>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";
import { SvgIcon } from "@progress/kendo-vue-common";
import { userIcon } from "@progress/kendo-svg-icons";

const avatarImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/RICSU.jpg';

export default {
  components: {
    Avatar,
    SvgIcon,
  },
  data() {
    return {
      userIcon,
      avatarImage
    };
  },
};
</script>
