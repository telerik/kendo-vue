<template>
  <div>
    <AppBar>
      <AppBarSection>
        <KButton :fill-mode="'flat'" :svg-icon="menuIcon"> </KButton>
      </AppBarSection>

      <AppBarSpacer :width="4" />

      <AppBarSection>
        <h1 class="title">Gallery</h1>
      </AppBarSection>

      <AppBarSpacer />

      <AppBarSection>
        <KInput :placeholder="'Search Photos'" />
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
import { Input } from '@progress/kendo-vue-inputs';
import { menuIcon } from '@progress/kendo-svg-icons';

export default {
  components: {
    AppBar,
    AppBarSection,
    AppBarSpacer,
    KButton: Button,
    KInput: Input,
  },
  data() {
    return {
      menuIcon,
    };
  },
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
.k-button k-button-md k-rounded-md k-button-solid k-button-solid-base {
  padding: 0;
}
</style>
