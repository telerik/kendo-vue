<template>
    <div>
        <div>
            <div>
                <input type="checkbox" id="drag" :checked="dragEnabled" @change="onDragChange" />
                <label for="drag">Enable drag selection</label>
                &nbsp;&nbsp;
                <input type="checkbox" id="cell" :checked="cellEnabled" @change="onCellChange" />
                <label for="cell">Enable cell selection</label>
            </div>
            <div>
                <label v-for="mode in selectionModes" :key="mode.value" :style="{ marginRight: '10px' }">
                    <input
                        type="radio"
                        :value="mode.value"
                        :checked="selectionMode === mode.value"
                        @change="onSelectionModeChange(mode.value)"
                    />
                    {{ mode.label }}
                </label>
            </div>
        </div>
        <Grid
            :style="{ height: '400px' }"
            :data-items="products"
            data-item-key="ProductID"
            :select="select"
            :navigatable="true"
            :selectable="selectable"
            @selectionchange="onSelectionChange"
            :columns="columns"
        >
        </Grid>
        <div>
            <div id="startDataItem">
                <strong>Start Data Item:</strong> {{ startDataItem ? JSON.stringify(startDataItem) : 'None' }}
            </div>
            <div id="endDataItem">
                <strong>End Data Item:</strong> {{ endDataItem ? JSON.stringify(endDataItem) : 'None' }}
            </div>
            <br />
            <div>
                <div>Ctrl+Click/Enter - add to selection</div>
                <div>Shift+Click/Enter - select range</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid } from '@progress/kendo-vue-grid';
import products from './gd-products';

const selectionModes = [
    { value: 'single', label: 'Single selection mode' },
    { value: 'multiple', label: 'Multiple selection mode' }
];

const columns = [
    { field: 'ProductName', title: 'Product Name', width: '300px' },
    { field: 'UnitsInStock', title: 'Units In Stock' },
    { field: 'UnitsOnOrder', title: 'Units On Order' },
    { field: 'ReorderLevel', title: 'Reorder Level' }
];

const select = ref({});
const dragEnabled = ref(true);
const cellEnabled = ref(true);
const selectionMode = ref('multiple');
const startDataItem = ref(null);
const endDataItem = ref(null);

const selectable = computed(() => ({
    enabled: true,
    drag: dragEnabled.value,
    cell: cellEnabled.value,
    mode: selectionMode.value
}));

const onSelectionChange = (event) => {
    startDataItem.value = event.startDataItem.ProductID;
    endDataItem.value = event.endDataItem.ProductID;
    select.value = event.select;
};

const onDragChange = (event) => {
    dragEnabled.value = event.target.checked;
};

const onCellChange = (event) => {
    cellEnabled.value = event.target.checked;
};

const onSelectionModeChange = (value) => {
    selectionMode.value = value;
};
</script>
