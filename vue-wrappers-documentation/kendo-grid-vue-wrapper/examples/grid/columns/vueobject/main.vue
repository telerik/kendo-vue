<template>
 <kendo-grid :data-source="localDataSource" :columns="columns">
    </kendo-grid>
</template>
<script>
import { Grid } from '@progress/kendo-grid-vue-wrapper';

export default {
    components: {
        'kendo-grid': Grid
    },
    data: function () {
		return {
            columns: [
                { field: "ProductName", width:"180px" },
                { field: "UnitPrice", title: "Unit Price", format: "{0:c}", width: "120px" },
                { field: "UnitsInStock", title:"Units In Stock", width: "120px" },
                { field: "Discontinued", width: "120px" }
            ],
            localDataSource: [{
                    'ProductID':1,
                    'ProductName':'Chai',
                    'UnitPrice':18,
                    'UnitsInStock':39,
                    'Discontinued':false
                },
                {
                    'ProductID':2,
                    'ProductName':'Chang',
                    'UnitPrice':19,
                    'UnitsInStock':17,
                    'Discontinued':false
                }
            ]
        };
    }
}
</script>