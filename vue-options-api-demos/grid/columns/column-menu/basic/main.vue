<template>
  <Grid
        :data-items="gridData"
        :take="take"
        :skip="skip"
        :sortable="true"
        :sort= "sort"
        :filter="filter"
        @datastatechange="dataStateChange"
        :pageable="true"
        :column-menu="columnMenu"
        :columns="columns"
    >
    </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import { process } from '@progress/kendo-data-query';
import { products } from './products';

export default {
    components: {
        'Grid': Grid
    },
   data: function () {
        return {
            columnMenu: true,
            columns: [
                { field: 'ProductID', title: 'ID',
                filter: 'numeric'},
                { field: 'ProductName', title: 'Name'},
                { field: 'UnitPrice', filter: 'numeric'},
                { field: 'Discontinued', filter: 'boolean'}
            ],
            take: 10,
            skip: 0,
            gridData: [],
            sort: [],
            filter: null
        };
    },
   created: function() {
        this.getData();
    },
    methods: {
        getData: function () {
            let dataState = {
                take: this.take,
                skip: this.skip,
                filter: this.filter,
                sort: this.sort
            };
            this.gridData = process(products, dataState);
        },
        createAppState: function(dataState) {
            this.take = dataState.take;
            this.skip = dataState.skip;
            this.sort = dataState.sort;
            this.filter = dataState.filter;
            this.getData();
        },
        dataStateChange: function (event) {
            this.createAppState(event.data);
        }
    }
};

</script>
