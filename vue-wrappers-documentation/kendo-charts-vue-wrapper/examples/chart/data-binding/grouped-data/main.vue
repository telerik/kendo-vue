<template>
<div>
    <k-datasource ref="datasource"
                    :data="dataSourceArray"
                    :group-field="'category'">
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
            dataSourceArray: [
                { value: 1, category: 'One', title: 'Series One' },
                { value: 2, category: 'Two', title: 'Series Two' }
            ],
            series: [{
                field: 'value',
                name: "Category: #: group.items[0].title #"
            }]
        }
    }
}
</script>
