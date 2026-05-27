<template>
  <div class="wrap">
    <BadgeContainer content="content" rounded="full">
      <SvgIcon :icon="facebookIcon" size="xlarge" style="color: #5270a4" />
      <template #content>
        <span>1</span>
      </template>
    </BadgeContainer>
    <BadgeContainer content="content" rounded="full">
      <SvgIcon :icon="xLogoIcon" size="xlarge" style="color: #4eb9ed" />
      <template #content>
        <span>3</span>
      </template>
    </BadgeContainer>
    <BadgeContainer content="content" rounded="full" style="color: #b3d062">
      <SvgIcon :icon="vimeoIcon" size="xlarge" />
      <template #content>
        <span>77</span>
      </template>
    </BadgeContainer>
    <BadgeContainer content="content" rounded="full">
      <SvgIcon :icon="envelopeIcon" size="xlarge" />
      <template #content>
        <span>14+</span>
      </template>
    </BadgeContainer>
  </div>
</template>

<script setup>
import { BadgeContainer } from '@progress/kendo-vue-indicators';
import { SvgIcon } from '@progress/kendo-vue-common';
import {
    facebookIcon,
    xLogoIcon,
    vimeoIcon,
    envelopeIcon,
} from '@progress/kendo-svg-icons';
</script>

<style>
.wrap {
  display: flex;
  justify-content: space-between;
  padding: 21px 14px;
  border-bottom: 1px solid #ccc;
}
</style>
