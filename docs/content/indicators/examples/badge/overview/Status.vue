<template>
  <div class="status">
    <KButton>
      New Updates
      <Badge rounded="full" theme-color="info" />
    </KButton>
    <span class="notifications">
      <SvgIcon :icon="bellIcon" size="xlarge" />
      <Badge rounded="full" theme-color="warning" />
    </span>
  </div>
</template>

<script setup>
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { Badge } from '@progress/kendo-vue-indicators';
import { SvgIcon } from '@progress/kendo-vue-common';
import { bellIcon } from '@progress/kendo-svg-icons';
</script>

<style>
.status {
  display: flex;
  justify-content: space-between;
  padding: 12px 14px;
}
.notifications {
  position: relative;
  align-self: center;
  font-size: 21px;
  color: #6c757d;
}
</style>
