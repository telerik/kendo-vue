<template>
  <div class="wrap">
    <span
      class="roundness"
      v-for="(rounded, index) in roundedOptions"
      :key="index"
    >
      <span v-if="rounded !== null">
        {{ rounded.toUpperCase() }}
        <Badge :rounded="rounded"> 7 </Badge>
      </span>
      <span v-else>
        CUSTOM
        <Badge :rounded="rounded" :class="'custom-badge-roundness'"> 7 </Badge>
      </span>
    </span>
  </div>
</template>

<script>
import { Badge } from '@progress/kendo-vue-indicators';

export default {
  components: {
    Badge,
  },
  data() {
    return {
      roundedOptions: ['small', 'medium', 'large', 'full', null],
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
