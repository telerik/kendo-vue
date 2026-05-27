<template>
    <div>
        <div :style="{ padding: '5px', color: '#999' }">
            <div>Ctrl+Click/Enter - add to selection</div>
            <div>Shift+Click/Enter - select range</div>
        </div>
        <Grid
            :data-items="sampleProducts"
            :auto-process-data="true"
            data-item-key="ProductID"
            :reorderable="true"
            :navigatable="true"
            :default-select="{
                4: [0],
                5: [0],
                6: [0],
                7: [0]
            }"
            :selectable="{ enabled: true, drag: true, cell: true, mode: 'multiple' }"
            @selectionchange="selectionChange"
            :columns="columns"
        >
            <StatusBar :data="statusData" />
        </Grid>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Grid, StatusBar, getStatusData } from '@progress/kendo-vue-grid';
import { sampleProducts } from './gd-sample-products';

const columns = [
    {
        title: 'Products',
        children: [
            { field: 'ProductID', title: 'Product ID', width: '100px' },
            { field: 'ProductName', title: 'Product Name', width: '300px' },
            { field: 'UnitsInStock', title: 'Units In Stock' },
            { field: 'UnitsOnOrder', title: 'Units On Order' },
            { field: 'ReorderLevel', title: 'Reorder Level' },
            { field: 'Discontinued', title: 'Discontinued' },
            { field: 'FirstOrderedOn', title: 'Date', format: '{0:d}' }
        ]
    }
];

const statusData = ref([
    { type: 'count', formattedValue: '0', value: 0 }
]);

const selectionChange = (event) => {
    statusData.value = getStatusData({
        dataItems: sampleProducts,
        target: event.target,
        select: event.select,
        dataItemKey: 'ProductID'
    });
};
</script>
