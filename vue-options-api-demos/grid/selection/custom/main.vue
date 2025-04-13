<template>
  <Grid
        ref="grid"
        :style="{height: '520px'}"
        :data-items="products"
        :selected-field="selectedField"
        :columns="columns"
        @selectionchange="onSelectionChange"
        @headerselectionchange="onHeaderSelectionChange"
        @rowclick="onRowClick">
    </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { products } from './products';

export default {
    components: {
        'Grid': Grid
    },
    data: function () {
        return {
            selectedField: 'selected',
            products: products.map(item => { return {...item, selected: false} }),
            staticColumns: [
                { field: 'ProductID', title: 'ID', width: '50px' },
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
                { field: 'UnitsInStock', title: 'Units In Stock' }
            ]
        };
    },
    computed: {
        areAllSelected () {
            return this.products.findIndex(item => item.selected === false) === -1;
        },
        columns () {
            return [
                { field: 'selected', width: '50px', headerSelectionValue: this.areAllSelected },
                ...this.staticColumns
            ]
        }
    },
    methods: {
        onHeaderSelectionChange (event) {
            let checked = event.event.target.checked;
            this.products = this.products.map((item) => { return {...item, selected: checked} });
        },
        onSelectionChange (event) {
            event.dataItem[this.selectedField] = !event.dataItem[this.selectedField];
        },
        onRowClick (event) {
            event.dataItem[this.selectedField] = !event.dataItem[this.selectedField];
        },
        createRandomData(count) {
            return
        }
    }
};

</script>
