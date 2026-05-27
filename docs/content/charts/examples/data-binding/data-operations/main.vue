<template>
  <div>
    <div :style="{ margin: '-30px -30px 30px -30px' }">
      <div
        class="example-config"
        :style="{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          justifyContent: 'center',
        }"
      >
        <KButton @click="handleAddData">Add Data</KButton>
        <KButton @click="handleAddDataset">Add Dataset</KButton>
        <KButton
          @click="handleRemoveData"
          :disabled="lineData.length === 0"
        >
          Remove Data
        </KButton>
        <KButton @click="handleRandomize">Randomize</KButton>
        <KButton :theme-color="'base'" @click="handleReset">Reset</KButton>
      </div>
    </div>

    <Chart :style="{ height: '400px' }" :transitions="false">
      <ChartTitle :text="'East Asia &amp; Pacific'" />
      <ChartLegend :visible="false" />
      <ChartSeries>
        <ChartSeriesItem
          :type="'line'"
          :style="'smooth'"
          :data-items="lineData"
        />
      </ChartSeries>
    </Chart>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import {
  Chart,
  ChartSeries,
  ChartSeriesItem,
  ChartLegend,
  ChartTitle,
} from '@progress/kendo-vue-charts';
import { Button as KButton } from '@progress/kendo-vue-buttons';

const initialLineData = [
  [6, 0],
  [5.47, 1],
  [8, 2],
  [5.24, 3],
  [4.76, 4],
  [4.72, 5],
  [4.67, 6],
  [5.05, 7],
  [4.76, 8],
  [3.96, 9],
  [1, 10],
  [6.1, 11],
  [2.85, 12],
];

const lineData = ref([...initialLineData]);

const randomValue = (max) =>
  Number.parseFloat((Math.random() * max).toFixed(2));

const handleAddData = () => {
  lineData.value = [
    ...lineData.value,
    [randomValue(10), lineData.value.length],
  ];
};

const handleAddDataset = () => {
  lineData.value = [
    ...lineData.value,
    [randomValue(10), lineData.value.length],
    [randomValue(10), lineData.value.length + 1],
    [randomValue(10), lineData.value.length + 2],
  ];
};

const handleRemoveData = () => {
  if (lineData.value.length > 0) {
    lineData.value = lineData.value.slice(0, -1);
  }
};

const handleRandomize = () => {
  lineData.value = lineData.value.map((_item, index) => [
    randomValue(10),
    index,
  ]);
};

const handleReset = () => {
  lineData.value = [...initialLineData];
};
</script>
