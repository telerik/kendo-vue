<template>
<div>
    <chart ref="chart"
            :title-text="'Polar plot'"
            :legend-position="'bottom'"
            :series-defaults-type="'polarLine'"
            :series-defaults-style="'smooth'"
            :series="series"
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
            series: [{
                data: [
                    [0, 0], [15, 2], [30, 4],
                    [45, 6], [60, 8], [75, 10],
                    [90, 12], [105, 14], [120, 16],
                    [135, 18], [150, 20], [165, 22],
                    [180, 24], [195, 26], [210, 28],
                    [225, 30], [240, 32], [255, 34],
                    [270, 36], [285, 38], [300, 40],
                    [315, 42], [330, 44], [345, 46],
                    [360, 48], [15, 50], [30, 52],
                    [45, 54], [60, 56], [75, 58], [90, 60]
            ]},
            {
                data: [
                    [0, 0], [15, 1], [30, 2],
                    [45, 3], [60, 4], [75, 5],
                    [90, 6], [105, 7], [120, 8],
                    [135, 9], [150, 10], [165, 11],
                    [180, 12], [195, 13], [210, 14],
                    [225, 15], [240, 16], [255, 17],
                    [270, 18], [285, 19], [300, 20],
                    [315, 21], [330, 22], [345, 23],
                    [360, 24], [15, 25], [30, 26],
                    [45, 27], [60, 28], [75, 29], [90, 30]
            ]},
            {
                data: [
                    [0, 0], [15, 3], [30, 6],
                    [45, 9], [60, 12], [75, 15],
                    [90, 18], [105, 21], [120, 24],
                    [135, 27], [150, 30], [165, 33],
                    [180, 36], [195, 39], [210, 42],
                    [225, 45], [240, 48], [255, 51],
                    [270, 54], [285, 57], [300, 60],
                    [315, 63], [330, 66], [345, 69],
                    [360, 72], [15, 75], [30, 78],
                    [45, 81], [60, 84], [75, 87], [90, 90]
            ]}]
        }
    }
}
</script>
