<template>
  <div>
    <DropDownList
      :data-items="vAligns"
      :value="vAlign"
      @change="handleAlignChange"
    />
    <div class="example-wrapper">
      <div class="page">
        <div class="content">
          <GridLayout
            :items="items"
            :align="{ vertical: vAlign }"
            :rows="[
              { height: '90px' },
              { height: '90px' },
              { height: '90px' },
              { height: '90px' },
              { height: '90px' },
            ]"
            :cols="[
              { width: '90px' },
              { width: '90px' },
              { width: '90px' },
            ]"
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

const vAlign = ref('stretch');
const vAligns = ['top', 'middle', 'bottom', 'stretch'];
const items = Array.from({ length: 15 }, (_, index) => ({
    content: `content${index + 1}`,
}));

const handleAlignChange = (e) => {
    vAlign.value = e.value;
};

const getSlotName = (index) => `content${index}`;
</script>
