<template>
  <div ref="divWrapper" style="width: 70%">
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
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  unmount() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  mounted() {
    this.gridWidth = this.$refs.divWrapper.offsetWidth;
  },
  computed: {
    columns() {
      return [
        { field: "ProductID", title: "ID", width: this.setPercentage(10) },
        {
          field: "ProductName",
          title: "Name",
          width: this.setPercentage(30),
        },
        {
          field: "Category.CategoryName",
          title: "CategoryName",
          width: this.setPercentage(30),
        },
        { field: "UnitPrice", title: "Price", width: this.setPercentage(15) },
        {
          field: "UnitsInStock",
          title: "In stock",
          width: this.setPercentage(15),
        },
      ];
    },
  },
  methods: {
    setPercentage(percentage) {
      return Math.round(this.gridWidth / 100) * percentage;
    },
    myEventHandler(e) {
      this.gridWidth = this.$refs.divWrapper.offsetWidth;
    },
  },
};
</script>