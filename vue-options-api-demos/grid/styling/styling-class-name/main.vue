<template>
        <grid
            :style="{height: '280px'}"
            :data-items="items"
            :columns="columns"
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
                { field: 'ProductID', title: 'ID', width: "40px" },
                { field: 'ProductName', title: 'Product Name', className: "product-name " },
                { field: 'Category.CategoryName', title: 'CategoryName' },
                { field: 'UnitPrice', title: 'Price'  },
                { field: 'UnitsInStock', title: 'In stock' }
            ],
            items: products.slice(0, 6)
        };
    }
};

</script>

<style>
    .product-name {
        color: #F0FFFF;
        background-color: #888888;
    }
</style>