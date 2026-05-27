<template>
  <div class="wrap">
    <span
      class="roundness"
      v-for="(rounded, index) in roundedOptions"
      :key="index"
    >
      <span v-if="rounded !== 'none'">
        {{ rounded.toUpperCase() }}
        <Badge :rounded="rounded">7</Badge>
      </span>
      <span v-else>
        NONE / CUSTOM
        <Badge :rounded="rounded" class="custom-badge-roundness">7</Badge>
      </span>
    </span>
  </div>
</template>

<script setup>
import { Badge } from '@progress/kendo-vue-indicators';

const roundedOptions = ['none', 'small', 'medium', 'large', 'full'];
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
.roundness {
  position: relative;
  overflow: visible;
}
.custom-badge-roundness {
  border-bottom-right-radius: 215px;
  border-bottom-left-radius: 415px;
  border-top-left-radius: 215px;
  border-top-right-radius: 415px;
}
</style>
