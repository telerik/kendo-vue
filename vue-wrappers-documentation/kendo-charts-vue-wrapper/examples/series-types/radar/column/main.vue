<template>
<div>
    <chart ref="chart"
            :title-text="'Nutrient balance: Apples, raw'"
            :legend-visible="false"
            :value-axis-visible="false"
            :category-axis-categories="categories"
            :theme="'sass'">
            <chart-series-item :type="'radarColumn'" :name="'Nutrients'" :data="nutrientsData"></chart-series-item>
    </chart>
</div>
</template>

<script>
import { Chart, ChartSeriesItem } from '@progress/kendo-charts-vue-wrapper';

export default {
    name: 'App',
    components: {
        'chart': Chart,
        'chart-series-item': ChartSeriesItem
    },
    data: function() {
        return {
            nutrientsData: [
                5, 1, 1, 5, 0, 1,
                1, 2, 1, 2, 1, 0,
                0, 2, 1, 0, 3, 1,
                1, 1, 0, 0, 0
            ],
            categories: [
                "Df", "Pr", "A", "C", "D", "E",
                "Th", "Ri", "Ni", "B", "F", "B",
                "Se", "Mn", "Cu", "Zn", "K", "P",
                "Fe", "Ca", "Na", "Ch", "Sf"
            ]
        }
    }
}
</script>
