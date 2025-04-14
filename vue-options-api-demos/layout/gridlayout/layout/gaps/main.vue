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
            :rows="[
              {
                height: '90px',
              },
              {
                height: '90px',
              },
              {
                height: '90px',
              },
              {
                height: '90px',
              },
              {
                height: '90px',
              },
            ]"
            :cols="[
              {
                width: '90px',
              },
              {
                width: '90px',
              },
              {
                width: '90px',
              },
            ]"
            :gap="{
              rows: rowGap,
              cols: colGap,
            }"
          >
            <template
              v-for="index in 15"
              v-slot:[getSlotName(index)]
              :key="index"
            >
              <div :class="['box', 'box-' + (index - 1)]"></div>
            </template>
          </GridLayout>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { NumericTextBox } from '@progress/kendo-vue-inputs';
import { GridLayout } from '@progress/kendo-vue-layout';

import './styles.css';

export default {
  components: {
    GridLayout,
    NumericTextBox,
  },
  data() {
    return {
      rowGap: 5,
      colGap: 5,
      items: [...Array(15)].map((el, index) => {
        return { content: 'content' + (index + 1) };
      }),
      // The above definition is a short version of the following:
      // items: [
      //   { content: 'content1' },
      //   { content: 'content2' },
      //   { content: 'content3' },
      //   { content: 'content4' },
      //   { content: 'content5' },
      //   { content: 'content6' },
      //   { content: 'content7' },
      //   { content: 'content8' },
      //   { content: 'content9' },
      //   { content: 'content10' },
      //   { content: 'content11' },
      //   { content: 'content12' },
      //   { content: 'content13' },
      //   { content: 'content14' },
      //   { content: 'content15' },
      // ],
    };
  },
  methods: {
    handleColGapChange(e) {
      this.colGap = e.value;
    },
    handleRowGapChange(e) {
      this.rowGap = e.value;
    },
    getSlotName(index) {
      return `content${index}`;
    },
  },
};
</script>
