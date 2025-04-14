<template>
  <div class="demo">
    <span class="wrapper">
      <span>Small size: </span>
      <Switch :size="'small'" />
    </span>
    <span class="wrapper">
      <span>Medium size: </span>
      <Switch :size="'medium'" />
    </span>
    <span class="wrapper">
      <span>Large size: </span>
      <Switch :size="'large'" />
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
.custom-switch {
  width: 140px;
  height: 70px;
}

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
