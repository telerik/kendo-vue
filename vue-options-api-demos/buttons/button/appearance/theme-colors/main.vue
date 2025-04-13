<template>
  <div>
    <span class="wrapper">
      <kbutton :theme-color="'base'">base</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :theme-color="'primary'">primary</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :theme-color="'secondary'">secondary</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :theme-color="'tertiary'">tertiary</kbutton>
    </span>
    <br />
    <br />
    <span class="wrapper">
      <kbutton :theme-color="'info'">info</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :theme-color="'success'">success</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :theme-color="'warning'">warning</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :theme-color="'error'">error</kbutton>
    </span>
    <br />
    <br />
    <span class="wrapper">
      <kbutton :theme-color="'dark'">dark</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :theme-color="'light'">light</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :theme-color="'inverse'">inverse</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :theme-color="null" :class="'custom-color'">custom</kbutton>
    </span>
  </div>
</template>

<script>
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    kbutton: Button,
  }
};
</script>
<style>
.wrapper {
  padding: 20px;
}

.custom-color {
  background-color: green;
  color: orange;
}
</style>
