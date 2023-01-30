<template>
 <Grid
        :data-items="products"
        :columns="columns"
        :cell-render="myCellTemplate">
        <template v-slot:myTemplate="{props}">
            <td :rowspan=2 v-if="props.field === 'Discontinued' && props.dataItem.ProductID % 2 !== 0">{{ getNestedValue(props.field, props.dataItem) }}</td>

            <td v-else-if="props.field !== 'Discontinued'" :class="props.className">{{ getNestedValue(props.field, props.dataItem) }}</td>
        </template>
    </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import products from "./products.json";

export default {
    components: {
        'Grid': Grid
    },
    data: function () {
        return {
        products: products,
        myCellTemplate: 'myTemplate',
        columns: [
                { field: 'ProductID', title: 'Product ID', width:'50px'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'Category.CategoryName', title: 'CategoryName'},
                { field: 'UnitPrice', title: 'Unit Price'},
                { field: 'UnitsInStock', title: 'In Stock'},
                { field: 'Discontinued', title: 'Discontinued'}
            ]
        }
    },
    methods: {
        getNestedValue: function(fieldName, dataItem) {
            const path = fieldName.split('.');
            let data = dataItem;
            path.forEach((p) => {
                data = data ? data[p] : undefined;
            });

            return data;
        }
    }
};

</script>
