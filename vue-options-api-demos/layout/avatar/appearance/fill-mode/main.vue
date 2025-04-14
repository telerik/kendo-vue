<template>
  <div class="demo">
    <span class="wrapper">
      <span style="text-align: center">Solid</span>
      <avatar
        :type="'icon'"
        :fill-mode="'solid'"
        style="margin: 10px"
        :border="true"
      >
        <SvgIcon :icon="userIcon" />
      </avatar>
    </span>
    <span class="wrapper">
      <span style="text-align: center">Outline</span>
      <avatar
        :type="'icon'"
        :fill-mode="'outline'"
        style="margin: 10px"
        :border="true"
      >
        <SvgIcon :icon="userIcon" />
      </avatar>
    </span>
    <span class="wrapper">
      <span style="text-align: center">Custom</span>
      <avatar
        :type="'icon'"
        :fill-mode="null"
        style="margin: 10px"
        :class="'custom-avatar'"
      >
        <SvgIcon :icon="userIcon" />
      </avatar>
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
  background-color: lightgreen;
  border: 3px dotted green;
}

.custom-avatar .k-icon {
  color: blue;
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
