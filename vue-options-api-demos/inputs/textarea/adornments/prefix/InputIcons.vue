<template>
  <SvgIcon :icon="menuIcon" />
  <SvgIcon :icon="photosIcon" />
  <span class="k-flex-1"></span>
  <SvgIcon :icon="gearIcon" />
</template>
<script>
import { SvgIcon } from "@progress/kendo-vue-common";
import { menuIcon, photosIcon, gearIcon } from "@progress/kendo-svg-icons";

export default {
  components: {
    SvgIcon,
  },
  data() {
    return {
      menuIcon,
      photosIcon,
      gearIcon,
    };
  },
};
</script>