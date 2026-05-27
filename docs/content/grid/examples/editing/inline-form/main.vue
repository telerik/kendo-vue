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
        :className="props.class"
        :data-item="props.dataItem"
        :allow-save="nameValidState"
        @edit="edit"
        @save="save"
        @remove="remove"
        @cancel="cancel"
      />
    </template>
    <template #myNameCell="{ props }">
      <NameCell
        ref="namecell"
        :className="props.class"
        :data-item="props.dataItem"
        :field="props.field"
        @change="(e) => nameChange(e, props.dataItem)"
        @valid="updateNameValidState"
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
import NameCell from './NameCell.vue';
import { isLengthAboveThree } from './verificationFunctions.js';

const sampleProducts = [
    { ProductID: 1, ProductName: 'Chai' },
    { ProductID: 2, ProductName: 'Chang' },
    { ProductID: 3, ProductName: 'Aniseed Syrup' },
    { ProductID: 4, ProductName: "Chef Anton's Cajun Seasoning" },
];

const gridData = ref(sampleProducts.slice(0));
const columns = ref([
    { field: 'ProductID', editable: false, title: 'ID', width: '80px' },
    { field: 'ProductName', title: 'Name', cell: 'myNameCell' },
    { cell: 'myTemplate', width: '210px' },
]);

const nameValidState = ref(true);
const initialDataItem = ref(undefined);

const hasItemsInEdit = computed(() =>
    gridData.value.some((p) => p.inEdit)
);

function nameChange(e, dataItem) {
    if (nameValidState.value) {
        const updatedData = [...gridData.value];
        const item = update(updatedData, dataItem, false);
        item.ProductName = e.target.value;
        gridData.value = updatedData;
    }
}

function validate(dataItem) {
    const productNameValue = dataItem.ProductName;
    return isLengthAboveThree(productNameValue);
}

function itemChange(e) {
    const updatedData = [...gridData.value];
    const item = update(updatedData, e.dataItem, false);
    item[e.field] = e.value;
    gridData.value = updatedData;
}

function insert() {
    const updatedData = [...gridData.value];
    const dataItem = { inEdit: true, Discontinued: false, isNew: true };
    const item = update(updatedData, dataItem, false);
    updatedData.unshift(item);
    gridData.value = updatedData;
}

function edit(e) {
    initialDataItem.value = { ...e.dataItem };
    e.dataItem.inEdit = true;
}

function save(e) {
    if (validate(e.dataItem)) {
        const index = gridData.value.findIndex(
            (p) => p.ProductID === e.dataItem.ProductID
        );
        const item = gridData.value[index];
        const updated = { ...update([...gridData.value], item, false), inEdit: undefined };
        gridData.value.splice(index, 1, updated);
    }
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
    if (!e.isNew && initialDataItem.value) {
        e.dataItem.inEdit = undefined;
        gridData.value.shift();
        update(gridData.value, initialDataItem.value, false);
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

function updateNameValidState(value) {
    nameValidState.value = value;
}
</script>
