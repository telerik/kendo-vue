<template>
  <Grid
    ref="grid"
    :data-items="gridData"
    :edit-field="'inEdit'"
    @rowclick="rowClick"
    @cellclick="cellClick"
    @itemchange="itemChange"
    :columns="columns"
  >
    <GridToolbar>
      <KButton title="Save Changes" @click="saveChanges" :disabled="!changes">
        Save Changes
      </KButton>
      <KButton
        title="Cancel Changes"
        @click="cancelChanges"
        :disabled="!changes"
      >
        Cancel Changes
      </KButton>
    </GridToolbar>
  </Grid>
</template>

<script setup>
import { ref } from 'vue';
import { Grid, GridToolbar } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';

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

const gridData = ref(sampleProducts.map((product) => ({ ...product })));
const changes = ref(false);
const editField = ref(undefined);

const columns = [
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
    { field: 'Discontinued', title: 'Discontinued', editor: 'boolean' },
];

function saveChanges() {
    sampleProducts.splice(0, sampleProducts.length, ...gridData.value);
    gridData.value = sampleProducts.map((product) => ({ ...product }));
    editField.value = undefined;
    changes.value = false;
}

function cancelChanges() {
    gridData.value = sampleProducts.map((product) => ({ ...product }));
    changes.value = false;
    editField.value = undefined;
}

function itemChange(e) {
    e.dataItem[e.field] = e.value;
    changes.value = true;
}

function rowClick(e) {
    gridData.value.forEach((d) => {
        if (d.inEdit && e.dataItem !== d) {
            d.inEdit = undefined;
        }
    });
}

function cellClick(e) {
    if (e.dataItem.inEdit && e.field === editField.value) {
        return;
    }
    gridData.value.forEach((d) => (d.inEdit = undefined));
    editField.value = e.field;
    e.dataItem.inEdit = e.field;
}
</script>
