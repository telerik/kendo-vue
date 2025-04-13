<template>
  <div>
    <span class="wrapper">
      <kbutton :shape="'rectangle'">Rectangle shape</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :shape="'square'">Square shape</kbutton>
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
