<template>
  <Grid
    ref="grid"
    :style="{ height: '440px' }"
    :data-items="gridData"
    :edit-field="'inEdit'"
    @itemchange="itemChange"
    :columns="columns"
  >
    <template #myTemplate="{ props }">
      <CommandCell
        :data-item="props.dataItem"
        @edit="edit"
        @save="save"
        @remove="remove"
        @cancel="cancel"
      />
    </template>
    <template #myDropDownCell="{ props }">
      <DropDownCell
        :className="props.class"
        :data-item="props.dataItem"
        :field="props.field"
        @change="(e) => ddChange(e, props.dataItem)"
      />
    </template>
    <GridToolbar>
      <KButton title="Add new" theme-color="primary" @click="insert">
        Add new
      </KButton>
      <KButton
        v-if="hasItemsInEdit"
        title="Cancel current changes"
        @click="cancelChanges"
      >
        Cancel current changes
      </KButton>
    </GridToolbar>
    <GridNoRecords> There is no data available custom </GridNoRecords>
  </Grid>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import CommandCell from './CommandCell.vue';
import DropDownCell from './DropDownCell.vue';

const sampleProducts = [
    {
        ProductID: 1,
        ProductName: 'Chai',
        UnitsInStock: 39,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 8, 20),
    },
    {
        ProductID: 2,
        ProductName: 'Chang',
        UnitsInStock: 17,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 7, 12),
    },
    {
        ProductID: 3,
        ProductName: 'Aniseed Syrup',
        UnitsInStock: 13,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 8, 26),
    },
    {
        ProductID: 4,
        ProductName: "Chef Anton's Cajun Seasoning",
        UnitsInStock: 53,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 9, 19),
    },
];

const gridData = ref(sampleProducts.slice(0));
const columns = ref([
    { field: 'ProductID', editable: false, title: 'ID', width: '80px' },
    { field: 'ProductName', title: 'Name' },
    {
        field: 'FirstOrderedOn',
        editor: 'date',
        title: 'First Ordered',
        format: '{0:d}',
    },
    {
        field: 'UnitsInStock',
        title: 'Units',
        width: '150px',
        editor: 'numeric',
    },
    {
        field: 'Discontinued',
        title: 'Discontinued',
        cell: 'myDropDownCell',
    },
    { cell: 'myTemplate', width: '210px' },
]);

const hasItemsInEdit = computed(() =>
    gridData.value.some((p) => p.inEdit)
);

function ddChange(e, dataItem) {
    const updatedData = [...gridData.value];
    const item = update(updatedData, dataItem, false);
    item.Discontinued = e.target.value;
    gridData.value = updatedData;
}

function itemChange(e) {
    const updatedData = [...gridData.value];
    const item = update(updatedData, e.dataItem, false);
    item[e.field] = e.value;
    gridData.value = updatedData;
}

function insert() {
    const updatedData = [...gridData.value];
    const dataItem = { inEdit: true, Discontinued: false };
    const item = update(updatedData, dataItem, false);
    updatedData.unshift(item);
    gridData.value = updatedData;
}

function edit(e) {
    e.dataItem.inEdit = true;
}

function save(e) {
    e.dataItem.inEdit = undefined;
}

function update(data, item, remove) {
    let updated;
    const index = data.findIndex(
        (p) =>
            JSON.stringify({ ...p }) === JSON.stringify(item) ||
      (item.ProductID && p.ProductID === item.ProductID)
    );
    if (index >= 0) {
        updated = { ...item };
        data[index] = updated;
    } else {
        let id = 1;
        data.forEach((p) => {
            id = Math.max(p.ProductID + 1, id);
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
        e.dataItem.inEdit = undefined;
    } else {
        update(gridData.value, e.dataItem, true);
    }
}

function remove(e) {
    e.dataItem.inEdit = undefined;
    update(gridData.value, e.dataItem, true);
}

function cancelChanges() {
    sampleProducts.forEach((item) => {
        item.inEdit = undefined;
    });
    gridData.value = sampleProducts.slice();
}
</script>
