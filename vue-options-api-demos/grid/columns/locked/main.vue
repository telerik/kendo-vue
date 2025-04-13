<template>
    <grid  
        :style="{height: '400px', width: '500px'}"
        :data-items="products"
        :reorderable="true"
        @columnreorder="columnReorder"
        :columns = "columns"
    >
    </grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { products } from './products'

export default {
    components: {
        'grid': Grid
    },
     data: function () {
        return {
            products: this.createRandomData(),
            columns: [
                { field: 'ProductID', title: 'ID', width: '45px', locked: true},
                { field: 'ProductName', title: 'Name', width: '250px' },
                { field: 'Category.CategoryName', title: 'CategoryName' },         
                { field: 'UnitPrice', title: 'Price', width: '90px' },
                { field: 'UnitsInStock', title: 'In stock', width: '90px' },
                { field: 'UnitsOnOrder', title: 'On order', width: '90px' },
                { field: 'Discontinued', locked: true , width: '120px' },
                { field: 'QuantityPerUnit', title: 'Additional details', width: '250px' }
            ]
        };
    },
    methods: {
        columnReorder: function(options) {
            this.columns = options.columns;
        },
       createRandomData() {
           return products;
        }
    }
};

</script>
