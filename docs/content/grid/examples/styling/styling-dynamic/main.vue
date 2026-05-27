<template>
  <Grid
    :data-items="data"
    :columns="columns"
    :editField="'inEdit'"
    :scrollable="'none'"
    @itemchange="itemChange"
  />
</template>

<script setup>
import { ref } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';

const initialData = [
    {
        ProductID: 1,
        ProductName: 'Tea',
        UnitPrice: 18,
        UnitsOnOrder: 20,
        inEdit: true,
    },
    {
        ProductID: 2,
        ProductName: 'Coffee',
        UnitPrice: 10,
        UnitsOnOrder: 55,
        inEdit: true,
    },
];

const data = ref(initialData);

const columns = [
    { field: 'ProductName', title: 'Product Name', editable: false },
    { field: 'UnitPrice', title: 'Price', editor: 'numeric' },
    { field: 'UnitsOnOrder', title: 'Units On Order', editor: 'numeric' },
    { title: 'Total value', cell: cellWithBackGround },
];

function itemChange(event) {
    const field = event.field || '';
    event.dataItem[field] = event.value;
    data.value = data.value.map((item) =>
        item.ProductID === event.dataItem.ProductID
            ? { ...item, [field]: event.value }
            : item
    );
}

function cellWithBackGround(h, tdElement, props) {
    const product = props.dataItem.UnitPrice * props.dataItem.UnitsOnOrder;

    if (product < 400) {
        return h(
            'td',
            { style: { backgroundColor: 'rgba(55, 180, 0, 0.32)' } },
            [product]
        );
    }

    return h(
        'td',
        { style: { backgroundColor: 'rgba(243, 23, 0, 0.32)' } },
        [product, h('span', {}, ' Maximum exceeded')]
    );
}
</script>
