<template>
        <grid
            :style="{height: '280px'}"
            :data-items="items"
            :columns="columns"
            >
            <template v-slot:myCellTemplate="{props}">
                    <td :style="cellBackground(props.dataItem)">
                            {{props.dataItem[props.field]}} 
                            <span v-if="props.dataItem.UnitPrice < 15">
                                <span className="k-icon k-i-sort-desc-sm" />
                            </span>
                            <span v-else>
                                <span className="k-icon k-i-sort-asc-sm" />
                            </span>
                    </td>
            </template>
        </grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import products from "./products.json";

export default {
    components: {
        'grid': Grid
    },
    data: function () {
        return {
            columns: [
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price', cell:"myCellTemplate"  },
                { field: 'UnitsOnOrder', title: 'Units On Order' },
                { field: 'ReorderLevel', title: 'Reorder Level' }
            ],
            items: products
        };
    },
    methods: {
        cellBackground: function(dataItem){
            const examplePrice = dataItem.UnitPrice < 15;

            return {
                "background-color": examplePrice 
                    ? "rgb(243, 23, 0, 0.32)" 
                    : "rgb(55, 180, 0,0.32)"};
        }      
    }
};

</script>
