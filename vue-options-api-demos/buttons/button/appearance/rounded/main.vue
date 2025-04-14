<template>
  <div>
    <span class="wrapper">
      <kbutton>No roundness</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :rounded="'small'">Small roundness</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :rounded="'medium'">Medium roundness</kbutton>
    </span>
    <br />
    <br />
    <span class="wrapper">
      <kbutton :rounded="'large'">Large roundness</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :rounded="'full'">Full roundness</kbutton>
    </span>
    <span class="wrapper">
      <kbutton :size="null" :class="'custom-roundness'">Custom roundness</kbutton>
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
.custom-roundness.k-button {
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
}

.wrapper {
  padding: 20px;
}
</style>
