<template>
  <Grid :style="{ height: '200px' }" :data-items="products" :columns="columns">
  </Grid>
</template>
<script>
import { Grid } from "@progress/kendo-vue-grid";
const products = [
  {
    ProductID: 1,
    ProductName: "Chai",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "10 boxes x 20 bags",
    UnitPrice: "18",
    UnitsInStock: 39,
    UnitsOnOrder: 0,
    ReorderLevel: 10,
    Discontinued: false,
    Category: {
      CategoryID: 1,
      CategoryName: "Beverages",
      Description: "Soft drinks, coffees, teas, beers, and ales"
    },
    FirstOrderedOn: "1996-09-19T23:00:00.000Z"
  },
  {
    ProductID: 2,
    ProductName: "Chang",
    SupplierID: 1,
    CategoryID: 1,
    QuantityPerUnit: "24 - 12 oz bottles",
    UnitPrice: "21.3545677",
    UnitsInStock: 17,
    UnitsOnOrder: 40,
    ReorderLevel: 25,
    Discontinued: false,
    Category: {
      CategoryID: 1,
      CategoryName: "Beverages",
      Description: "Soft drinks, coffees, teas, beers, and ales"
    },
    FirstOrderedOn: "1996-08-11T23:00:00.000Z"
  }
];

export default {
  components: {
    Grid: Grid
  },
  data: function() {
    return {
      products: products,
      columns: [
        {
          field: "ProductID",
          title: "Product ID",
          width: "50px"
        },
        { field: "ProductName", title: "Product Name" },
        {
          field: "FirstOrderedOn",
          title: "Formatted ISO Date",
          type: "date",
          format: "{0:yyyy-MM-ddTHH:mm:ssXXX}"
        },
        {
          field: "UnitPrice",
          title: "Formatted Unit Price",
          type: "number",
          format: "{0:c}"
        },
        { field: "Discontinued", filter: "boolean", title: "Discontinued" }
      ]
    };
  }
};
</script>
