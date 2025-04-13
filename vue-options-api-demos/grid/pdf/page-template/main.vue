<template>
<div>
     <kbutton @click="exportPDFWithComp">Export pdf via a component</kbutton>
    <pdfexport ref="gridPdfExport" :margin="'1cm'" :paper-size="'a4'"  :page-template="pageTemplate">
        <Grid
            :data-items="items"
            :skip= "skip"
            :take="take"
            :total="total"
            :pageable="pageable"
            :page-size="pageSize"
            @pagechange="pageChangeHandler"
            :columns = "columns">
        </Grid>
    </pdfexport>
</div>
</template>
<script>
import { markRaw, h } from 'vue';
import { GridPdfExport } from '@progress/kendo-vue-pdf';
import { Grid } from '@progress/kendo-vue-grid';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'Grid': Grid,
        'pdfexport': GridPdfExport,
        'kbutton': Button
    },
  data: function () {
        return {
            pageTemplate: markRaw({
                props: {
                    pageNum: Number,
                    totalPages: Number
                },
                render: function() {
                    return h('div',{
                        style: {position: 'absolute', top: '10px', left: '10px'}
                    },['Page' + this.$props.pageNum + ' of' + this.$props.totalPages])
                }
                // template: `<div style="position: absolute; top: 10px; left: 10px">Page {{pageNum}} of {{totalPages}}</div>`
            }),
            skip: 0,
            take: 10,
            products: [],
            pageSize: 10,
            pageable: {
                buttonCount: 5,
                info: true,
                type: 'numeric',
                pageSizes: true,
                previousNext: true
            },
            columns: [
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price' }
            ]
        };
    },
    computed: {
        items: {
            get: function() {
                return this.products.slice(this.skip, this.take + this.skip);
            }
        },
         total () {
            return this.products ? this.products.length : 0;
        }
    },
    methods: {
        exportPDFWithComp: function() {
            (this.$refs.gridPdfExport).save(this.products);
        },
        pageChangeHandler: function(event) {
            this.skip = event.page.skip;
            this.take = event.page.take;
        },
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
            }));
        }
    },
    mounted() {
        this.products = this.createRandomData(1000);
    }
};

</script>
