<template>
	<div ref="divWrapper">
		<Grid 
      ref="grid" 
      style="height: 400px" 
      :data-items="gridData" 
      :resizable="true" 
      :columns="columns"
    >
		</Grid>
	</div>
</template>
<script>
import { Grid } from "@progress/kendo-vue-grid";
import products from "./products.json";


const columnsData = [
  { field: "ProductID", title: "ID" },
  {
    field: "ProductName",
    title: "Name",
  },
  {
    field: "Category.CategoryName",
    title: "CategoryName",
  },
  {
    field: "UnitPrice",
    title: "Price",
    minGridWidth: 500
  },
  {
    field: "UnitsInStock",
    title: "In stock",
    minGridWidth: 600
  }
];

export default {
  components: {
    Grid: Grid
  },
  mounted() {
    this.grid = document.querySelector(".k-grid");
    window.addEventListener("resize", this.handleResize);
    this.defineColumns();
    this.handleResize();
  },
  data: function() {
    return {
      grid:'',
      gridData: products,
      columns: [],
    };
  },
  methods: {
    defineColumns(){
      this.columns = columnsData.map((column, index) => {
        return {
          field: column.field,
          title: column.title
        };
      });
    },
    handleResize() {
      const currentVisibleColumns = columnsData.filter((c) => !(c.minGridWidth > this.grid.offsetWidth));
      if (currentVisibleColumns.length !== this.columns.length) {
          this.columns = currentVisibleColumns
      }
    }
  }
};
</script>