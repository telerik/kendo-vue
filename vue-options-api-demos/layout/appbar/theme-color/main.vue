<template>
  <div>
    <div :class="'wrap'" v-for="(color, index) in themeColors">
      <AppBar :theme-color="color.value" :key="index">
        <AppBarSection>
          <KButton :fill-mode="'flat'" :svg-icon="menuIcon"> </KButton>
        </AppBarSection>

        <AppBarSpacer :width="8" />

        <AppBarSection>
          <h1 class="title">{{ color.text }} AppBar</h1>
        </AppBarSection>
        {{ color.value }}
        <AppBarSpacer />

        <AppBarSection>
          <KButton :fill-mode="'flat'">
            <div :class="'badge'">
              <SvgIcon :icon="menuIcon" />
              <Badge :theme-color="'info'" :shape="'dot'" />
            </div>
          </KButton>
        </AppBarSection>
      </AppBar>
    </div>
  </div>
</template>
<script>
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
} from '@progress/kendo-vue-layout';
import { Button } from '@progress/kendo-vue-buttons';
import { Badge } from '@progress/kendo-vue-indicators';

import { menuIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-vue-common';

export default {
  components: {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    KButton: Button,
    Badge,
    SvgIcon,
  },
  data() {
    return {
      menuIcon,
      themeColors: [
        { text: 'Primary', value: 'primary' },
        { text: 'Dark', value: 'dark' },
        { text: 'Light', value: 'light' },
        { text: 'Inherit', value: 'inherit' }
      ],
    };
  },
};
</script>
<style>
body {
  background: #dfdfdf;
}
.title {
  text-transform: capitalize;
  font-size: 18px;
  margin: 0;
}
.k-badge-container {
  margin-right: 4px;
}
.k-icon {
  font-size: 18px;
}
.k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
  padding: 0;
}
.k-appbar-dark
  .k-button
  k-button-md
  k-rounded-md
  k-button-solid
  k-button-solid-base-clear {
  color: #ffffffff;
}
.k-appbar-dark
  .k-button
  k-button-md
  k-rounded-md
  k-button-solid
  k-button-solid-base-clear:hover {
  color: #ffffff99;
}

.wrap {
  margin-bottom: 30px;
}
.badge {
  position: relative;
  overflow: visible;
}
</style>
