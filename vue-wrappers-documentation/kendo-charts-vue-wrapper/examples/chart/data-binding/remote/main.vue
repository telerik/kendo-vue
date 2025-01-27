<template>
<div>
    <k-datasource ref="datasource"
                      :transport-read-data-type="'jsonp'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/stockdata'">
    </k-datasource>
    <chart :data-source-ref="'datasource'"
                 :series="series"
                 :theme="'sass'">
    </chart>
</div>
</template>

<script>
import { Chart } from '@progress/kendo-charts-vue-wrapper';
import { DataSource} from '@progress/kendo-datasource-vue-wrapper';

export default {
    name: 'App',
    components: {
        'chart': Chart,
        'k-datasource': DataSource,
    },
    data: function() {
        return {
            series: [{ field: "Volume" }]
        }
    }
}
</script>
