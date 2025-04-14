<template>
  <div class="demo">
    <span class="wrapper">
      <span>Small roundness: </span>
      <Switch :track-rounded="'small'" />
    </span>
    <span class="wrapper">
      <span>Medium roundness: </span>
      <Switch :track-rounded="'medium'" />
    </span>
    <span class="wrapper">
      <span>Large roundness: </span>
      <Switch :track-rounded="'large'" />
    </span>
    <span class="wrapper">
      <span>Full roundness: </span>
      <Switch :track-rounded="'full'" />
    </span>
  </div>
</template>

<script>
import { Switch } from '@progress/kendo-vue-inputs';

export default {
  components: {
    Switch,
  },
};
</script>

<style>
.wrapper {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.demo {
  display: flex;
  flex-direction: row;
}
</style>
