<template>
  <div class="wrap">
    <span class="fill" v-for="(fill, index) in fillOptions" :key="index">
      {{ fill.toUpperCase() }}
      <Badge :fill-mode="fill"> 7 </Badge>
    </span>
  </div>
</template>

<script>
import { Badge } from '@progress/kendo-vue-indicators';

export default {
  components: { Badge },
  data() {
    return {
      fillOptions: ['solid', 'outline'],
    };
  },
};
</script>

<style>
.k-badge-container {
  margin: 0 30px 20px 0;
}
.title {
  color: #6c757d;
  padding: 6px 8px;
}
.wrap {
  display: flex;
  margin-top: 25px;
  text-align: center;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}

.fill {
  position: relative;
  overflow: visible;
}
</style>
