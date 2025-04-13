<template>
    <Grid  
        :style="{width: '620px', height: '400px'}"
        :scrollable="'virtual'"
        :column-virtualization="true"
        :skip="skip"
        :take="take"
        :total="numberOfRows"
        :data-items="products"
        :columns = "columns"
        @pagechange = "pageChange">
    </Grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
    components: {
        'Grid': Grid
    },
    created () {
        this.numberOfColumns = 100;
        this.numberOfRows = 100000;
        this.columns = this.getColumns();
        this.products = this.tempProducts = this.getData(this.skip, this.take);
    },
    data: function () {
        return {
            tempProducts: [],
            products: [],
            columns: [],
            skip: 0, 
            take: 15
        };
    },
    methods: {
        getColumns() {
            const cols = [];
            for (let c = 1; c <= this.numberOfColumns; c++) {
                cols.push({ field: 'Field-' + c.toString(), width: 150 });
            }
            return cols;
        },
        pageChange(event) {
            this.skip = event.page.skip;
            this.take = event.page.take;
            this.products = this.getData(event.page.skip, event.page.take);
        },
        getData(skip, take) {
            const page = [];
            for (let r = skip + 1; r <= skip + take && r <= this.numberOfRows; r++) {
                const row = {};
                for (let c = 1; c <= this.numberOfColumns; c++) {
                    row['Field-' + c] = 'R' + r + ':C' + c;
                }
                page.push(row);
            }
            return page;
        }
    }
};

</script>
