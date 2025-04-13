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
            :align="{
              vertical: vAlign,
            }"
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
              rows: 5,
              cols: 5,
            }"
          >
            <template
              v-for="index in 15"
              v-slot:[getSlotName(index)]
              :key="index"
            >
              <div :class="['box', 'box-' + (index - 1)]">Box</div>
            </template>
          </GridLayout>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DropDownList } from '@progress/kendo-vue-dropdowns';
import { GridLayout } from '@progress/kendo-vue-layout';

import './styles.css';

export default {
  components: {
    GridLayout,
    DropDownList,
  },
  data() {
    return {
      vAlign: 'stretch',
      vAligns: ['top', 'middle', 'bottom', 'stretch'],
      items: [...Array(15)].map((el, index) => {
        return { content: 'content' + (index + 1) };
      }),
    };
  },
  methods: {
    handleAlignChange(e) {
      this.vAlign = e.value;
    },
    getSlotName(index) {
      return `content${index}`;
    },
  },
};
</script>
