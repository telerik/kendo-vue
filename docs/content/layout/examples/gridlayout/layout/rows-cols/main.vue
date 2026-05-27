<template>
  <div>
    <div class="row k-mb-4">
      <div class="col col-6">
        <div class="k-label">Set Row Height</div>
        <NumericTextBox :value="rowHeight" @change="handleRowChange" />
      </div>
      <div class="col col-6">
        <div class="k-label">Set Column Width</div>
        <NumericTextBox :value="colWidth" @change="handleColChange" />
      </div>
    </div>
    <div class="example-wrapper">
      <div class="page">
        <div class="content">
          <GridLayout
            :items="items"
            :rows="Array(5).fill({ height: computedRowHeight })"
            :cols="Array(3).fill({ width: computedColWidth })"
            :gap="{ rows: 5, cols: 5 }"
          >
            <template
              v-for="index in 15"
              :key="index"
              #[getSlotName(index)]
            >
              <div :class="['box', 'box-' + (index - 1)]"></div>
            </template>
          </GridLayout>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { GridLayout } from '@progress/kendo-vue-layout';
import './styles.css';

const rowHeight = ref(90);
const colWidth = ref(90);
const items = Array.from({ length: 15 }, (_, index) => ({
    content: `content${index + 1}`,
}));

const computedRowHeight = computed(() => `${rowHeight.value}px`);
const computedColWidth = computed(() => `${colWidth.value}px`);

const handleRowChange = (e) => {
    rowHeight.value = e.value;
};

const handleColChange = (e) => {
    colWidth.value = e.value;
};

const getSlotName = (index) => `content${index}`;
</script>
