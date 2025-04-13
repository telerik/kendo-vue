<template>
 <div class="example-config">
        <div>
            <input
                type="checkbox"
                class="k-checkbox k-checkbox-md k-rounded-md"
                id="unsort"
                :checked= "allowUnsort"
                @change="changeHandler"
            />
            <label for="unsort"
                class="k-checkbox-label"
                :style="{lineHeight: '1.2', marginBottom: '1em'}">
                Enable unsorting
            </label>
            <br />
            <input
                type="checkbox"
                class="k-checkbox k-checkbox-md k-rounded-md"
                id="multiSort"
                :checked="multiple"
                @change="changeMultiHandler"
            />
            <label for="multiSort"
                class="k-checkbox-label"
                :style="{lineHeight: '1.2'}">
                Enable multiple columns sorting
            </label>
        </div>
        <Grid
            :style="{height: '300px'}"
            :data-items="result"
            :sortable="sortable"
            :sort= "sort"
            @sortchange="sortChangeHandler"
            :columns = "columns">
        </Grid>
    </div>
</template>
<script>
import { orderBy } from '@progress/kendo-data-query';
import { Grid } from '@progress/kendo-vue-grid';

export default {
    components: {
        'Grid': Grid
    },
    data: function () {
        return {
            allowUnsort: true,
            multiple: false,
            sort: [
                { field: 'ProductName', dir: 'asc' }
            ],
            columns: [
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price' }
            ]
        };
    },
    computed: {
        sortable() {
            return {
                allowUnsort: this.allowUnsort,
                mode: this.multiple ? 'multiple' : 'single'
            };
        },
        result: {
            get: function() {
                return orderBy(this.createRandomData(500), this.sort);
            }
        }
    },
    methods: {
        changeHandler: function (e) {
            this.allowUnsort = e.target.checked;
        },
        changeMultiHandler: function (e) {
            this.multiple = e.target.checked;
        },
        sortChangeHandler: function(e) {
            this.sort = e.sort;
        },
        createRandomData(count) {
            const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
            const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];
            const units = [2, 7, 12, 25,  67, 233, 123, 53, 67, 89];

            return Array(count).fill({}).map((_, idx) => ({
                ProductID: idx + 1,
                ProductName: productNames[Math.floor(Math.random() * productNames.length)],
                UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
                UnitsInStock: units[Math.floor(Math.random() * units.length)]
            }));
        }
    }
};

</script>
