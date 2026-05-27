<template>
    <div>
        <Chart>
            <ChartTitle text="Daily Max (&deg;C)" />
            <ChartSeries>
                <ChartSeriesItem type="column" field="TMax" categoryField="Date" :data-items="data" />
            </ChartSeries>
            <ChartCategoryAxis>
                <ChartCategoryAxisItem :labels="{ content: labelContent }" />
            </ChartCategoryAxis>
        </Chart>
    </div>
</template>

<script setup>
import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
} from '@progress/kendo-vue-charts';
import { mockData } from './ch-weather-data.js';

const data = mockData();

const desiredLabelCount = 10;
const totalCategories = data.length;
const step = Math.floor(totalCategories / desiredLabelCount);

const labelContent = (e) => {
    // Show a label only if the index is a multiple of the calculated step
    if (e.index % step === 0 && e.index / step < desiredLabelCount) {
        return e.text;
    }
    return '';
};
</script>
