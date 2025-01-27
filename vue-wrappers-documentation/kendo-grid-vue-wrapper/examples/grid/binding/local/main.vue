<template>
   <kendo-grid :data-source="localDataSource">
    </kendo-grid>
</template>

<script>
import { Grid } from '@progress/kendo-grid-vue-wrapper';

export default {
      components: {
          'kendo-grid': Grid
      },
      data: function () {
        return {
          localDataSource: [{
              "ProductID": 1,
              "ProductName": "Chai",
              "UnitPrice": 18,
              "UnitsInStock": 39,
              "Discontinued": false,
          },
          {
              "ProductID": 2,
              "ProductName": "Chang",
              "UnitPrice": 17,
              "UnitsInStock": 40,
              "Discontinued": false,
          },
          {
              "ProductID": 3,
              "ProductName": "Aniseed Syrup",
              "UnitPrice": 10,
              "UnitsInStock": 13,
              "Discontinued": false,
          },
          {
              "ProductID": 4,
              "ProductName": "Chef Anton",
              "UnitPrice": 22,
              "UnitsInStock": 53,
              "Discontinued": false,
          },
          {
              "ProductID": 5,
              "ProductName": "Chef Gumbo Mix",
              "UnitPrice": 21.35,
              "UnitsInStock": 0,
              "Discontinued": true,
          },
          {
              "ProductID": 6,
              "ProductName": "Boysenberry Spread",
              "UnitPrice": 25,
              "UnitsInStock": 120,
              "Discontinued": false,
          }]
        };
    }
  }
</script>

<style>
  #fieldlist {
    margin: 0;
    padding: 0;
  }

  #fieldlist li {
    list-style: none;
    padding-bottom: .7em;
    text-align: left;
  }

  #fieldlist label {
    display: block;
    padding-bottom: .3em;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 12px;
    color: #444;
  }

  #fieldlist li.status {
    text-align: center;
  }

  #fieldlist li .k-widget:not(.k-tooltip),
  #fieldlist li .k-textbox {
    margin: 0 5px 5px 0;
  }

  .confirm {
    padding-top: 1em;
  }

  .valid {
    color: green;
  }

  .invalid {
    color: red;
  }

  #fieldlist li input[type="checkbox"] {
    margin: 0 5px 0 0;
  }

  span.k-widget.k-tooltip-validation {
    display: inline-block;
    width: 160px;
    text-align: left;
    border: 0;
    padding: 0;
    margin: 0;
    background: none;
    box-shadow: none;
    color: red;
  }

  .k-tooltip-validation .k-warning {
    display: none;
  }
</style>