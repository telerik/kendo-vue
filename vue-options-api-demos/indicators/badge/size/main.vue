<template>
  <div class="wrap">
    <span class="sizes" v-for="(size, index) in sizes" :key="index">
      <span v-if="size !== null">
        {{ size.toUpperCase() }}
        <Badge :size="size"> 7 </Badge>
      </span>
      <span v-else>
        CUSTOM
        <Badge :size="size" :class="'custom-badge-size'"> 7 </Badge>
      </span>
    </span>
  </div>
</template>

<script>
import { BadgeContainer, Badge } from '@progress/kendo-vue-indicators';

export default {
  components: {
    BadgeContainer,
    Badge,
  },
  data() {
    return {
      sizes: ['small', 'medium', 'large', null],
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
  margin-top: 25px;
  text-align: center;
}

.wrap {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 20px;
}

.sizes {
  position: relative;
  overflow: visible;
}
.custom-badge-size {
  width: 50px;
  height: 50px;
  margin-bottom: 100px;
}
</style>
