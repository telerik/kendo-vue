<template>
        <grid
            :style="{height: '400px'}"
            :data-items="items"
            :columns="columns"
            :row-render="cellFunction"
            >
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
                { field: 'UnitPrice', title: 'Price'  },
                { field: 'UnitsInStock', title: 'In stock' },
                { field: 'Discontinued'},
            ],
            items: products
        };
    },
    methods: {
        cellFunction: function (h, trElement , defaultSlots, props ) {
            const available = !props.dataItem.Discontinued;
            const green = {
                backgroundColor: "rgb(55, 180, 0,0.32)",
            };
            const red = {
                backgroundColor: "rgb(243, 23, 0, 0.32)",
            };
            const trProps = {
                style: available ? green : red,
            };
   
            return h(
                'tr',
                trProps,
                defaultSlots);
        }
    }
};

</script>
