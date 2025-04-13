<template>
  <div>
    <AppBar>
      <AppBarSection>
        <KButton :fill-mode="'flat'" :svg-icon="menuIcon">
        </KButton>
      </AppBarSection>

      <AppBarSpacer :width="4" />

      <AppBarSection>
        <h1 :class="'title'">My Playlist</h1>
      </AppBarSection>

      <AppBarSpacer :width="68" />

      <AppBarSection>
        <KInput :placeholder="'Search Songs'" />
      </AppBarSection>

      <AppBarSpacer />

      <AppBarSection>
        <KButton :fill-mode="'flat'">
          <div class="badge">
            <SvgIcon :icon="bellIcon" />
            <Badge :edge="'inside'" :theme-color="'info'" :size="'small'"
              >8</Badge
            >
          </div>
        </KButton>
      </AppBarSection>
    </AppBar>
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
import { Input } from '@progress/kendo-vue-inputs';
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-vue-common';

export default {
  components: {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    KButton: Button,
    KInput: Input,
    Badge,
    SvgIcon
  },
  data() {
    return {
      bellIcon, menuIcon
    }
  }
};
</script>
<style>
body {
  background: #dfdfdf;
}
.title {
  font-size: 18px;
  margin: 0;
}
.k-button.k-button-md.k-rounded-md.k-button-solid.k-button-solid-base {
  padding: 0;
}
.k-appbar .k-appbar-separator {
  margin: 0 8px;
}
.badge {
  position: relative;
  overflow: visible;
}
</style>
