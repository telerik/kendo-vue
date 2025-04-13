<template>
  <Grid
        :style="{height: '420px'}"
        :data-items="products"
        :resizable="true"
        :reorderable="true"
        @columnreorder="columnReorder"
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
                { field: 'ProductID', title: 'ID', width: '40px', resizable: 'false'},
                { title: 'Product Informaiton', children: [
                    { field: 'ProductName', title: 'Name' },
                    { title: 'Unit', children: [
                            { field: 'UnitPrice', title: 'Price' },
                            { field: 'UnitsInStock', title: 'In stock' }
                        ]
                    }
                ]}
            ]
        };
    },
    methods: {
        columnReorder: function(options) {
            this.columns = options.columns;
        },
        createRandomData(count) {
            const productNames = ["Aniseed Syrup", "Chef Anton's Cajun Seasoning", "Chef Anton's Gumbo Mix", "Grandma's Boysenberry Spread", "Uncle Bob's Organic Dried Pears", "Northwoods Cranberry Sauce", "Mishi Kobe Niku"];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];
            const units = [5, 1, 54, 555, 16, 293, 654, 42, 89, 90, 32, 293, 412]

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
                UnitsInStock: units[Math.floor(Math.random() * units.length)],
            }));
        }
    }
};

</script>
