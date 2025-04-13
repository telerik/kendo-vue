<template>
	<div ref="divWrapper">
		<Grid ref="grid" 
                style="height: 440px;" 
                :data-items="gridData" 
                :resizable="true" 
                :columns="columns">
		</Grid>
	</div>
</template>

<script>
import { Grid } from "@progress/kendo-vue-grid";
import products from "./products.json";

const ADJUST_PADDING = 4;
const COLUMN_MIN = 4;
let minGridWidth = 0;

const columnsData = [
  { field: "ProductID", title: "ID", minWidth: 50 },
  {
    field: "ProductName",
    title: "Name",
    minWidth: 200
  },
  {
    field: "Category.CategoryName",
    title: "CategoryName",
    minWidth: 200
  },
  {
    field: "UnitPrice",
    title: "Price",
    minWidth: 100
  },
  {
    field: "UnitsInStock",
    title: "In stock",
    minWidth: 100
  }
];

export default {
  components: {
    Grid: Grid
  },
  mounted() {
    this.grid = document.querySelector(".k-grid");
    window.addEventListener("resize", this.handleResize);
    columnsData.map(item => {
      return (minGridWidth += item.minWidth);
    });

    this.gridCurrent = this.grid.offsetWidth;
    this.setMinWidth = this.grid.offsetWidth < minGridWidth;
    this.defineColumns();
  },
  data: function() {
    return {
      grid: "",
      setMinWidth: false,
      gridCurrent: 0,
      gridData: products,
      columns: []
    };
  },
  methods: {
    defineColumns(){
      this.columns = columnsData.map((column, index) => {
        return {
          field: column.field,
          title: column.title,
          width: this.setWidth(column.minWidth)
        };
      });
    },
    handleResize() {
      if (this.grid.offsetWidth < minGridWidth && !this.setMinWidth) {
        this.setMinWidth = true;
      } else if (this.grid.offsetWidth > minGridWidth) {
        this.gridCurrent = this.grid.offsetWidth;
        this.setMinWidth = false;
      }
      this.defineColumns();
    },
    setWidth(minWidth) {
      let width = this.setMinWidth
        ? minWidth
        : minWidth + (this.gridCurrent - minGridWidth) / this.columns.length;
      width < COLUMN_MIN ? width : (width -= ADJUST_PADDING);
      return width;
    }
  }
};
</script>