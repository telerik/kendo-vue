<template>
  <div>
    <div class="example-config">
      <kbutton @click="exportPDFWithMethod">
        Export with method
      </kbutton>
    </div>

    <div id="exportContent" ref="container">
      <grid :data-items="items" :columns="columns">
      </grid>
    </div>
  </div>
</template>

<script>
import { drawDOM, exportPDF } from '@progress/kendo-drawing';
import { Grid } from "@progress/kendo-vue-grid";
import { Button } from '@progress/kendo-vue-buttons';

export default {
  components: {
    grid: Grid,
      'kbutton': Button
  },
  data: function() {
    return {
      items:[
        {
          "ProductID": 1,
          "ProductName": "Chai",
          "SupplierID": 1,
          "CategoryID": 1,
          "QuantityPerUnit": "10 boxes x 20 bags",
          "UnitPrice": 18.0000,
          "UnitsInStock": 39,
          "UnitsOnOrder": 0,
          "ReorderLevel": 10,
          "Discontinued": false,
          "Category": {
              "CategoryID": 1,
              "CategoryName": "Beverages",
              "Description": "Soft drinks, coffees, teas, beers, and ales"
          }
        }
      ],
      columns: [
        { field: "ProductID" },
        { field: "ProductName", title: "Product Name" },
        { field: "UnitPrice", title: "Unit Price" }
      ]
    };
  },
  methods: {
    exportPDFWithMethod: function() {
      let gridElement = document.getElementsByClassName('k-grid')[0];

      drawDOM(gridElement, { paperSize: "A3", margin: 100 }).then((group) => {
          return exportPDF(group);
      }).then((dataUri) => {
          console.log(dataUri.split(';base64,')[1]);
      });    
      }
  }
};
</script>