<template>
<div>
     <datasource :ref="'datasource'"
                      :transport-read-data-type="'jsonp'"
                      :transport-read-url="'https://demos.telerik.com/kendo-ui/service/StockData'"
                      :schema-model-fields="fields">
    </datasource>
    <stockchart :data-source-ref="'datasource'"
                      :date-field="'Date'"
                      :title-text="'The Boeing Company NYSE:BA'"
                      :category-axis-labels-rotation="'auto'"
                      :navigator-series="navigatorSeries"
                      :navigator-select-from="'2009/02/05'"
                      :navigator-select-to="'2011/10/07'"
                      :navigator-category-axis-labels-rotation="'auto'"
                      :theme="'sass'">
        <chart-series-item :type="'candlestick'"
                                 :open-field="'Open'"
                                 :high-field="'High'"
                                 :low-field="'Low'"
                                 :close-field="'Close'">
        </chart-series-item>
    </stockchart>
</div>
</template>

<script>
import { StockChart, ChartSeriesItem } from '@progress/kendo-charts-vue-wrapper';
import { DataSource } from '@progress/kendo-datasource-vue-wrapper';

export default {
    name: 'App',
    components: {
        'stockchart': StockChart,
        'chart-series-item': ChartSeriesItem,
        'datasource': DataSource
    },
    data: function() {
        return {
            fields: {
                Date: { type: 'date' }
            },
            navigatorSeries: {
                type: 'area',
                field: 'Close'
            }
        }
    }
}
</script>
