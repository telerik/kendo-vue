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
            :rows="[
              {
                height: computedRowHeight,
              },
              {
                height: computedRowHeight,
              },
              {
                height: computedRowHeight,
              },
              {
                height: computedRowHeight,
              },
              {
                height: computedRowHeight,
              },
            ]"
            :cols="[
              {
                width: computedColWidth,
              },
              {
                width: computedColWidth,
              },
              {
                width: computedColWidth,
              },
            ]"
            :gap="{
              rows: 5,
              cols: 5,
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
      colWidth: 90,
      rowHeight: 90,
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
  computed: {
    computedRowHeight() {
      return this.rowHeight + 'px';
    },
    computedColWidth() {
      return this.colWidth + 'px';
    },
  },
  methods: {
    handleColChange(e) {
      this.colWidth = e.value;
    },
    handleRowChange(e) {
      this.rowHeight = e.value;
    },
    getSlotName(index) {
      return `content${index}`;
    },
  },
};
</script>
