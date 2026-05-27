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
    <template #numericCell="{ props }">
      <NumericCell
        ref="numericCell"
        :className="props.class"
        :data-item="props.dataItem"
        :field="props.field"
        :validRange="unitsFieldValueIsInRange"
        :valueNotEmpty="unitsFieldHasValue"
        @change="(e) => validate(props.dataItem)"
      />
    </template>
    <template #inputCell="{ props }">
      <InputCell
        :className="props.class"
        :data-item="props.dataItem"
        :field="props.field"
        :validLength="productNameFieldLengthaboveThree"
        @change="(e) => validate(props.dataItem)"
      />
    </template>
    <template #dateCell="{ props }">
      <DateCell
        :className="props.class"
        :data-item="props.dataItem"
        :field="props.field"
        :dateInRange="firstOrderedOnDateBetweenRange"
        @change="(e) => validate(props.dataItem)"
      />
    </template>
    <GridToolbar>
      <KButton
        title="Add new"
        :theme-color="'primary'"
        @click="insert"
      >
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
    <GridNoRecords>
      There is no data available custom
    </GridNoRecords>
  </Grid>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { process } from '@progress/kendo-data-query';
import CommandCell from './CommandCell.vue';
import sampleProducts from './products.js';
import NumericCell from './NumericCell.vue';
import InputCell from './InputCell.vue';
import DateCell from './DatePickerCell.vue';
import {
    unitsFieldHasValue,
    unitsFieldValueIsInRange,
    isLengthAboveThree,
    isDateBetweenRange,
} from './verificationFunctions.js';

const filter = ref(null);
const sort = ref(null);
const pageable = ref(true);
const gridData = ref([]);
const skip = ref(0);
const take = ref(10);
const total = ref(10);
const updatedData = ref([]);
const productNameFieldLengthaboveThree = ref(false);
const firstOrderedOnDateBetweenRange = ref(false);
const columns = ref([
    { field: 'ProductID', filterable: false, editable: false, title: 'ID', width: '80px' },
    { field: 'ProductName', title: 'Name', width: '200px', cell: 'inputCell' },
    { field: 'FirstOrderedOn', title: 'First Ordered', width: '200px', cell: 'dateCell' },
    { field: 'UnitsInStock', title: 'Units', width: '200px', cell: 'numericCell' },
    { cell: 'myTemplate', filterable: false },
]);

const hasItemsInEdit = computed(() => gridData.value.filter(p => p.inEdit).length > 0);

onMounted(() => {
    updatedData.value = sampleProducts;
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

function validate(dataItem) {
    const unitsInStockValue = dataItem.UnitsInStock;
    const productNameValue = dataItem.ProductName;
    const orderDateValue = dataItem.FirstOrderedOn;

    unitsFieldHasValue.value = unitsFieldHasValue(unitsInStockValue);
    unitsFieldValueIsInRange.value = unitsFieldValueIsInRange(unitsInStockValue);
    productNameFieldLengthaboveThree.value = isLengthAboveThree(productNameValue);
    firstOrderedOnDateBetweenRange.value = isDateBetweenRange(orderDateValue);

    return (
        unitsFieldHasValue.value &&
    unitsFieldValueIsInRange.value &&
    productNameFieldLengthaboveThree.value &&
    firstOrderedOnDateBetweenRange.value
    );
}

function insert() {
    const dataItem = { inEdit: true };
    gridData.value.unshift(dataItem);
}

function edit(e) {
    const index = gridData.value.findIndex(p => p.ProductID === e.dataItem.ProductID);
    const updated = { ...gridData.value[index], inEdit: true };
    gridData.value.splice(index, 1, updated);
}

function save(e) {
    if (validate(e.dataItem)) {
        const index = gridData.value.findIndex(p => p.ProductID === e.dataItem.ProductID);
        const item = gridData.value[index];
        const updated = { ...update(gridData.value.slice(), item, false), inEdit: undefined };
        gridData.value.splice(index, 1, updated);
        const updateDataIndex = updatedData.value.findIndex(p => p.ProductID === e.dataItem.ProductID);
        updatedData.value.splice(updateDataIndex, 1, updated);
    }
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
    gridData.value = [...gridData.value];
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

    total.value = process(updatedData.value, {
        filter: filter.value,
    }).total;
}

function createAppState(dataState) {
    take.value = dataState.take;
    skip.value = dataState.skip;
    filter.value = dataState.filter;
    sort.value = dataState.sort;
    getData();
}

function dataStateChange(event) {
    createAppState(event.data);
}
</script>

<style scoped>
.errorMessage {
  display: block;
  color: red;
}

.popup-content {
  color: #787878;
  background-color: #fcf7f8;
  border: 1px solid red;
  width: 180px;
}
</style>
