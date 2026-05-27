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
    <template #statusCell="{ props }">
      <StatusCell
        :data-item="props.dataItem"
        :field="props.field"
        :class-name="'statusColumn'"
        @activeChange="(e) => activeChange(e, props.dataItem)"
        @publicChange="(e) => publicChange(e, props.dataItem)"
        @hideChange="(e) => hideChange(e, props.dataItem)"
      />
    </template>
    <grid-toolbar>
      <KButton title="Add new" :theme-color="'primary'" @click="insert">
        Add new
      </KButton>
      <KButton
        v-if="hasItemsInEdit"
        title="Cancel current changes"
        @click="cancelChanges"
      >
        Cancel current changes
      </KButton>
    </grid-toolbar>
    <GridNoRecords> There is no data available custom </GridNoRecords>
  </Grid>
</template>

<script setup>
import { Grid, GridToolbar, GridNoRecords } from "@progress/kendo-vue-grid";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import CommandCell from "./CommandCell.vue";
import StatusCell from "./StatusCell.vue";
import { ref, computed } from "vue";

const sampleProducts = [
    {
        ProductID: 1,
        ProductName: "Chai",
        UnitsInStock: 39,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 8, 20),
        Status: {
            active: true,
            public: false,
            hide: false,
        },
    },
    {
        ProductID: 2,
        ProductName: "Chang",
        UnitsInStock: 17,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 7, 12),
        Status: {
            active: true,
            public: false,
            hide: false,
        },
    },
    {
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        UnitsInStock: 13,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 8, 26),
        Status: {
            active: true,
            public: false,
            hide: false,
        },
    },
    {
        ProductID: 4,
        ProductName: "Chef Anton's Cajun Seasoning",
        UnitsInStock: 53,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 9, 19),
        Status: {
            active: true,
            public: false,
            hide: false,
        },
    },
];

const gridData = ref(sampleProducts.slice(0));
const columns = ref([
    { field: "ProductID", editable: false, title: "ID", width: "50px" },
    { field: "ProductName", title: "Name" },
    {
        field: "FirstOrderedOn",
        editor: "date",
        title: "First Ordered",
        format: "{0:d}",
    },
    {
        field: "UnitsInStock",
        title: "Units",
        width: "70px",
        editor: "numeric",
    },
    {
        field: "Status",
        title: "Status",
        cell: "statusCell",
        width: "120px",
    },
    { cell: "myTemplate", width: "180px" },
]);

const hasItemsInEdit = computed(() => gridData.value.some((p) => p.inEdit));

function activeChange(e, dataItem) {
    const updatedData = [...gridData.value];
    const item = update(updatedData, dataItem);
    item.Status.active = e.value;
    gridData.value = updatedData;
}

function publicChange(e, dataItem) {
    const updatedData = [...gridData.value];
    const item = update(updatedData, dataItem);
    item.Status.public = e.value;
    gridData.value = updatedData;
}

function hideChange(e, dataItem) {
    const updatedData = [...gridData.value];
    const item = update(updatedData, dataItem);
    item.Status.hide = e.value;
    gridData.value = updatedData;
}

function itemChange(e) {
    const updatedData = [...gridData.value];
    const item = update(updatedData, e.dataItem);
    item[e.field] = e.value;
    gridData.value = updatedData;
}

function insert() {
    const dataItem = { inEdit: true, Discontinued: false };
    const newProducts = [...gridData.value];
    newProducts.unshift(dataItem);
    update(newProducts, dataItem);
    gridData.value = newProducts;
}

function edit(e) {
    e.dataItem.inEdit = true;
}

function save(e) {
    e.dataItem.inEdit = undefined;
}

function update(data, item, remove) {
    let updated;
    let itemProductID = item.ProductID;
    let index = data.findIndex(
        (p) =>
            JSON.stringify({ ...p }) === JSON.stringify(item) ||
      (itemProductID && p.ProductID === itemProductID)
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
        index = 0;
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
    gridData.value = [...gridData.value];
}

function cancelChanges() {
    sampleProducts.forEach((item) => {
        item.inEdit = undefined;
    });
    gridData.value = sampleProducts.slice();
}
</script>

<style>
.k-grid td.statusColumn {
  padding: 0px;
}
</style>
