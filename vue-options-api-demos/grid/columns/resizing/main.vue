<template>
   <Grid
        :style="{height: '400px'}"
        :data-items="products"
        :resizable="true"
        :columns = "columns">
    </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
    components: {
        'Grid': Grid
    },
    data: function () {
        return {
            products: this.createRandomData(500),
            columns: [
                { field: 'ProductID', title: 'ID', width: '45px', minResizableWidth: '30'},
                { field: 'ProductName', title: 'Name', width: '250px' },
                { field: 'UnitPrice', title: 'Price', width: '80px' }
            ]
        };
    },
    methods: {
        createRandomData(count) {
            const productNames = ["Aniseed Syrup", "Chef Anton's Cajun Seasoning", "Chef Anton's Gumbo Mix", "Grandma's Boysenberry Spread", "Uncle Bob's Organic Dried Pears", "Northwoods Cranberry Sauce", "Mishi Kobe Niku"];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
            }));
        }
    }
};

</script>
