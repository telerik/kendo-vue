<template>
<div>
    <chart ref="chart"
            :title-text="'Inventory'"
            :legend-visible="false"
            :series="series"
            :category-axis-categories="categories"
            :category-axis-labels-rotation="'auto'"
            :axis-defaults-major-grid-lines-visible="false"
            :theme="'sass'">
    </chart>
</div>
</template>

<script>
import { Chart } from '@progress/kendo-charts-vue-wrapper';

export default {
    name: 'App',
    components: {
        'chart': Chart
    },
    data: function() {
        return {
            area: {
                line: {
                    style: 'smooth'
                }
            },
            series: [{
                type: 'waterfall',
                data: [180, -60, -20, 10, 30],
                labels: {
                    visible: true
                }
            }],
            categories: [
                'In stock',
                'Damaged',
                'Reserved',
                'In transit',
                'Refurbished'
            ]
        }
    }
}
</script>
