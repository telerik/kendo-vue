<template>
  <div>
    <div class="wrapper">
      <Slider
        style="width:500px"
        :buttons="true"
        :step="5"
        :min="300"
        :max="800"
        v-model="width"
      >
        <SliderLabel :position="300">300</SliderLabel>
        <SliderLabel :position="400">400</SliderLabel>
        <SliderLabel :position="500">500</SliderLabel>
        <SliderLabel :position="600">600</SliderLabel>
        <SliderLabel :position="700">700</SliderLabel>
        <SliderLabel :position="800">800</SliderLabel>
      </Slider>
      <span>Current width: {{ width.toFixed(0) }}px</span>
    </div>

    <Pager
      :style="{ width: width.toFixed(0) + 'px' }"
      :skip="skip"
      :take="take"
      :total="total"
      :button-count="buttonCount"
      :info="info"
      :type="type"
      :page-sizes="pageSizes ? pageSizeDefs : undefined"
      :previous-next="previousNext"
      @pagechange="handlePageChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Pager } from '@progress/kendo-vue-data-tools';
import { Slider, SliderLabel } from '@progress/kendo-vue-inputs';

const skip = ref(0);
const take = ref(5);
const buttonCount = ref(5);
const type = ref("numeric");
const info = ref(true);
const pageSizes = ref([10, 15, 20]);
const previousNext = ref(true);
const total = ref(200);
const pageSizeDefs = ref([5, 10, 20]);
const width = ref(768);

const handlePageChange = (event) => {
    skip.value = event.skip;
    take.value = event.take;
};
</script>

<style>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  margin-bottom: 20px;
}
</style>
