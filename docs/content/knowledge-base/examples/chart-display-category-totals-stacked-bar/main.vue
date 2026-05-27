<template>
    <div class="example-wrapper">
        <Chart :style="{ height: '400px' }">
            <ChartTitle :text="'Stacked Bar Chart with Category Totals'" />
            <ChartTooltip :visible="true" :render="'tooltipRender'">
                <template #tooltipRender="{ props }">
                    <span v-if="props && props.series.name !== 'Total'">
                        {{ props.series.name }}: {{ props.value }}
                    </span>
                </template>
            </ChartTooltip>
            <ChartLegend :position="'bottom'" :orientation="'horizontal'" />
            <ChartCategoryAxis>
                <ChartCategoryAxisItem :categories="categories">
                    <ChartCategoryAxisTitle :text="'Categories'" />
                </ChartCategoryAxisItem>
            </ChartCategoryAxis>
            <ChartSeries>
                <ChartSeriesItem
                    :name="'Product A'"
                    :type="'bar'"
                    :stack="true"
                    :data-items="firstSeries"
                    :color="'#0058e9'"
                />
                <ChartSeriesItem
                    :name="'Product B'"
                    :type="'bar'"
                    :stack="true"
                    :data-items="secondSeries"
                    :color="'#28b4c8'"
                />
                <ChartSeriesItem
                    :name="'Product C'"
                    :type="'bar'"
                    :stack="true"
                    :data-items="thirdSeries"
                    :color="'#78d237'"
                />
                <!-- Zero-value series for displaying totals -->
                <ChartSeriesItem
                    :name="'Total'"
                    :type="'bar'"
                    :stack="true"
                    :data-items="totalsSeries"
                    :color="'transparent'"
                >
                    <ChartSeriesLabels
                        :visible="true"
                        :position="'right'"
                        :color="'#111'"
                        :background="'transparent'"
                        :content="labelContent"
                        :font="'bold 12px Arial'"
                    />
                </ChartSeriesItem>
            </ChartSeries>
        </Chart>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisTitle,
    ChartTitle,
    ChartLegend,
    ChartTooltip,
} from '@progress/kendo-vue-charts';

// Sample data for three series
const firstSeries = ref([10, 20, 15, 25, 18]);
const secondSeries = ref([12, 15, 18, 20, 22]);
const thirdSeries = ref([8, 10, 12, 15, 10]);

const categories = ref(['Q1', 'Q2', 'Q3', 'Q4', 'Q5']);

// Compute totals for each category
const computeTotals = (seriesData: number[][]) => {
    const numCategories = seriesData[0].length;
    return Array.from({ length: numCategories }, (_, idx) =>
        seriesData.reduce((sum, series) => sum + (series[idx] || 0), 0)
    );
};

const totals = computed(() => computeTotals([firstSeries.value, secondSeries.value, thirdSeries.value]));

// Create zero-value series with totals as metadata
const totalsSeries = computed(() =>
    totals.value.map((total) => ({
        value: 0,
        total: total,
    }))
);

// Label content function to display the total
const labelContent = (e: any) => {
    return e.dataItem.total;
};
</script>
