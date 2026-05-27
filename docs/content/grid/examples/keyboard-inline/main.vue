<template>
  <Grid
    ref="grid"
    :style="{ height: '440px' }"
    :data-items="gridData"
    :edit-field="'inEdit'"
    :sortable="true"
    :pageable="pageable"
    :take="take"
    :skip="skip"
    :total="total"
    @itemchange="itemChange"
    @datastatechange="dataStateChange"
    :columns="columns"
    :navigatable="true"
  >
    <template #myTemplate="{ props }">
      <CommandCell
        v-bind="props"
        @edit="edit"
        @save="save"
        @remove="remove"
        @cancel="cancel"
      />
    </template>
    <GridToolbar>
      <KButton title="Add new" @click="insert">Add new</KButton>
      <KButton
        v-if="hasItemsInEdit"
        title="Cancel current changes"
        @click="cancelChanges"
      >
        Cancel current changes
      </KButton>
    </GridToolbar>
    <GridNoRecords>There is no data available custom</GridNoRecords>
  </Grid>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { process } from '@progress/kendo-data-query';
import CommandCell from './CommandCell.vue';

const pageable = true;
const take = ref(10);
const skip = ref(0);
const sort = ref(null);
const filter = ref(null);
const total = ref(100);
const gridData = ref([]);
const updatedData = ref([]);
const columns = [
    { field: 'ProductID', filterable: false, editable: false, title: 'ID', width: '80px' },
    { field: 'ProductName', title: 'Name' },
    { field: 'UnitPrice', filter: 'numeric', title: 'Unit Price' },
    { field: 'UnitsInStock', title: 'Units', filter: 'numeric', width: '200px', editor: 'numeric' },
    { field: 'Discontinued', title: 'Discontinued', editor: 'boolean' },
    { cell: 'myTemplate', filterable: false, width: '210px' },
];

const hasItemsInEdit = computed(() => gridData.value.filter(p => p.inEdit).length > 0);

onMounted(() => {
    updatedData.value = createRandomData(total.value);
    getData();
});

function itemChange(e) {
    if (e.dataItem.ProductID) {
        const index = gridData.value.findIndex(p => p.ProductID === e.dataItem.ProductID);
        const updated = { ...gridData.value[index], [e.field]: e.value };
        gridData.value.splice(index, 1, updated);
    } else {
        e.dataItem[e.field] = e.value;
    }
}

function insert() {
    const dataItem = { inEdit: true };
    gridData.value.splice(0, 0, dataItem);
}

function edit(e) {
    const index = gridData.value.findIndex(p => p.ProductID === e.dataItem.ProductID);
    const updated = { ...gridData.value[index], inEdit: true };
    gridData.value.splice(index, 1, updated);
}

function save(e) {
    const index = gridData.value.findIndex(p => p.ProductID === e.dataItem.ProductID);
    const item = gridData.value[index];
    const updated = { ...update(gridData.value.slice(), item, false), inEdit: undefined };
    gridData.value.splice(index, 1, updated);
    const updateDataIndex = updatedData.value.findIndex(p => p.ProductID === e.dataItem.ProductID);
    updatedData.value.splice(updateDataIndex, 1, updated);
}

function update(data, item, remove) {
    let updated;
    const index = data.findIndex(p => item.ProductID && p.ProductID === item.ProductID);
    if (index >= 0) {
        updated = { ...item };
        data[index] = updated;
    } else {
        let id = 1;
        updatedData.value.forEach(p => {
            if (p.ProductID) {
                id = Math.max(p.ProductID + 1, id);
            }
        });
        updated = { ...item, ProductID: id };
        data.unshift(updated);
    }
    if (remove) {
        data.splice(index, 1);
    }
    return data[index];
}

function cancel(e) {
    if (e.dataItem.ProductID) {
        const index = gridData.value.findIndex(p => p.ProductID === e.dataItem.ProductID);
        const updateDataIndex = updatedData.value.findIndex(p => p.ProductID === e.dataItem.ProductID);
        const updated = { ...updatedData.value[updateDataIndex], inEdit: undefined };
        gridData.value.splice(index, 1, updated);
    } else {
        const index = gridData.value.findIndex(p => JSON.stringify(e.dataItem) === JSON.stringify(p));
        gridData.value.splice(index, 1);
    }
}

function remove(e) {
    e.dataItem.inEdit = undefined;
    update(gridData.value, e.dataItem, true);
    update(updatedData.value, e.dataItem, true);
}

function cancelChanges() {
    const editedItems = updatedData.value.filter(p => p.inEdit === true);
    if (editedItems.length) {
        editedItems.forEach(item => {
            item.inEdit = undefined;
        });
    }
    getData();
}

function getData() {
    gridData.value = process(updatedData.value, {
        take: take.value,
        skip: skip.value,
        sort: sort.value,
        filter: filter.value,
    }).data;

    total.value = process(updatedData.value, {}).total;
}

function createAppState(dataState) {
    take.value = dataState.take;
    skip.value = dataState.skip;
    filter.value = dataState.filter;
    sort.value = dataState.sort;
    getData();
};

function dataStateChange (event) {
    createAppState(event.data);
};

function createRandomData(count) {
    const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
    const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];
    const units = [2, 7, 12, 25, 67, 233, 123, 53, 67, 89];
    const trueFalse = [true, false];

    return Array.from({ length: count }, (_, idx) => ({
        ProductID: idx + 1,
        ProductName: productNames[Math.floor(Math.random() * productNames.length)],
        UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
        UnitsInStock: units[Math.floor(Math.random() * units.length)],
        Discontinued: trueFalse[Math.floor(Math.random() * trueFalse.length)],
    }));
}
</script>
