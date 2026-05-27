<template>
  <AppBar>
    <AppBarSection>
      <KButton :svg-icon="menuIconRef" fill-mode="flat" />
    </AppBarSection>

    <AppBarSpacer :width="4" />

    <AppBarSection>
      <h1 class="title">Kendo UI for Vue</h1>
    </AppBarSection>

    <AppBarSpacer :width="32" />

    <AppBarSection>
      <ul>
        <li><span>What's New</span></li>
        <li><span>About</span></li>
        <li><span>Contacts</span></li>
      </ul>
    </AppBarSection>

    <AppBarSpacer />

    <AppBarSection class="actions">
      <KButton fill-mode="flat">
        <BadgeContainer shape="dot" theme-color="info" size="small" position="inside">
          <SvgIcon :icon="bellIconRef" />
        </BadgeContainer>
      </KButton>
    </AppBarSection>

    <AppBarSection>
      <span class="k-appbar-separator" />
    </AppBarSection>

    <AppBarSection>
      <Avatar type="image">
        <img :src="kendokaAvatar" />
      </Avatar>
    </AppBarSection>
  </AppBar>
</template>

<script setup>
import { ref } from 'vue';
import { AppBar, AppBarSection, AppBarSpacer, Avatar } from '@progress/kendo-vue-layout';
import { Button as KButton } from "@progress/kendo-vue-buttons";;
import { BadgeContainer } from '@progress/kendo-vue-indicators';
import { SvgIcon } from '@progress/kendo-vue-common';
import { bellIcon, menuIcon } from '@progress/kendo-svg-icons';

const kendokaAvatar = (import.meta.env.VITE_VUE_DEMOS_BASE_URL || '/') + 'assets/suite/kendoka-vue.webp';
const menuIconRef = ref(menuIcon);
const bellIconRef = ref(bellIcon);
</script>

<style>
body {
  background: #dfdfdf;
}
.title {
  font-size: 18px;
  margin: 0;
}
ul {
  font-size: 14px;
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
}
li {
  margin: 0 10px;
}
li:hover {
  cursor: pointer;
  color: #84cef1;
}
.k-button.k-button-md.k-rounded-md.k-button-solid.k-button-solid-base {
  padding: 0;
}
</style>
