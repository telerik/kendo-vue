<template>
  <Grid :style="{ height: '280px' }" :data-items="items" :columns="columns" />
</template>

<script setup>
import { ref, markRaw } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

const items = ref([
    { ProductID: 1, ProductName: 'Chai', UnitPrice: 18.0 },
    { ProductID: 2, ProductName: 'Chang', UnitPrice: 19.0 },
    { ProductID: 3, ProductName: 'Aniseed Syrup', UnitPrice: 10.0 },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning", UnitPrice: 22.0 },
]);

const footerTemplate = markRaw({
    props: {
        field: String,
    },
    data() {
        return {
            items: items.value,
        };
    },
    computed: {
        min() {
            return this.items.reduce(
                (acc, current) => Math.min(acc, current[this.$props.field]),
                Number.MAX_VALUE
            );
        },
        max() {
            return this.items.reduce(
                (acc, current) => Math.max(acc, current[this.$props.field]),
                Number.MIN_VALUE
            );
        },
    },
    template: `<b>min: {{min}}, max: {{max}}</b>`,
});

const columns = ref([
    { field: 'ProductID' },
    { field: 'ProductName', title: 'Product Name' },
    { field: 'UnitPrice', title: 'Unit Price', footerCell: footerTemplate },
]);
</script>
