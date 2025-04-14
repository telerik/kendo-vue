<template>
        <grid
            :style="{height: '280px'}"
            :data-items="items"
            :columns="columns">
      </grid>
</template>
<script>
import { markRaw } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
const items = [{
                "ProductID": 1,
                "ProductName": "Chai",
                "UnitPrice": 18.0000,
            },
            {
                "ProductID": 2,
                "ProductName": "Chang",
                "UnitPrice": 19.0000,
            },
            {
                "ProductID": 3,
                "ProductName": "Aniseed Syrup",
                "UnitPrice": 10.0000,
            },
            {
                "ProductID": 4,
                "ProductName": "Chef Anton's Cajun Seasoning",
                "UnitPrice": 22.0000,
            }];

const headerTemplate = {
    props: {
        field: String
    },
     data: function () {
        return {
            items: items
        };
    },
    computed: {
        min() {
            return this.items.reduce((acc, current) => Math.min(acc, current[this.$props.field]), Number.MAX_VALUE);
        },
        max() {
            return this.items.reduce((acc, current) => Math.max(acc, current[this.$props.field]), Number.MIN_VALUE);
        }
    },
    template: `<b>
            min: {{min}}, max: {{max}}
        </b>`
};

export default {
    components: {
        'grid': Grid
    },
    data: function () {
        return {
            columns: [
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name' },
                { field: 'UnitPrice', title: 'Unit Price', headerCell: markRaw(headerTemplate) }
            ],
            items: items
        };
    }
};

</script>
