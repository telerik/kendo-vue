<template>
  <div>
    <span class="wrapper">
      <kbutton :size="'small'">Small Size</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :size="'medium'">Medium Size</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :size="'large'">Large Size</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :size="null" :class="'custom-size'">Custom Size</kbutton>
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
.custom-size.k-button {
  padding: 20px 20px;
}
.wrapper {
  padding: 20px;
}
</style>
