<template>
  <div>
    <span class="wrapper">
      <kbutton :fill-mode="'solid'">Solid</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :fill-mode="'flat'">Flat</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :fill-mode="'outline'">Outline</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :fill-mode="'clear'">Clear</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :fill-mode="'link'">Link</kbutton>
    </span>
  </div>
</template>

<script>
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    kbutton: Button,
  },
};
</script>
<style>
.wrapper {
  padding: 20px;
}
</style>
