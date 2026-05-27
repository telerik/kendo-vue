<template>
  <div>
    <Pager
      :responsive="true"
      :skip="skip"
      :take="take"
      :total="200"
      :button-count="5"
      :info="true"
      :previous-next="true"
      type="numeric"
      :page-sizes="[10, 15, 20]"
      @pagechange="onPageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { Pager } from '@progress/kendo-vue-data-tools';

defineOptions({
  inheritAttrs: false
});

interface Props {
  skip: number;
  take: number;
  total?: number;
  onPageChange?: (event: any) => void;
}

const props = withDefaults(defineProps<Props>(), {
  total: 0
});
</script>
