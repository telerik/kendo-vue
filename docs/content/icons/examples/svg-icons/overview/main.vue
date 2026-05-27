<template>
  <div
    class="text-center social-icons"
    :style="{ display: 'flex', justifyContent: 'space-between' }"
  >
    <div class="column">
      <p>Default SVGIcons</p>
      <div>
        <SvgIcon :icon="facebookIcon" />
      </div>
      <div>
        <SvgIcon :icon="xLogoIcon" />
      </div>
      <div>
        <SvgIcon :icon="googleIcon" />
      </div>
      <div>
        <SvgIcon :icon="linkedinIcon" />
      </div>
      <div>
        <SvgIcon :icon="youtubeIcon" />
      </div>
    </div>
    <div class="column">
      <p>SVGIcons with Applied Theme Color</p>
      <div>
        <SvgIcon :icon="trashIcon" :theme-color="'primary'" />
      </div>
      <div>
        <SvgIcon :icon="trashIcon" :theme-color="'warning'" />
      </div>
      <div>
        <SvgIcon :icon="trashIcon" :theme-color="'info'" />
      </div>
      <div>
        <SvgIcon :icon="trashIcon" :theme-color="'error'" />
      </div>
      <div>
        <SvgIcon :icon="trashIcon" :theme-color="'tertiary'" />
      </div>
    </div>
    <div class="column">
      <p>SVGIcons with Different Sizes</p>
      <div>
        <SvgIcon :icon="cameraIcon" :size="'small'" />
      </div>
      <div>
        <SvgIcon :icon="cameraIcon" :size="'large'" />
      </div>
      <div>
        <SvgIcon :icon="cameraIcon" :size="'xlarge'" />
      </div>
      <div>
        <SvgIcon :icon="cameraIcon" :size="'small'" />
      </div>
      <div>
        <SvgIcon :icon="cameraIcon" :size="'medium'" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { SvgIcon } from '@progress/kendo-vue-common';
import {
    facebookIcon,
    xLogoIcon,
    googleIcon,
    linkedinIcon,
    youtubeIcon,
    trashIcon,
    cameraIcon,
} from '@progress/kendo-svg-icons';
</script>

<style>
.column {
  margin: 8px;
}
</style>
