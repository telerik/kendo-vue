<template>
  <grid
            :style="{height: '280px'}"
            :data-items="items"
            :cell-render="cellTemplate"
            :columns="columns"
            @custom="customHandler">
      </grid>
</template>
<script>
import { markRaw } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import ComponentInstance from './ComponentInstance.vue';

export default {
    components: {
        'grid': Grid
    },
    data: function () {
        return {
            cellTemplate: markRaw(ComponentInstance),
            columns: [
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price' }
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
        }
    }
};

</script>
