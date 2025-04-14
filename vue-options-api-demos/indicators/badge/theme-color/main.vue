<template>
  <div class="wrap">
    <span
      class="themes"
      v-for="(themeColor, index) in themeColors"
      :key="index"
    >
      {{ themeColor.toUpperCase() }}
      <Badge :theme-color="themeColor"> 7 </Badge>
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
      themeColors: [
        'primary',
        'secondary',
        'tertiary',
        'inherit',
        'info',
        'success',
        'error',
        'warning',
        'dark',
        'light',
        'inverse',
      ],
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
.themes {
  position: relative;
  overflow: visible;
}
</style>
