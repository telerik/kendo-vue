<template>
  <div class="wrap">
    <span class="badge">
      <Avatar :rounded="'full'" :type="'image'">
        <img :src="avatarSrc" :eager="true" :alt="'Avatar Image'" />
      </Avatar>
      <Badge
        :align="{
          vertical: 'bottom',
          horizontal: 'end',
        }"
        :theme-color="'success'"
        :cutout-border="true"
      >
        <SvgIcon :icon="checkIcon" :size="'small'" />
      </Badge>
    </span>
  </div>
</template>

<script>
import { Avatar } from "@progress/kendo-vue-layout";
import { Badge } from "@progress/kendo-vue-indicators";
import { SvgIcon } from "@progress/kendo-vue-common";
import { checkIcon } from "@progress/kendo-svg-icons";

const avatarImage = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/dropdowns/contacts/SPLIR.jpg';

export default {
  components: {
    Avatar,
    Badge,
    SvgIcon,
  },
  data() {
    return {
      fillOptions: ["solid", "outline"],
      avatarSrc: avatarImage,
      checkIcon,
    };
  },
};
</script>

<style>
.k-icon {
  font-size: 12px;
}
.wrap {
  text-align: center;
  background-color: lightgrey;
  height: 80px;
}
.badge {
  position: relative;
  overflow: visible;
}
</style>
