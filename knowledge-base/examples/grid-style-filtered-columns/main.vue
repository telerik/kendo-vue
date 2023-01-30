<template>
    <Grid :data-items="products" :filterable="true" :filter="filter" @filterchange="filterChange" :columns="columns"
        :loader="loader">
    </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

export default {
    components: {
        Grid: Grid,
    },
    data: function () {
        return {
            sampleProducts: sampleProducts,
            loader: false,
            filter: {
                logic: 'and',
                filters: [
                    { field: 'UnitPrice', operator: 'neq', value: 18 },
                    {
                        field: 'FirstOrderedOn',
                        operator: 'gte',
                        value: new Date('1996-10-10'),
                    },
                ],
            },
        };
    },
    computed: {
        products: function () {
            return filterBy(this.sampleProducts, this.filter);
        },
        columns: function () {
            const columns = [
                {
                    field: 'ProductID',
                    filterable: false,
                    title: 'Product ID',
                    width: '50px',
                },
                { field: 'ProductName', title: 'Product Name' },
                { field: 'FirstOrderedOn', filter: 'date', title: 'First Ordered On' },
                { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
                { field: 'Discontinued', filter: 'boolean', title: 'Discontinued' },
            ].map((col) => {
                return this.isFiltered(col)
                    ? {
                        ...col,
                        headerClassName: 'filtered',
                    }
                    : col;
            });
            return columns;
        },
    },
    methods: {
        isFiltered(col) {
            const filters = this.filter ? this.filter.filters : [];
            return filters.findIndex((f) => f.field === col.field) >= 0;
        },
        filterChange: function (ev) {
            this.loader = true;
            // The idea behind using the following setTimeout method is to
            // demonstrate how we can show a loader while fetching data.
            // In real-life scenarios with remote data binding, the 'loader'
            // property should be updated before making a server request
            // and after the request completes.
            setTimeout(() => {
                this.filter = ev.filter;
                this.loader = false;
            }, 300);
        },
    },
};
</script>
<style>
.filtered {
    background-color: red;
}
</style>