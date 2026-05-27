<template>
  <div>
    <DropDownList
      :data-items="hAligns"
      :value="hAlign"
      @change="handleAlignChange"
    />
    <div class="example-wrapper">
      <div class="page">
        <div class="content">
          <GridLayout
            :items="items"
            :align="{ horizontal: hAlign }"
            :rows="Array(5).fill({ height: '90px' })"
            :cols="Array(3).fill({ width: '90px' })"
            :gap="{ rows: 5, cols: 5 }"
          >
            <template
              v-for="index in 15"
              :key="index"
              #[getSlotName(index)]
            >
              <div :class="['box', 'box-' + (index - 1)]">Box</div>
            </template>
          </GridLayout>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { GridLayout } from '@progress/kendo-vue-layout';
import './styles.css';

const hAlign = ref('stretch');
const hAligns = ['start', 'center', 'end', 'stretch'];
const items = Array.from({ length: 15 }, (_, index) => ({
    content: `content${index + 1}`,
}));

const handleAlignChange = (e) => {
    hAlign.value = e.value;
};

const getSlotName = (index) => `content${index}`;
</script>
