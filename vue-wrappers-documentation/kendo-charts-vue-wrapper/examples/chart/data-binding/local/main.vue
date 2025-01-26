<template>
<div>
    <chart :data-source="dataSourceArray"
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
        'chart': Chart,
    },
    data: function() {
        return {
            dataSourceArray: [{
                price: 10
            }, {
                price: 20
            }, {
                price: 30
            }],
            series: [{ field: "price" }]
        }
    }
}
</script>
