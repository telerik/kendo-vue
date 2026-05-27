<template>
  <div>
    <div class="row k-mb-4">
      <div class="col col-6">
        <div class="k-label">Set Row Gap</div>
        <NumericTextBox :value="rowGap" @change="handleRowGapChange" :min="0" />
      </div>
      <div class="col col-6">
        <div class="k-label">Set Column Gap</div>
        <NumericTextBox :value="colGap" @change="handleColGapChange" :min="0" />
      </div>
    </div>
    <div class="example-wrapper">
      <div class="page">
        <div class="content">
          <GridLayout
            :items="items"
            :rows="Array(5).fill({ height: '90px' })"
            :cols="Array(3).fill({ width: '90px' })"
            :gap="{ rows: rowGap, cols: colGap }"
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
import { ref } from 'vue';
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { GridLayout } from '@progress/kendo-vue-layout';
import './styles.css';

const rowGap = ref(5);
const colGap = ref(5);
const items = Array.from({ length: 15 }, (_, index) => ({
    content: `content${index + 1}`,
}));

const handleRowGapChange = (e) => {
    rowGap.value = e.value;
};

const handleColGapChange = (e) => {
    colGap.value = e.value;
};

const getSlotName = (index) => `content${index}`;
</script>
