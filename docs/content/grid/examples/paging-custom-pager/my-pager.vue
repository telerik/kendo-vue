<template>
  <div
    class="k-pager k-grid-pager"
    style="border-top: 1px solid; border-top-color: inherit; display: flex; align-items: center; gap: 1rem; padding: 0.5rem"
  >
    <div style="flex: 1">
      <Slider
        :buttons="true"
        :step="1"
        :value="currentPage"
        :min="1"
        :max="totalPages"
        @change="handleChange"
      />
    </div>
    <div style="flex: 1">
      <NumericTextBox
        :value="currentPage"
        :min="1"
        :max="totalPages"
        @change="handleChange"
      />
    </div>
    <div style="flex: 1; text-align: center">Page {{ currentPage }} of {{ totalPages }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Slider, NumericTextBox } from '@progress/kendo-vue-inputs';
import type { NumericTextBoxChangeEvent, SliderChangeEvent } from '@progress/kendo-vue-inputs';

interface Props {
  skip: number;
  take: number;
  total?: number;
}

defineOptions({
  inheritAttrs: false
});

const props = withDefaults(defineProps<Props>(), {
  total: 0
});

const emit = defineEmits<{
  pagechange: [event: any];
}>();

const currentPage = computed(() => Math.floor(props.skip / props.take) + 1);
const totalPages = computed(() => Math.ceil((props.total || 0) / props.take));

const handleChange = (event: NumericTextBoxChangeEvent | SliderChangeEvent) => {
  emit('pagechange', {
    skip: ((event.value ?? 1) - 1) * props.take,
    take: props.take,
    syntheticEvent: event.syntheticEvent,
    nativeEvent: event.nativeEvent,
    targetEvent: { value: event.value }
  });
};
</script>
