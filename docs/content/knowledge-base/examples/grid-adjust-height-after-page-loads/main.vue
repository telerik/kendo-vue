<template>
  <div
    ref="gridContainer"
    :style="{ height: '520px', border: 'solid 1px black' }"
  >
    <Grid
      ref="grid"
      :data-items="result"
      :edit-field="'inEdit'"
      :sortable="true"
      :sort="sort"
      :filterable="true"
      :filter="filter"
      :pageable="true"
      :skip="skip"
      :take="take"
      @rowclick="rowClick"
      @sortchange="sortChangeHandler"
      @filterchange="filterChangeHandler"
      @pagechange="pageChangeHandler"
      @itemchange="itemChange"
      :columns="columns"
    >
      <grid-toolbar>
        <div @click="closeEdit">
          <KButton title="Add new" :theme-color="'primary'" @click="addRecord">
            Add new
          </KButton>
        </div>
      </grid-toolbar>
    </Grid>
  </div>
</template>

<script setup>
import { Grid, GridToolbar } from "@progress/kendo-vue-grid";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import { process } from "@progress/kendo-data-query";
import { ref, computed, onMounted, onBeforeUnmount } from "vue";

const sort = ref(null);
const filter = ref(null);
const skip = ref(0);
const take = ref(3);
const editID = ref(null);

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
        field: "UnitsInStock",
        title: "Units",
        width: "150px",
        editor: "numeric",
    },
    { field: "Discontinued", title: "Discontinued", editor: "boolean" },
]);

const gridData = ref([
    {
        ProductID: 1,
        ProductName: "Chai",
        UnitsInStock: 39,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 8, 20),
    },
    {
        ProductID: 2,
        ProductName: "Chang",
        UnitsInStock: 17,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 7, 12),
    },
    {
        ProductID: 3,
        ProductName: "Aniseed Syrup",
        UnitsInStock: 13,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 8, 26),
    },
    {
        ProductID: 4,
        ProductName: "Cajun Seasoning",
        UnitsInStock: 53,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 9, 19),
    },
    {
        ProductID: 5,
        ProductName: "Orange",
        UnitsInStock: 51,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 9, 19),
    },
    {
        ProductID: 6,
        ProductName: "Banana",
        UnitsInStock: 22,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 9, 19),
    },
    {
        ProductID: 7,
        ProductName: "Apple",
        UnitsInStock: 16,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 9, 19),
    },
    {
        ProductID: 8,
        ProductName: "Peach",
        UnitsInStock: 10,
        Discontinued: false,
        FirstOrderedOn: new Date(1996, 9, 19),
    },
]);

const result = computed(() =>
    process(gridData.value, {
        sort: sort.value,
        filter: filter.value,
        take: take.value,
        skip: skip.value,
    })
);

function itemChange(e) {
    const data = [...gridData.value];
    const index = data.findIndex((d) => d.ProductID === e.dataItem.ProductID);
    data[index] = { ...data[index], [e.field]: e.value };
    gridData.value = data;
}

function rowClick(e) {
    gridData.value.forEach((item) => (item.inEdit = false));
    editID.value = e.dataItem.ProductID;
    e.dataItem.inEdit = true;
}

function closeEdit(e) {
    if (e.target === e.currentTarget) {
        editID.value = null;
    }
}

function addRecord() {
    const newRecord = { ProductID: gridData.value.length + 1 };
    const data = [...gridData.value];
    data.unshift(newRecord);
    gridData.value = data;
    editID.value = newRecord.ProductID;
}

function sortChangeHandler(event) {
    sort.value = event.sort;
}

function filterChangeHandler(event) {
    filter.value = event.filter;
}

function pageChangeHandler(event) {
    take.value = event.page.take;
    skip.value = event.page.skip;
}

function adjustGridHeight() {
    const grid = document.querySelector(".k-grid");
    if (grid) {
        grid.style.height = "50%";
    }
}

onMounted(() => {
    setTimeout(() => {
        adjustGridHeight();
    }, 3000);
    window.addEventListener("resize", adjustGridHeight);
});

onBeforeUnmount(() => {
    window.removeEventListener("resize", adjustGridHeight);
});
</script>
