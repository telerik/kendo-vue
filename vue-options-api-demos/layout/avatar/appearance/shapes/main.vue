<template>
  <div>
    <div style="display: flex; justify-content: space-evenly">
      <Avatar :type="'image'" :size="'large'">
        <img :src="avatarImage" style="width: 64px; height: 64px" />
      </Avatar>
      <Avatar :type="'text'" :size="'large'">
        <span>JS</span>
      </Avatar>
      <Avatar :type="'icon'" :size="'large'">
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
  data: function () {
    return {
      userIcon,
      avatarImage,
    };
  },
};
</script>
