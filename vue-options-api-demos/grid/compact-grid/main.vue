<template>
  <div class="demo-grid-container">
    <div class="demo-compact-grid">
      <Grid :size="'small'" />
    </div>
    <div class="demo-default-grid">
      <Grid :size="'medium'" />
    </div>
  </div>
</template>
<script>
import Grid from './GridComponent.vue';

export default {
  components: {
    Grid,
  },
};
</script>
<style>
@media screen and (min-width: 961px) {
  .demo-grid-container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 1.5em;
  }
  .demo-compact-grid > div,
  .demo-default-grid > div {
    width: 49%;
  }
}
@media screen and (max-width: 960px) {
  .demo-grid-container {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    gap: 1.5em;
  }
  .demo-compact-grid,
  .demo-default-grid {
    width: 100%;
  }
}

.demo-compact-grid,
.demo-default-grid {
  display: contents;
}
</style>
