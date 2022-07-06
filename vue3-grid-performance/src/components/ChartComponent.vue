<template>
  <span>
    <KButton :icon-class="'k-icon k-i-toggle-full-screen-mode'" />
  </span>
</template>

<script>
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    KButton: Button
  },
};
</script>
