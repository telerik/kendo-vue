<template>
  <div>
    <Grid
      ref="grid"
      :style="{ height: '520px' }"
      :data-items="products"
      :selected-field="selectedField"
      :columns="columns"
      @rowclick="onRowClick"
    >
    </Grid>
  </div>
</template>
<script>
import { Grid } from "@progress/kendo-vue-grid";

export default {
  components: {
    Grid: Grid,
  },
  data: function () {
    return {
      selectedField: "selected",
      selectedID: 1,
      products: [],
      columns: [
        { field: "ProductID", title: "ID", width: "50px" },
        { field: "ProductName", title: "Product Name" },
        { field: "UnitPrice", filter: "numeric", title: "Unit Price" },
        { field: "UnitsInStock", title: "Units In Stock" },
      ],
    };
  },
  methods: {
    onRowClick(event) {
      if (event.event.metaKey || event.event.ctrlKey || event.event.shiftKey) {
        event.dataItem[this.selectedField] =
          !event.dataItem[this.selectedField];
      }
    },
    createRandomData(count) {
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

      return Array(count)
        .fill({})
        .map((_, idx) => ({
          ProductID: idx + 1,
          ProductName:
            productNames[Math.floor(Math.random() * productNames.length)],
          UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)],
          UnitsInStock: Math.floor(Math.random() * 100),
        }));
    },
  },
  mounted() {
    this.products = this.createRandomData(1000);
  },
};
</script>
