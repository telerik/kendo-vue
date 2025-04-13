<template>
  <div class="demo">
    <span class="wrapper">
      <span>Small</span>
      <Avatar :type="'icon'" :size="'small'" style="margin: 10px">
        <SvgIcon :icon="userIcon" />
      </Avatar>
    </span>
    <span class="wrapper">
      <span>Medium</span>
      <Avatar :type="'icon'" :size="'medium'" style="margin: 10px">
        <SvgIcon :icon="userIcon" />
      </Avatar>
    </span>
    <span class="wrapper">
      <span>Large</span>
      <Avatar :type="'icon'" :size="'large'" style="margin: 10px">
        <SvgIcon :icon="userIcon" />
      </Avatar>
    </span>
    <span class="wrapper">
      <span>Custom size</span>
      <Avatar :type="'icon'" :size="null" class="custom-Avatar">
        <SvgIcon :icon="userIcon" />
      </Avatar>
    </span>
  </div>
</template>
<script>
import { Avatar } from "@progress/kendo-vue-layout";
import { SvgIcon } from "@progress/kendo-vue-common";
import { userIcon } from "@progress/kendo-svg-icons";

export default {
  components: {
    Avatar,
    SvgIcon,
  },
  data() {
    return {
      userIcon,
    };
  },
};
</script>

<style>
.custom-avatar {
  height: 40px;
  width: 200px;
}
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
}
</style>
