<template>
<div>
  Selected Item:  {{selectedItem && selectedItem.ProductID}} , {{selectedItem && selectedItem.ProductName}}
        <Grid
        ref="grid"
        :style="{height: '520px'}"
        :data-items="items"
        :selected-field="selectedField"
        :columns="columns"
        @rowclick="onRowClick">
    </Grid>
</div>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
    components: {
        'Grid': Grid
    },
    data: function () {
        return {
            selectedField: 'selected',
            selectedID: 1,
            products: [],
            columns: [
                { field: 'ProductID', title: 'ID', width: '50px' },
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
                { field: 'UnitsInStock', title: 'Units In Stock' }
            ]
        };
    },
    computed: {
        items () {
            return this.products.map((item) => ({ ...item, selected: item.ProductID === this.selectedID }));
        },
        selectedItem () {
            return this.products.find((item) => item.ProductID === this.selectedID);
        }
    },
    methods: {
        onRowClick (event) {
            this.selectedID = event.dataItem.ProductID;
        },
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
                UnitsInStock: Math.floor(Math.random() * 100)
            }));
        }
    },
     mounted() {
        this.products = this.createRandomData(1000);
    }
};

</script>
