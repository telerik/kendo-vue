<template>
  <Grid
    ref="grid"
    :style="{ height: '640px' }"
    :data-items="gridData"
    :edit-field="'inEdit'"
    :sortable="true"
    :sort="sort"
    :pageable="pageable"
    :take="take"
    :skip="skip"
    :total="total"
    :show-loader="showLoader"
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
import { ref, computed, onMounted } from 'vue';
import { Grid, GridToolbar, GridNoRecords } from '@progress/kendo-vue-grid';
import { Button as KButton } from '@progress/kendo-vue-buttons';
import { toODataString } from '@progress/kendo-data-query';
import CommandCell from './CommandCell.vue';

const baseUrl = 'https://demos.telerik.com/service/v2/odata/Products';
const init = { method: 'GET', accept: 'application/json', headers: {} };

const filter = ref(null);
const sort = ref(null);
const pageable = ref(true);
const gridData = ref([]);
const skip = ref(0);
const take = ref(10);
const total = ref(0);
const showLoader = ref(false);
const columns = ref([
    { field: 'ProductID', editable: false, width: 60, title: 'id' },
    { field: 'ProductName' },
    {
        field: 'UnitPrice',
        title: 'Unit Price',
        editor: 'numeric',
        format: '{0:c}',
        width: 120,
    },
    {
        field: 'UnitsInStock',
        title: 'Units In Stock',
        editor: 'numeric',
        width: 120,
    },
    { field: 'Discontinued', width: 120, editor: 'boolean' },
    { cell: 'myTemplate', filterable: false, width: '210px' },
]);

const hasItemsInEdit = computed(() =>
    gridData.value.some((p) => p.inEdit)
);

const dataState = computed(() => ({
    sort: sort.value,
    skip: skip.value,
    take: take.value,
}));

onMounted(() => {
    getData();
});

function updateService(action = '', item) {
    const idIfNeeded =
    action === 'DELETE' || action === 'PUT' ? `(${item.ProductID})` : '';
    const url = baseUrl + idIfNeeded;
    const body =
    action === 'POST' || action === 'PUT'
        ? JSON.stringify({
            ProductID: item.ProductID,
            ProductName: item.ProductName,
            QuantityPerUnit: item.QuantityPerUnit,
            Discontinued: item.Discontinued,
            UnitPrice: item.UnitPrice,
            UnitsInStock: item.UnitsInStock,
        })
        : {};
    fetch(url, {
        method: action,
        accept: 'application/json',
        headers: {
            'Content-type': 'application/json',
        },
        body: body,
    }).then((response) => {
        if (response.ok) {
            getData();
        } else {
            alert('request failed');
        }
    });
}

function itemChange(e) {
    if (e.dataItem.ProductID) {
        const index = gridData.value.findIndex(
            (p) => p.ProductID === e.dataItem.ProductID
        );
        const updated = { ...gridData.value[index], [e.field]: e.value };
        gridData.value.splice(index, 1, updated);
    } else {
        e.dataItem[e.field] = e.value;
    }
}

function insert() {
    const dataItem = { inEdit: true };
    gridData.value.unshift(dataItem);
}

function edit(e) {
    const index = gridData.value.findIndex(
        (p) => p.ProductID === e.dataItem.ProductID
    );
    const updated = { ...gridData.value[index], inEdit: true };
    gridData.value.splice(index, 1, updated);
}

function save(e) {
    const index = gridData.value.findIndex(
        (p) => p.ProductID === e.dataItem.ProductID
    );
    const item = gridData.value[index];
    updateService(item.ProductID ? 'PUT' : 'POST', item);
}

function cancel(e) {
    if (e.dataItem.ProductID) {
        const index = gridData.value.findIndex(
            (p) => p.ProductID === e.dataItem.ProductID
        );
        const updated = { ...gridData.value[index], inEdit: undefined };
        gridData.value.splice(index, 1, updated);
    } else {
        const index = gridData.value.findIndex(
            (p) => JSON.stringify(e.dataItem) === JSON.stringify(p)
        );
        gridData.value.splice(index, 1);
    }
}

function remove(e) {
    e.dataItem.inEdit = undefined;
    updateService('DELETE', e.dataItem);
}

function cancelChanges() {
    getData();
}

function getData() {
    showLoader.value = true;
    fetch(
        baseUrl + '?' + toODataString(dataState.value) + '&$count=true',
        init
    )
        .then((response) => response.json())
        .then((json) => {
            total.value = json['@odata.count'];
            gridData.value = json['value'];
            showLoader.value = false;
        });
}

function dataStateChange(event) {
    take.value = event.data.take;
    skip.value = event.data.skip;
    sort.value = event.data.sort;
    filter.value = event.data.filter;
    getData();
}
</script>
