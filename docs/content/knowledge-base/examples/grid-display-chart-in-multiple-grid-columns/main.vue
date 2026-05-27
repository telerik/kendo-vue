<template>
  <Grid ref="grid" :style="{ height: '360px' }" :data-items="gridData" :columns="columns">
    <template #unitsCellTemplate="{ props }">
      <UnitsCell :data-item="props.dataItem" :field="props.field" />
    </template>
    <template #unitsTemplate="{ props }">
      <Units :data-item="props.dataItem" :field="props.field" />
    </template>
    <template #unitsCellReverseTemplate="{ props }">
      <UnitCellReverse :data-item="props.dataItem" :field="props.field" />
    </template>
  </Grid>
</template>

<script setup>
import { Grid } from "@progress/kendo-vue-grid";
import UnitsCell from "./UnitsCell.vue";
import Units from "./Units.vue";
import UnitCellReverse from "./UnitCellReverse.vue";
import { ref } from "vue";

const sampleProducts = [
    {
        ProductID: 1,
        ProductName: "Chai",
        UnitsInStock: 890,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 8, 20),
    },
    {
        ProductID: 2,
        ProductName: "Chang",
        UnitsInStock: 400,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 7, 12),
    },
    {
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        UnitsInStock: 1300,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 8, 26),
    },
    {
        ProductID: 4,
        ProductName: "Chef Anton's Cajun Seasoning",
        UnitsInStock: 1030,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 9, 19),
    },
];

const gridData = ref(sampleProducts.slice(0));
const columns = ref([
    { field: "ProductID", editable: false, title: "ID", width: "80px" },
    { field: "ProductName", title: "Name" },
    {
        field: "FirstOrderedOn",
        editor: "date",
        title: "First Ordered",
        format: "{0:d}",
    },
    {
        field: "Discontinued",
        title: "Units right to left",
        cell: "unitsCellReverseTemplate",
        width: "200px",
    },
    {
        field: "UnitsInStock",
        title: "Units",
        width: "250px",
        cell: "unitsTemplate",
    },
    {
        field: "Discontinued",
        title: "Units presented with Chart",
        cell: "unitsCellTemplate",
    },
]);
</script>
