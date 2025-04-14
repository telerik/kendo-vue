<template>
        <grid
            :style="{height: '230px'}"
            :data-items="items"
            :columns="columns"
            >
            <template v-slot:myHeaderTemplate="{props}">
                    <a class="k-link" @click="props.onClick">
                        <span class="k-icon k-i-cart" />
                        <span style="color: #53d2fa">
                            {{props.title}}
                        </span>
                            {{props.children}}
                        </a>
            </template>
        </grid>
</template>
<script>
import { Grid } from '@progress/kendo-vue-grid';
import products from "./products.json";

export default {
    components: {
        'grid': Grid
    },
    data: function () {
        return {
            columns: [
                { field: 'ProductID', title: 'ID', width: "40px" },
                { field: 'ProductName', title: 'Product Name', headerCell: "myHeaderTemplate" },
                { field: 'Category.CategoryName', title: 'CategoryName' },
                { field: 'UnitPrice', title: 'Price'  },
                { field: 'UnitsInStock', title: 'In stock' }
            ],
            items: products.slice(0, 6)
        };
    }
};

</script>
