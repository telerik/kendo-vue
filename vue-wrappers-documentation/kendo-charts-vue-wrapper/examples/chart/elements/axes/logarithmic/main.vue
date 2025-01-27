<template>
<div>
    <chart :title-text="'Fibonacci sequence'"
                :series="series"
                :value-axis-type="'log'"
                :value-axis-minor-grid-lines-visible="true"
                :tooltip-visible="true"
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
                data: this.fibonacciSequence(39)
            }]
        }
    },
    methods: {
        fibonacciSequence: function(n) {
            var data = [1, 1];

            for (var i = 2; i < n; i++) {
                data.push(data[i - 1] + data[i - 2]);
            }

            return data;
        }
    }
}
</script>
