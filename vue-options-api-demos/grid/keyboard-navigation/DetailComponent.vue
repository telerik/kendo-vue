<template>
<grid :data-items="getFilteredProducts"
                     :columns="columns"
                     :navigatable="true">
               </grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { filterBy } from '@progress/kendo-data-query';
import { products } from './products';

export default {
    components: {
        grid: Grid
    },
    props: {
        dataItem: Object
    },
    data () {
        return {
            products: products,
            columns: [
                { field: 'ProductID', filterable: false, title: 'ID', width: '50px' },
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
                { field: 'UnitsInStock', title: 'Units In Stock' },
                { field: 'Category.CategoryName', title: 'Category Name' }
            ]
        }
    },
    computed: {
        getFilteredProducts() {
            const result = filterBy(this.products, {field: 'Category.CategoryID', operator: 'eq', value: this.dataItem.CategoryID});

            return result;
        }
    }
}
</script>
