<template>
 <Grid
    ref="grid"
    :style="{height: '550px'}"
    :data-items="categories"
    :detail="cellTemplate"
    @expandchange="expandChange"
    :expand-field="'expanded'">
    <template v-slot:myTemplate="{props}">
        <custom :data-item="props.dataItem" />
    </template>
 </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { products } from './products';
import DetailComponent from './DetailComponent.vue';

export default {
    components: {
        'Grid': Grid,
        custom: DetailComponent
    },
    data: function () {
        return {
            cellTemplate: 'myTemplate',
            products: products,
            categories: [
                {CategoryID: 1, CategoryName: 'Beverages', Descriptions: 'Soft drinks, coffees, teas, beers, and ales'},
                {CategoryID: 2, CategoryName: 'Condiments', Descriptions: 'Sweet and savory sauces, relishes, spreads, and seasonings'},
                {CategoryID: 3, CategoryName: 'Confections', Descriptions: 'Desserts, candies, and sweet breads'},
                {CategoryID: 4, CategoryName: 'Dairy Products', Descriptions: 'Cheeses'},
                {CategoryID: 5, CategoryName: 'Grains/Cereals', Descriptions: 'Breads, crackers, pasta, and cereal'},
                {CategoryID: 6, CategoryName: 'Meat/Poultry', Descriptions: 'Prepared meats'},
                {CategoryID: 7, CategoryName: 'Produce', Descriptions: 'Dried fruit and bean curd'},
                {CategoryID: 8, CategoryName: 'Seafood', Descriptions: 'Seaweed and fish'}
            ]
        };
    },
    methods: {
        expandChange: function (event) {
            event.dataItem[event.target.$props.expandField] = event.value;
            //
            // In Vue 2 context, instead of the above line, inside the expandChange method we should have the following:
            //
            //   Vue.set(
            //     event.dataItem,
            //     event.target.$props.expandField,
            //     event.dataItem.expanded === undefined ? false : !event.dataItem.expanded
            //   );
            //
        },
        getFilteredProducts(catId) {
            const result = filterBy(products, {field: 'Category.CategoryID', operator: 'eq', value: catId});

            return result;
        }
    }
};

</script>
