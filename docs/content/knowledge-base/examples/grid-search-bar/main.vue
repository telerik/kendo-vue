<template>
  <div>
    <div style="padding: 10px 0">
      <Label :editor-id="'search-input'" style="margin-right: 10px">
        Search:
      </Label>
      <Input
        id="search-input"
        :value="searchValue"
        @input="onInput"
        style="
          width: 200px;
          border: 2px solid #ccc;
          box-shadow: inset 0 0 0.5px rgba(0, 0, 0, 0.1);
        "
      />
    </div>

    <Grid
      :data-items="filteredData"
      :columns="columns"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Grid } from "@progress/kendo-vue-grid";
import { Input } from "@progress/kendo-vue-inputs";
import { Label } from "@progress/kendo-vue-labels";

const originalData = [
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
];

const searchValue = ref("");
const filteredData = ref([...originalData]);

const columns = ref([
  { field: "ProductID", title: "ID", width: "80px" },
  { field: "ProductName", title: "Name" },
  { field: "FirstOrderedOn", title: "First Ordered", format: "{0:d}" },
  { field: "UnitsInStock", title: "Units", width: "150px" },
  { field: "Discontinued", title: "Discontinued" },
]);

function onInput(e) {
  searchValue.value = e.value;
  const val = e.value.toLowerCase();
  filteredData.value = originalData.filter((item) => {
    return Object.values(item).some((field) => {
      if (field instanceof Date) {
        return field.toLocaleDateString().includes(val);
      }
      return field?.toString().toLowerCase().includes(val);
    });
  });
}
</script>
