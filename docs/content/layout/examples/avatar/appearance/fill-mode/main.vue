<template>
  <div class="demo">
    <span class="wrapper">
      <span style="text-align: center">Solid</span>
      <Avatar type="icon" fill-mode="solid" style="margin: 10px" border>
        <SvgIcon :icon="userIcon" />
      </Avatar>
    </span>
    <span class="wrapper">
      <span style="text-align: center">Outline</span>
      <Avatar type="icon" fill-mode="outline" style="margin: 10px" border>
        <SvgIcon :icon="userIcon" />
      </Avatar>
    </span>
    <span class="wrapper">
      <span style="text-align: center">Custom</span>
      <Avatar type="icon" :fill-mode="null" style="margin: 10px" class="custom-avatar">
        <SvgIcon :icon="userIcon" />
      </Avatar>
    </span>
  </div>
</template>

<script setup>
import { Avatar } from "@progress/kendo-vue-layout";
import { SvgIcon } from "@progress/kendo-vue-common";
import { userIcon } from "@progress/kendo-svg-icons";
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
