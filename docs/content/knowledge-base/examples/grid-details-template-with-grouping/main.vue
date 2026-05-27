<template>
  <Grid
    ref="grid"
    :cell-render="cellTemplate"
    :style="{ height: '520px' }"
    :data-items="gridData"
    :resizable="true"
    :reorderable="true"
    :sortable="true"
    :pageable="gridPageable"
    :groupable="true"
    :group="group"
    :take="take"
    :skip="skip"
    :expand-field="'expanded'"
    :detail="cellDetailTemplate"
    :columns="columns"
    @datastatechange="dataStateChange"
    @expandchange="expandChange"
  >
    <template #myTemplate="{ props }">
      <CustomCell
        :field="props.field"
        :expanded="props.expanded"
        :row-type="props.rowType"
        :level="props.level"
        :column-index="props.columnIndex"
        :columns-count="props.columnsCount"
        :data-item="props.dataItem"
        :class-name="props.className"
        @click="clickHandler(props.dataItem)"
      />
    </template>
    <template #cellDetailTemplate="{ props }">
      <section>
        <p><strong>Descriptions:</strong> {{ props.dataItem.ProductName }}</p>
      </section>
    </template>
  </Grid>
</template>

<script setup>
import { Grid } from "@progress/kendo-vue-grid";
import { process } from "@progress/kendo-data-query";
import CustomCell from "./CustomCell.vue";
import { ref } from "vue";

const gridPageable = { pageSizes: true };
const take = ref(10);
const skip = ref(0);
const group = ref([{ field: "UnitsInStock" }]);
const columns = ref([
    { field: "ProductID", filterable: false, title: "ID", width: "50px" },
    { field: "ProductName", title: "Product Name" },
    { field: "UnitPrice", filter: "numeric", title: "Unit Price" },
    { field: "UnitsInStock", title: "Units In Stock" },
]);

const products = ref(createRandomData(1000));
const gridData = ref([]);

function getData() {
    gridData.value = process(products.value, {
        take: take.value,
        skip: skip.value,
        group: group.value,
    });
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

    return Array(count)
        .fill({})
        .map((_, idx) => ({
            ProductID: idx + 1,
            ProductName: productNames[Math.floor(Math.random() * productNames.length)],
            UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
            UnitsInStock: units[Math.floor(Math.random() * units.length)],
        }));
}

function clickHandler(dataItem) {
    dataItem.expanded = dataItem.expanded === undefined ? true : !dataItem.expanded;
}

function dataStateChange(event) {
    group.value = event.data.group;
    take.value = event.data.take;
    skip.value = event.data.skip;
    getData();
}

function expandChange(event) {
    event.dataItem[event.target.$props.expandField] = event.value;
}

getData();
</script>
