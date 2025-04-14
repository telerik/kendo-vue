<template>
  <div>
    <KButton @click="toggleProductNameVisibility"
      >Toggle ProductName Visibility</KButton
    >
    <KButton @click="toggleCategoryNameVisibility"
      >Toggle CategoryName Visibility</KButton
    >
    <Grid
      :style="{ height: '400px' }"
      :data-items="dataItems"
      :columns="columns"
    >
    </Grid>
  </div>
</template>
<script>
import { Grid } from "@progress/kendo-vue-grid";
import { Button as KButton } from "@progress/kendo-vue-buttons";
import products from "./products.json";

export default {
  components: {
    Grid,
    KButton,
  },
  data: function () {
    return {
      dataItems: products,
      isProductNameHidden: false,
      isCategoryNameHidden: false,
    };
  },
  computed: {
    columns() {
      return [
        { field: "ProductID" },
        {
          field: "ProductName",
          title: "Product Name",
          hidden: this.isProductNameHidden,
        },
        {
          field: "Category.CategoryName",
          title: "Category Name",
          hidden: this.isCategoryNameHidden,
          // media: "(max-width: 500px)",
        },
        { field: "UnitPrice", title: "Unit Price" },
        {
          field: "UnitsInStock",
          title: "In Stock",
          media: "(max-width: 700px)",
        },
      ];
    },
  },
  methods: {
    toggleProductNameVisibility() {
      this.isProductNameHidden = !this.isProductNameHidden;
    },
    toggleCategoryNameVisibility() {
      this.isCategoryNameHidden = !this.isCategoryNameHidden;
    },
  },
};
</script>
