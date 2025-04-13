<template>
  <div ref="divWrapper">
    <Grid style="height: 400px" :data-items="products" :columns="columns">
    </Grid>
  </div>
</template>
<script>
import { Grid } from "@progress/kendo-vue-grid";
import products from "./products.json";

export default {
  components: {
    Grid: Grid,
  },
  data: function () {
    return {
      gridWidth: 0,
      products: products,
    };
  },
  mounted() {
    this.gridWidth = this.$refs.divWrapper.offsetWidth;
  },
  computed: {
    columns() {
      return [
        { field: "ProductID", title: "ID" },
        { field: "ProductName", title: "Name" },
        { field: "Category.CategoryName", title: "CategoryName" },
        { field: "UnitPrice", title: "Price" },
        { field: "UnitsInStock", title: "In stock" },
      ];
    },
  },
};
</script>
<style>
.k-grid-header col:nth-of-type(1) {
  width: 10%;
}

.k-grid-table col:nth-of-type(1) {
  width: 10%;
}

.k-grid-header col:nth-of-type(2) {
  width: 40%;
}

.k-grid-table col:nth-of-type(2) {
  width: 40%;
}

.k-grid-header col:nth-of-type(3) {
  width: 40%;
}

.k-grid-table col:nth-of-type(3) {
  width: 40%;
}

.k-grid-header col:nth-of-type(4) {
  width: 10%;
}

.k-grid-table col:nth-of-type(4) {
  width: 10%;
}
</style>