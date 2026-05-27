<template>
  <div
    class="k-header"
    :style="{
      display: 'block',
      position: 'absolute',
      zIndex: 20000,
      padding: '8px 12px',
      top: top + 'px',
      left: left + 'px',
    }"
  >
    <span :class="hintIcon" style="cursor: move"></span>
    {{ dataItem.name || '' }}
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  left: Number,
  top: Number,
  showContent: Boolean,
  dataItem: {
    type: Object,
    default: () => ({}),
  },
});

const hintIcon = computed(() =>
  props.showContent ? 'k-icon k-i-insert-middle' : 'k-icon k-i-cancel'
);
</script>
