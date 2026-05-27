<template>
  <div class="wrap">
    <span class="sizes" v-for="(size, index) in sizes" :key="index">
      {{ size.toUpperCase() }}
      <Badge :size="size">7</Badge>
    </span>
  </div>
</template>

<script setup>
import { Badge } from '@progress/kendo-vue-indicators';

const sizes = ['small', 'medium', 'large'];
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
