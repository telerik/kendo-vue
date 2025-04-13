<template>
  <div>
    <div class="demo">
      <span class="wrapper">
        <span style="text-align: center">Null</span>
        <Avatar :type="'icon'" :rounded="null" style="margin: 10px">
          <SvgIcon :icon="userIcon" />
        </Avatar>
      </span>
      <span class="wrapper">
        <span style="text-align: center">Small</span>
        <Avatar :type="'icon'" :rounded="'small'" style="margin: 10px">
          <SvgIcon :icon="userIcon" />
        </Avatar>
      </span>
      <span class="wrapper">
        <span style="text-align: center">Medium</span>
        <Avatar :type="'icon'" :rounded="'medium'" style="margin: 10px">
          <SvgIcon :icon="userIcon" />
        </Avatar>
      </span>
      <span class="wrapper">
        <span style="text-align: center">Large </span>
        <Avatar :type="'icon'" :rounded="'large'" style="margin: 10px">
          <SvgIcon :icon="userIcon" />
        </Avatar>
      </span>
      <span class="wrapper">
        <span style="text-align: center">Full</span>
        <Avatar :type="'icon'" :rounded="'full'" style="margin: 10px">
          <SvgIcon :icon="userIcon" />
        </Avatar>
      </span>
      <span class="wrapper">
        <span style="text-align: center">Custom</span>
        <Avatar :type="'icon'" class="custom-avatar">
          <SvgIcon :icon="userIcon" />
        </Avatar>
      </span>
    </div>
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
  border-bottom-right-radius: 15px;
  border-top-left-radius: 15px;
  margin: 10px;
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
