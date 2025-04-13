<template>
        <grid
            :style="{height: '280px'}"
            :data-items="items"
            :columns="columns"
            @custom="customHandler">
      </grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
    components: {
        'grid': Grid
    },
     data: function () {
        return {
            columns: [
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price', 
                headerCell: this.headerCellFunction }
            ],
            items: [{
                "ProductID": 1,
                "ProductName": "Chai",
                "UnitPrice": 18.0000,
            },
            {
                "ProductID": 2,
                "ProductName": "Chang",
                "UnitPrice": 19.0000,
            },
            {
                "ProductID": 3,
                "ProductName": "Aniseed Syrup",
                "UnitPrice": 10.0000,
            },
            {
                "ProductID": 4,
                "ProductName": "Chef Anton's Cajun Seasoning",
                "UnitPrice": 22.0000,
            }]
        };
    },
    methods: {
        customHandler: function(e){
            console.log('customHandler', e);
        },
        headerCellFunction: function (h, emptyElement , props, listeners ) {
            return h('span', {
                onClick: this.customHandler
            }, ['custom ' + props.field]);
        },
    }
};

</script>
