<template>
  <div>
    <div class="example-wrapper">
      <div class="page">
        <div class="content">
          <GridLayout
            :rows="[
              { height: '90px' },
              { height: '90px' },
              { height: '90px' },
              { height: '90px' },
              { height: '90px' },
            ]"
            :cols="[{ width: '90px' }, { width: '90px' }, { width: '90px' }]"
            :gap="{ rows: 5, cols: 5 }"
            :items="items"
          >
            <template v-slot:content1>
              <div class="box rect">Box</div>
            </template>
            <template v-slot:content2>
              <div class="box">Box</div>
            </template>
            <template v-slot:content3>
              <div class="box">Box</div>
            </template>
            <template v-slot:content4>
              <div class="box big">Box</div>
            </template>
            <template v-slot:content5>
              <div class="box rect">Box</div>
            </template>
            <template v-slot:content6>
              <div class="box">Box</div>
            </template>
            <template v-slot:content7>
              <div class="box">Box</div>
            </template>
            <template v-slot:content8>
              <div class="box">Box</div>
            </template>
            <template v-slot:content9>
              <div class="box">Box</div>
            </template>
            <template v-slot:content10>
              <div class="box">Box</div>
            </template>
          </GridLayout>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GridLayout } from '@progress/kendo-vue-layout';

import './styles.css';

export default {
  components: {
    GridLayout,
  },
  data() {
    return {
      items: [
        { row: 1, col: 1, colSpan: 2, content: 'content1' },
        { row: 1, col: 3, content: 'content2' },
        { row: 2, col: 1, content: 'content3' },
        { row: 2, col: 2, colSpan: 2, rowSpan: 2, content: 'content4' },
        { row: 3, col: 1, rowSpan: 2, content: 'content5' },
        { row: 4, col: 2, content: 'content6' },
        { row: 4, col: 3, content: 'content7' },
        { row: 5, col: 1, content: 'content8' },
        { row: 5, col: 2, content: 'content9' },
        { row: 5, col: 3, content: 'content10' },
      ],
    };
  },
};
</script>
