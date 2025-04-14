<template>
    <div>
        <pdfexport ref="gridPdfExport">
            <grid
                :data-items="items"
                :skip= "skip"
                :take="take"
                :total="total"
                :pageable="pageable"
                :page-size="pageSize"
                @pagechange="pageChangeHandler"
                :columns = "columns">
                <toolbar>
                    <kbutton @click="exportPDFWithComp" :theme-color="'primary'">Export to PDF the first two columns(Current page)</kbutton>&nbsp;
                    <kbutton @click="exportPDFWithComp('all')" :theme-color="'primary'">Export to PDF the first two columns(All Grid data)</kbutton>&nbsp;
                </toolbar>
            </grid>
        </pdfexport>
    </div>
</template>
<script>
import { GridPdfExport } from '@progress/kendo-vue-pdf';
import { Grid, GridToolbar  } from '@progress/kendo-vue-grid';
import { Button } from '@progress/kendo-vue-buttons';

export default {
    components: {
        'grid': Grid,
        'pdfexport': GridPdfExport,
        'toolbar': GridToolbar,
        'kbutton': Button
    },
   data: function () {
        return {
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
                { field: 'UnitPrice', title: 'Unit Price' },
                { field: 'Discontinued', title: 'Discontinued' }
            ],
            columnsToExport: [
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name' },
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
        exportPDFWithComp: function(pagesToExport) {
            const defaultColumns = this.columns;

            this.columns = this.columnsToExport;

            const itemsToExport = pagesToExport!=="all" ? this.items : this.products;

            (this.$refs.gridPdfExport).save(itemsToExport);
            this.columns = defaultColumns;
        },
        pageChangeHandler: function(event) {
            this.skip = event.page.skip;
            this.take = event.page.take;
        },
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];
            const discontinued = [true, false];

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
                Discontinued: discontinued[Math.floor(Math.random() * discontinued.length)]
            }));
        }
    },
    mounted() {
        this.products = this.createRandomData(1000);
    }
};

</script>
