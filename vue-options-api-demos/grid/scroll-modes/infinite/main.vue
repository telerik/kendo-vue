<template>
 <Grid style="height: 400px;"
                :data-items="gridData"
                :columns="columns"
                @scroll="scrollHandler">
        </Grid>
        <br />
        showing: {{gridData.length}} items
</template>
<script>
import { orderBy } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';
import products from './products.json';

const availableProducts = products.slice();
export default {
    components: {
        'Grid': Grid
    },
    data: function () {
        return {
            gridData: availableProducts.splice(0, 20),
            columns: [
                { field: 'ProductID', title:'ID', width:'40px'},
                { field: 'ProductName',  title:'Name', width:'250px'},
                { field: 'Discontinued', width:'250px'},
                { field: 'UnitPrice', width:'250px'},
                { field: 'QuantityPerUnit', width:'250px'},
                { field: 'Category.CategoryName', width:'250px'}
            ]
        };
    },
    methods: {
        scrollHandler: function(event){
            const e = event;
            if (e.target.scrollTop + 10 >= e.target.scrollHeight - e.target.clientHeight) {
                const moreData = availableProducts.splice(0, 10);
                if (moreData.length > 0) {
                    this.gridData = this.gridData.concat(moreData);
                }
            }
        }
    }
};

</script>
