<template>
    <grid
        :style="{height: '280px'}"
        :data-items="items"
        :columns="columns">
         <template v-slot:myTemplate="{props, listeners}">
            <td  :class="props.className" v-html="getNestedValue(props.field, props.dataItem)"></td>
        </template>
    </grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';

export default {
    components: {
        'grid': Grid
    },
    data: function () {
        return {
            columns: [
                { field: 'ProductID'},
                { field: 'ProductName', title: 'Product Name', cell: 'myTemplate' },
                { field: 'UnitPrice', title: 'Unit Price' }
            ],
            items: [{
                "ProductID": 1,
                "ProductName": "This is <b>BOLD text</b>",
                "UnitPrice": 18.0000,
            },
            {
                "ProductID": 2,
                "ProductName": "Check <span style='color: red; font-weight: bold'>this styled text</span>",
                "UnitPrice": 19.0000,
            },
            {
                "ProductID": 3,
                "ProductName": "hello my name is <strong> Giuseppe </strong>",
                "UnitPrice": 10.0000,
            },
            {
                "ProductID": 4,
                "ProductName": "<i>Chef Anton's </i>Cajun Seasoning",
                "UnitPrice": 22.0000,
            },
            {
                "ProductID": 5,
                "ProductName": "<span style='color: green'> This is green text</span>",
                "UnitPrice": 22.0000,
            }]
        };
    },
    methods: {
        getNestedValue: function(fieldName, dataItem) {
            const path = fieldName.split('.');
            let data = dataItem;
            path.forEach((p) => {
                data = data ? data[p] : undefined;
            });

            return data;
        }
    }
};

</script>
