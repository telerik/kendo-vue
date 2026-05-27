<template>
  <div>
    <div>
      <div class="example-config row">
        <KCheckbox v-model="checkboxValue" @change="handleCheckboxChange" label="Responsive Pager" />
      </div>
      <Slider
        :style="{width: '300px'}"
        :buttons="true"
        :step="2"
        :default-value="7"
        :min="1"
        :max="10"
        :value="value"
        @change="handleSliderChange"
      >
        <SliderLabel :position="1">300</SliderLabel>
        <SliderLabel :position="3">400</SliderLabel>
        <SliderLabel :position="5">500</SliderLabel>
        <SliderLabel :position="7">600</SliderLabel>
        <SliderLabel :position="10">700</SliderLabel>
      </Slider>
      <br />
      <br />
    </div>

    <Grid
      :key="gridWidth"
      :style="{ height: '400px', width: `${gridWidth}px` }"
      :data-items="data"
      :skip="page.skip"
      :take="page.take"
      :total="products.length"
      :pageable="{
        buttonCount: 4,
        pageSizes: [5, 10, 15, 'All'],
        pageSizeValue: pageSizeValue,
        responsive: responsive
      }"
      :columns="columns"
      @pagechange="pageChange"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { PagerTargetEvent } from '@progress/kendo-vue-data-tools';
import { Grid, type GridPageChangeEvent } from '@progress/kendo-vue-grid';
import { Slider, SliderLabel, type SliderChangeEvent, Checkbox as KCheckbox } from '@progress/kendo-vue-inputs';
import products from './gd-products';

interface PageState {
  skip: number;
  take: number;
}

const initialDataState: PageState = { skip: 0, take: 10 };

const value = ref(7);
const responsive = ref(true);
const page = ref<PageState>(initialDataState);
const checkboxValue = ref<boolean | null | undefined>(true);
const pageSizeValue = ref<number | string | undefined>();
const gridWidth = ref(700);

const data = computed(() => {
  return products.slice(page.value.skip, page.value.take + page.value.skip);
});

const pageChange = (event: GridPageChangeEvent) => {
  const targetEvent = event.event as PagerTargetEvent;
  const take = targetEvent.value === 'All' ? products.length : event.page.take;

  if (targetEvent.value) {
    pageSizeValue.value = targetEvent.value;
  }
  page.value = {
    ...event.page,
    take
  };
};

const handleSliderChange = (e: SliderChangeEvent) => {
  value.value = e.value;
  const newGridWidth = e.value * 100;
  gridWidth.value = newGridWidth;
  console.log(newGridWidth);
};

const handleCheckboxChange = () => {
  const newCheckboxValue = !checkboxValue.value;
  responsive.value = newCheckboxValue;
};

const columns = [
  { field: 'ProductID' },
  { field: 'ProductName', title: 'Product Name' },
  { field: 'UnitPrice', title: 'Unit Price' }
];
</script>
