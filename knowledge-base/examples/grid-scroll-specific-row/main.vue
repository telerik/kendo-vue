<template>
  <div>
    <button @click="scrollToRow">Scroll to Row 15</button>
    <div @keydown="handleKeyDown">
      <Grid
        ref="grid"
        :style="{ height: '410px' }"
        :data-items="items"
        :selected-field="selectedField"
        :columns="columns"
        @rowclick="handleRowClick"
      >
      </Grid>
    </div>
  </div>
</template>

<script>
import { Grid } from "@progress/kendo-vue-grid";
import products from "./products.json";

export default {
  components: {
    Grid: Grid,
  },
  mounted() {
    const a = this.$refs.grid.vs;
    a.container.scrollTop = (this.selectedItem.ProductID - 1) * 36;
  },
  data() {
    return {
      selectedField: "selected",
      selectedItem: {
        ProductID: 48,
        ProductName: "Chocolade",
        SupplierID: 22,
        CategoryID: 3,
        QuantityPerUnit: "10 pkgs.",
        UnitPrice: 12.75,
        UnitsInStock: 15,
        UnitsOnOrder: 70,
        ReorderLevel: 25,
        Discontinued: false,
        Category: {
          CategoryID: 3,
          CategoryName: "Confections",
          Description: "Desserts, candies, and sweet breads",
        },
      },
      products: products,
      columns: [
        { field: "ProductName", title: "Product Name", width: "300px" },
        { field: "UnitsInStock", title: "Units In Stock" },
        { field: "UnitsOnOrder", title: "Units On Order" },
        { field: "ReorderLevel", title: "Reorder Level" },
      ],
    };
  },
  computed: {
    items() {
      return this.products.map((item) => ({
        ...item,
        selected: this.selectedItem
          ? item.ProductID === this.selectedItem.ProductID
          : false,
      }));
    },
  },
  methods: {
    scrollToRow() {
      const productIDToScroll = 15;

      const index = this.products.findIndex(
        (item) => item.ProductID === productIDToScroll
      );

      if (index !== -1) {
        const gridScrollHeight = 36;
        this.$refs.grid.vs.container.scrollTop = index * gridScrollHeight;

        this.selectedItem = this.products[index];
      }
    },
  },
};
</script>
