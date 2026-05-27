<template>
  <Grid
    ref="grid"
    :style="{ height: '500px' }"
    :data-items="gridData"
    :edit-field="'inEdit'"
    :sortable="true"
    :take="take"
    :skip="skip"
    :total="total"
    :row-render="cellFunction"
    :columns="columns"
  >
    <template #myTemplate="{ props }">
      <ActionCell :data-item="props.dataItem" @actionselect="actionSelected" />
    </template>
    <GridNoRecords> There is no data available custom </GridNoRecords>
  </Grid>
</template>

<script setup>
import { Grid, GridNoRecords } from "@progress/kendo-vue-grid";
import ActionCell from "./ActionCell.vue";
import { ref } from "vue";

const take = ref(10);
const skip = ref(0);
const total = ref(10);

const columns = ref([
    { field: "ProductID", filterable: false, editable: false, title: "ID", width: "80px" },
    { field: "ProductName", title: "Name" },
    { field: "UnitPrice", filter: "numeric", title: "Unit Price" },
    {
        field: "UnitsInStock",
        title: "Units",
        filter: "numeric",
        width: "120px",
        editor: "numeric",
    },
    {
        field: "Ready",
        title: "Ready for shipping",
        filter: "numeric",
        width: "170px",
        editor: "numeric",
    },
    { title: "Change status", cell: "myTemplate", filterable: false, width: "125px" },
]);

const gridData = ref(createRandomData(total.value));

function actionSelected(e) {
    e.action === "accept" ? (e.dataItem.Ready = true) : (e.dataItem.Ready = false);
}

function createRandomData(count) {
    const productNames = [
        "Chai",
        "Chang",
        "Syrup",
        "Apple",
        "Orange",
        "Banana",
        "Lemon",
        "Pineapple",
        "Tea",
        "Milk",
    ];
    const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120];
    const units = [2, 7, 12, 25, 67, 233, 123, 53, 67, 89];
    const trueFalse = [true, false];

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            ProductID: idx + 1,
            ProductName: productNames[Math.floor(Math.random() * productNames.length)],
            UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
            UnitsInStock: units[Math.floor(Math.random() * units.length)],
            Ready: trueFalse[Math.floor(Math.random() * trueFalse.length)],
        }));
}

function cellFunction(h, trElement, defaultSlots, props) {
    const available = props.dataItem.Ready;
    const green = {
        backgroundColor: "rgb(55, 180, 0,0.32)",
    };
    const red = {
        backgroundColor: "rgb(243, 23, 0, 0.32)",
    };
    const trProps = {
        style: available ? green : red,
    };

    return h("tr", trProps, defaultSlots);
}
</script>
