<template>
  <div>
    <AppBar>
      <AppBarSection>
        <h1 class="title">Bookings</h1>
      </AppBarSection>

      <AppBarSpacer />

      <AppBarSection>
        <KButton fill-mode="flat">
          <div class="badge">
            <SvgIcon :icon="bellIconRef" />
            <Badge shape="dot" theme-color="info" size="small" position="inside" />
          </div>
        </KButton>
        <span class="k-appbar-separator" />
        <KButton fill-mode="flat" :svg-icon="heartIconRef"></KButton>
      </AppBarSection>
    </AppBar>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { AppBar, AppBarSection, AppBarSpacer } from '@progress/kendo-vue-layout';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { Badge } from '@progress/kendo-vue-indicators';
import { bellIcon, heartIcon } from '@progress/kendo-svg-icons';
import { SvgIcon } from '@progress/kendo-vue-common';

const bellIconRef = ref(bellIcon);
const heartIconRef = ref(heartIcon);
</script>

<style>
body {
  background: #dfdfdf;
}
.title {
  font-size: 18px;
  margin: 0;
}
.k-icon {
  font-size: 18px;
}
.k-appbar .k-appbar-separator {
  margin: 0 8px;
}
.badge {
  position: relative;
  overflow: visible;
}
</style>
